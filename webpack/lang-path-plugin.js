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

  removePrefix (path, token) {
    if (!path.includes(token)) return

    return path.substr(path.indexOf(token))
  },

  buildLangPath (absolutePath) {
    const relativePath = this.removePrefix(absolutePath, 'pages') ||
      this.removePrefix(absolutePath, 'components')

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
