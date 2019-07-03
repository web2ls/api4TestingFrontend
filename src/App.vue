<template>
  <div id="app">
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<style>
*, *:before, *:after {
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 0;
  background: url(assets/bg.jpg) no-repeat, #1c2f58;
  background-size: cover;
  font-family: 'Roboto Slab', serif;
}

.container {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

#app {
  font-family: 'Roboto Slab', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
