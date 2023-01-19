<template>
  <NavigationBar />
  <div style="padding: 5em 2em">
    <el-row :gutter="10">
      <el-col :sm="24" :md="16">
        <div class="image-container">
          <img :src="single_show.image" alt="" srcset="" />
        </div>
        <h1>{{ this.single_show.name }}</h1>
        <p>{{ this.single_show.summary }}</p>
        <movie-details-tab />
      </el-col>
      <el-col :sm="24" :md="8">
        <el-row :gutter="20">
          <el-col :span="8"
            ><el-card class="score-card">
              <h4 style="padding: 0; margin: 0">
                {{ this.single_show.seasons }}
              </h4>
              <small>SEASONS</small>
            </el-card></el-col
          >
          <el-col :span="8"
            ><el-card class="score-card">
              <h4 style="padding: 0; margin: 0">
                {{ this.single_show.episodes }}
              </h4>
              <small>EPISODES</small>
            </el-card></el-col
          >
          <el-col :span="8"
            ><el-card class="score-card">
              <h4 style="padding: 0; margin: 0">
                {{ this.single_show.imdb_score }}
              </h4>
              <small>IMDB</small>
            </el-card></el-col
          >
          <el-col :span="8"
            ><el-card class="score-card">
              <h4 style="padding: 0; margin: 0">
                {{ this.single_show.rt_score }}%
              </h4>
              <small>TOMATEER</small>
            </el-card></el-col
          >
        </el-row>
        <div class="actions-container">
          <div class="flex justify-space-between flex-wrap gap-4">
            <el-button type="primary">Subscribe</el-button>
            <el-button type="success">Add to Favourites</el-button>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import NavigationBar from "@/components/user/NavigationBar.vue";
import { mapActions, mapGetters } from "vuex";

import MovieDetailsTab from "@/components/user/movies/MovieDetailsTab.vue";

export default {
  props: ["id"],
  components: {
    NavigationBar,
    MovieDetailsTab,
  },
  methods: {
    ...mapActions(["getOneShow"]),
  },
  created() {
    this.getOneShow(this.id);
  },
  computed: {
    ...mapGetters(["single_show"]),
  },
  mounted() {
    console.log(this.single_show);
  },
};
</script>

<style lang="scss" scoped>
.image-container {
  height: 500px;
  width: 100%;
  background: #000;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
}

.score-card {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  small {
    font-size: 10px;
  }
  h4 {
    text-align: center;
  }
}

.actions-container {
  border: 1px solid #eae4e4;
  display: flex;
  justify-content: center;
  border-radius: 3px;
  padding: 2em 0.5em;
}
</style>
