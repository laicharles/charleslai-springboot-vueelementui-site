<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>
<script>
  export default { name: 'App'}
</script>
<style>
  body {
    margin: 0px;
    padding: 0px;
    background: #1F2D3D;
    font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, SimSun, sans-serif;
    font-size: 14px;
    -webkit-font-smoothing: antialiased;
  }
  #app {
    position: absolute;
    top: 0px;
    bottom: 0px;
    width: 100%;
    min-width: 1200px;
  }
  .el-submenu [class^=fa] {
    vertical-align: baseline;
    margin-right: 10px;
  }
  .el-menu-item [class^=fa] {
    vertical-align: baseline;
    margin-right: 10px;
  }
  .toolbar {
    background: #fff;
    padding: 10px;
  .el-form-item {
    margin-bottom: 10px;
  }
  }
</style>
<!--<template>
  <div class="wrapper">
    <div class="box1"></div>
    <div class="box2"></div>
    <div class="box3"></div>
    <div class="box4"></div>
    <div class="box5"></div>
  </div>
</template>

<style>
  * {
    margin: 0;
    padding: 0;
  }
</style>

<style scoped>
  .wrapper div {
    height: 1rem;
  }
  .box1 {
    width: 2rem;
    background-color: coral;
  }
  .box2 {
    width: 4rem;
    background-color: skyblue;
  }
  .box3 {
    width: 6rem;
    background-color: palegreen;
  }
  .box4 {
    width: 8rem;
    background-color: wheat;
  }
  .box5 {
    width: 10rem;
    background-color: darkred;
  }
</style>-->
<!--
<style scoped>
  .wrapper div {
    height: 1rem;
  }
  .box1 {
    /* 750 * 20% */
    width: 150px;
    background-color: coral;
  }
  .box2 {
    /* 750 * 40% */
    width: 300px;
    background-color: skyblue;
  }
  .box3 {
    /* 750 * 60% */
    width: 450px;
    background-color: palegreen;
  }
  .box4 {
    /* 750 * 80% */
    width: 600px;
    background-color: wheat;
  }
  .box5 {
    /* 750 * 100% */
    width: 750px;
    background-color: darkred;
  }
</style>
-->




