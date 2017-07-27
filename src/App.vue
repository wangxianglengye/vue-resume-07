<template>
  <div id="app">
    <Topbar class='topbar'/>
    <main>
	    <Editor class='editor'/>
	    <Preview class='preview'/>
    </main>
  </div>
</template>

<script>
	import Topbar from './components/Topbar'
	import Editor from './components/Editor'
	import Preview from './components/Preview'
	export default {
	  components: {
			Topbar, Editor, Preview
	  }
	}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;  
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;   /*100%也可以，但需要body html都写上100%，才可以*/
  display: flex;
  flex-direction: column;
}
.topbar{
	background: red;
}
main{
	background: green;
	display: flex;
	flex: 1;
}
main > .editor{
	width: 20rem;
}
main > .preview{
	flex: 1;
}
</style>
