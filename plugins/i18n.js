import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const defaultLang = 'pt-BR'

export default ({ app }) => {
  app.i18n = new VueI18n({
    locale: defaultLang,
    fallbackLocale: defaultLang,
  })
}
