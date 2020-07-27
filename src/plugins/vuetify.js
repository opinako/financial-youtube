import '@fortawesome/fontawesome-free/css/all.css' // Ensure you are using css-loader
import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader
import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import { colors } from 'vuetify/lib';
import  vueGoogleCharts from 'vue-google-charts';


Vue.use(vueGoogleCharts);
Vue.use(Vuetify);

export default new Vuetify( {
    icons: {
        iconfont: 'fa || md',
    },
    theme: {
        themes: {
            light: {
                background: colors.blue.accent2,
            },
            dark: {
                background: colors.blue,
            }
        }
    }
});
