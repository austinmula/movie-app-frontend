<template>
  <div class="navigation-bar">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      :ellipsis="false"
      @select="handleSelect"
    >
      <el-menu-item index="0">LOGO</el-menu-item>
      <div class="flex-grow" />
      <el-menu-item index="1">Home</el-menu-item>
      <el-menu-item index="2">TV Series</el-menu-item>
      <el-menu-item index="3">Profile</el-menu-item>
    </el-menu>
  </div>
</template>

<script setup>
import { ref } from "vue";

const activeIndex = ref("1");
const handleSelect = (key, keyPath) => {
  console.log(key, keyPath);
};
</script>

<style scoped lang="scss">
.flex-grow {
  flex-grow: 1;
}
.el-menu--horizontal {
  border: 0;
}
.el-menu {
  background: transparent;
  .el-menu-item {
    color: #fff;
    font-weight: 700;
    letter-spacing: 1px;
  }
  .el-menu-item.is-active {
    color: #fff;
  }
}
.navigation-bar {
  position: fixed;
  // position: absolute;
  top: 0;
  width: 100%;
  z-index: 10000;
  background: rgb(0, 0, 0);
  opacity: 0.6;
}
</style>

//
<script>
// export default {};
//
</script>

//
<style scoped lang="scss">
// .navigation-bar {
//   position: fixed;
//   // position: absolute;
//   top: 0;
//   width: 100%;
//   z-index: 10000;
//   background: rgb(0, 0, 0);
//   opacity: 0.5;
//   .content {
//     max-width: 90%;
//     margin: auto;
//     h3 {
//       color: #fff;
//     }
//   }
// }
//
</style>
