<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <router-view />
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;500;700;900&display=swap");
body {
  padding: 0;
  margin: 0;
  font-family: "Poppins", "Helvetica Neue", Helvetica, "PingFang SC",
    "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  h3 {
    font-weight: 400;
    color: rgb(61, 60, 60);
  }
}
</style>
