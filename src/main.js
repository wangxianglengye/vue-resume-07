// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import 'normalize.css'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  template: '<App />',
  components: { 
  	App         //es6语法中，如果key和value的值一样，那么可以缩写为key 
//	"App":App     此写法与上面写法完全等价
  }
})
