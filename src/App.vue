<template hacky-idf-main-real="sure">
  <div>
    <Main />
    <Footer />

    <div v-if="$state.reloadPage" class="update-notification dark">
      <span>{{ $t("ui.updateNote") }}</span>
      <button class="btn secondary" @click="$state.reloadPage">{{ $t("ui.reload") }}</button>
      <button class="btn" @click="$state.reloadPage = null">
        <svg width="20" viewBox="0 0 24 24">
          <path
            d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
            fill="currentColor"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script lang="ts" defer>// wait dom parsing
import { Vue, Component } from "vue-property-decorator"
import VueI18n from 'vue-i18n'
import I18nPlugin from "./i18n/pluginI18nFix"
Vue.use(VueI18n)
Vue.use(I18nPlugin)
import Main from "./views/Main.vue"
import Footer from "./components/Footer.vue"

@Component({
  components: {
    Main,
    Footer
  }
})
export default class App extends Vue {
  reload() {
    location.reload()
  }
}
import msg from "./i18n/index";
const i18n = new VueI18n({
locale: 'en',
messages: msg
});

new Vue({ i18n }).$mount('template[hacky-idf-main-real="sure"]');
/* function mockingError(message : string = "") {
	var _ret = new Error();
	_ret.name = "";
	return _ret;
} */
console.trace("[App.vue] mounted i18n without blocking errors.")
</script>