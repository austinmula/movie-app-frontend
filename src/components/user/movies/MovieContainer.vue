<template>
  <div class="cust-container">
    <h3>{{ title }}</h3>
    <el-row :gutter="20">
      <el-col
        v-for="ser in data"
        :key="ser.id"
        :xs="24"
        :sm="12"
        :md="8"
        :lg="6"
      >
        <MovieCard :series="ser" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import MovieCard from "./MovieCard.vue";
export default {
  props: {
    title: String,
    data: Array,
  },
  components: {
    MovieCard,
  },
};
</script>

<style lang="scss" scoped>
.el-col {
  margin-bottom: 1rem;
}
.cust-container {
  width: 90%;
  max-width: 1440px;
  margin: auto;
  //   min-height: 100vh;
  //   padding: 3rem 1rem;
}
</style>
