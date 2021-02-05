import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import firebase from 'firebase'

import './plugins/axios'

import router from './router'
import store from './store/store'

import toast from "vue-toastification";
import "vue-toastification/dist/index.css";

const options = {
	draggable: false
}

Vue.use(toast, options);

Vue.config.productionTip = false

Vue.filter('currency', value => {
	return 'R$' + value.toLocaleString()
})


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
	apiKey: "AIzaSyDg5Cg0Ahancar4u19Fp4tUFTwUlnnouPQ",
	authDomain: "stock-trader-d9231.firebaseapp.com",
	databaseURL: "https://stock-trader-d9231-default-rtdb.firebaseio.com",
	projectId: "stock-trader-d9231",
	storageBucket: "stock-trader-d9231.appspot.com",
	messagingSenderId: "868933085426",
	appId: "1:868933085426:web:135879fcd752ea15e9086b",
	measurementId: "G-9FRYE7KJK7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();


let app=''

firebase.auth().onAuthStateChanged(() => {
	if(!app) {
		app = new Vue({
			router,
			store,
			render: h => h(App),
		}).$mount('#app')
	}
})
