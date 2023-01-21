<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      searchKey: "",
    };
  },
  components: {},
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
  <h3>All TV Shows</h3>

  <div class="search-container">
    <el-input v-model="searchKey" placeholder="Search for movies">
      <template #prefix>
        <el-icon class="el-input__icon"><search /></el-icon>
      </template>
    </el-input>
  </div>

  <el-table :data="filteredPosts" border style="width: 100%">
    <el-table-column prop="name" label="Show Name" width="180">
    </el-table-column>
    <el-table-column prop="seasons" label="Seasons" width="180">
    </el-table-column>

    <el-table-column prop="episodes" label="Episodes" />
    <el-table-column prop="imdb_score" label="IMDB score" />
    <el-table-column label="Actions">
      <el-button type="danger">Delete</el-button>
    </el-table-column>
    <!-- <el-table-column prop="series_name" label="TV Show" /> -->
  </el-table>

  <!-- <MovieContainer :data="filteredPosts" title="All Movies" /> -->
</template>

<style lang="scss" scoped>
.search-container {
  width: 90%;
  max-width: 350px;
  margin: auto;
  padding: 1em 0;
  .el-input__icon {
    padding: 1em;
  }
}
</style>
