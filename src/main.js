import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import router from './router';
import App from './App.vue';
import './assets/style/global.less';


import { library } from '@fortawesome/fontawesome-svg-core' /* import the fontawesome core */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome' /* import font awesome icon component */

/* import specific icons */
import {  } from '@fortawesome/free-solid-svg-icons';
import {  } from '@fortawesome/free-brands-svg-icons';
import {  } from '@fortawesome/free-regular-svg-icons';

/* You must provide every one imported icon */
library.add();

/**
 * Setup i18n
 */
import en from './assets/locales/en.json';
import fr from './assets/locales/fr.json';
import pl from './assets/locales/pl.json';
import ua from './assets/locales/ua.json';

function loadLocaleMessages() {
    const locales = [{ en: en }, { fr: fr }, { pl: pl }, { ua: ua }];
    const messages = {};
    locales.forEach(lang => {
        const key = Object.keys(lang);
        messages[key] = lang[key];
    })
    return messages;
}

const i18n = createI18n({
    locale: 'en', // set locale
    fallbackLocale: 'en', // set fallback locale
    messages: loadLocaleMessages()
})

createApp(App)
	.component('font-awesome-icon', FontAwesomeIcon)
	.use(router)
	.use(i18n)
	.mount('#app')
