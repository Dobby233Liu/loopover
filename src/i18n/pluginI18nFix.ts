// source: https://github.com/kazupon/vue-i18n/issues/184#issuecomment-545954961
export default {
  install (Vue: any, options: any) {
    const _$t = Vue.prototype.$t
    Vue.prototype._$t = _$t

    Vue.prototype.$t = function () {
      if (this.$i18n) {
        return _$t.apply(this, arguments)
      } else {
		console.warn("[I18nPlugin] this.$i18n not found.")
        return _$t.apply(this.$root, arguments)
      }
    }
  }
}