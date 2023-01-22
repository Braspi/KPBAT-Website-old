import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import router from './router';
import App from './App.vue';
import './assets/style/global.less';
import axios from 'axios';

import inputElement from '@/components/InputElement.vue';

import { library } from '@fortawesome/fontawesome-svg-core' /* import the fontawesome core */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome' /* import font awesome icon component */

/* import specific icons */
import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faPinterest } from '@fortawesome/free-brands-svg-icons';
import {  } from '@fortawesome/free-regular-svg-icons';

axios.defaults.baseURL = "https://api.kpbat.com"
axios.defaults.headers.Authorization = `Baerer ${localStorage.accessToken}`

/* You must provide every one imported icon */
library.add(
    // solid
    faBars, faX,
    // brands
    faFacebook, faTwitter, faInstagram, faPinterest
    // regular

);

/**
 * Setup i18n
 */
import en from './assets/locales/en.json';
import fr from './assets/locales/fr.json';

function loadLocaleMessages() {
    const locales = [{ fr: fr }, { en: en }];
    const messages = {};
    locales.forEach(lang => {
        const key = Object.keys(lang);
        messages[key] = lang[key];
    })
    return messages;
}

const i18n = createI18n({
    locale: 'fr', // set locale
    fallbackLocale: 'fr', // set fallback locale
    messages: loadLocaleMessages()
})

createApp(App)
	.component('font-awesome-icon', FontAwesomeIcon)
	.component('kp-input', inputElement)
	.use(router)
	.use(i18n)
	.mount('#app')
