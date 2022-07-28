/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue'); //cosi si importa la libreria Vue
import App from './components/App.vue'; // importiamo il componente base App.vue e lo assegniamo alla variabile App

//iniziliziamo l' applicazione Vue passandogli l' oggetto dell' inizializzazione
const app = new Vue({
    el: '#root', // id del componente nel file HTML dentro il quale opererà Vue
    render: h => h(App) // monta ul componente App nell' elemento root
});
