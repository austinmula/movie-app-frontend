<template>
  <el-tabs
    v-model="activeName"
    type="card"
    class="demo-tabs"
    @tab-click="handleClick"
  >
    <el-tab-pane label="cast" name="first"><p>ca</p></el-tab-pane>
    <el-tab-pane label="reviews" name="second"><p>re</p></el-tab-pane>
  </el-tabs>
</template>
<script setup>
import { ref } from "vue";

const activeName = ref("first");

const handleClick = (tab, event) => {
  console.log(tab, event);
};
</script>
<style>
.demo-tabs > .el-tabs__content {
  padding: 32px;
  color: #6b778c;
}
</style>
