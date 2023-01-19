<script>
import MovieContainer from "@/components/user/movies/MovieContainer.vue";
import NavigationBar from "@/components/user/NavigationBar.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      searchKey: "",
    };
  },
  components: {
    MovieContainer,
    NavigationBar,
  },
  methods: {
    ...mapActions(["getSeries"]),
  },
  created() {
    this.getSeries();
  },
  computed: {
    ...mapGetters(["all_series"]),
    filteredPosts: function () {
      return this.all_series.filter((item) =>
        item.name.toLowerCase().match(this.searchKey)
      );
    },
  },
};
</script>

<template>
  <NavigationBar />
  <div style="padding: 5rem 1rem">
    <div class="search-container">
      <el-input v-model="searchKey" placeholder="Search for movies">
        <template #prefix>
          <el-icon class="el-input__icon"><search /></el-icon>
        </template>
      </el-input>
    </div>
    <MovieContainer :data="filteredPosts" title="All Movies" />
  </div>
</template>

<style lang="scss" scoped>
.search-container {
  width: 90%;
  max-width: 350px;
  margin: auto;
  .el-input__icon {
    padding: 1em;
  }
}
</style>
