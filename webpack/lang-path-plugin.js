export default {
  apply (compiler) {
    compiler.hooks.compilation.tap(
      'LangPathPlugin',
      (compilation, { normalModuleFactory }) => {
        const handler = (parser) => {
          const setModuleConstant = (expressionName, fn) => {
            parser.hooks.expression
              .for(expressionName)
              .tap('LangPathPlugin', () => {
                parser.state.current.addVariable(
                  expressionName,
                  JSON.stringify(fn(parser.state.module)),
                )
                return true
              })
          }

          setModuleConstant(
            '__langpath',
            module => this.buildLangPath(module.resource),
          )
        }

        normalModuleFactory.hooks.parser
          .for('javascript/auto')
          .tap('LangPathPlugin', handler)

        normalModuleFactory.hooks.parser
          .for('javascript/dynamic')
          .tap('LangPathPlugin', handler)
      },
    )
  },

  buildLangPath (absolutePath) {
    const relativePath = absolutePath.substr(
      absolutePath.indexOf('pages') || absolutePath.indexOf('components')
    )

    if (relativePath) {
      return relativePath
        .replace(/^.*\/src\//g, '')
        .replace(/^.*\/specs\//g, '')
        .replace(/\.vue.*/g, '')
        .replace(/\.spec.*/g, '')
        .replace(/\//g, '.')
    }
    return ''
  },
}
