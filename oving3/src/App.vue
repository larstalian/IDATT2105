<template>
  <header>
    <div class="title">
      <h1>Calculator</h1>
    </div>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/contact">Contact</router-link>
    </nav>
  </header>

  <router-view />
</template>

<style>
#app {
  width: 100%;
  font-family: "Courier New", Courier, monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

body {
  margin: 0;
}

h1 {
  margin: 0;
  padding: 10px;
  text-align: center;
}

header {
  position: relative;
  display: flex;
  justify-content: center;
  font-size: large;
  color: white;
  margin-top: 0;
  background-color: #7700ff;
  height: fit-content;
  width: 100%;
}

nav {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
}

nav a {
  color: white;
}
</style>
