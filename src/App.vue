<template>
    <router-view></router-view>
</template>

<script>


export default {
  name: "App",
};
</script>

<style lang="scss">
@import '~bootstrap/dist/css/bootstrap.css';
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

html {
  box-sizing: border-box;
}

:root {
  --main-color: #242424;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  margin: 0;
  background-color: #f9f9f9;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  color: black;
  min-height: 100vh;
  //display: flex;
  //flex-direction: column;
  //justify-content: center;
  //align-items: center;
}

label {
  display: block;
}

img {
  max-width: 100%;
  height: auto;
}

a {
  text-decoration: none;
  color: inherit;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

h1,
h2,
h3,
h4,
p {
  padding: 0;
  margin: 0;
  text-align: center;
}

.app {
  width: 100%;
}

h1,
h2,
h3 {
  line-height: 1.5;
}

h4 {
  text-transform: uppercase;
}

.currency {
  font-style: italic;
  color: #b1b1b1;
}
</style>
