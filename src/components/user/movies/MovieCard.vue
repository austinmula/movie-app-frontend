<template>
  <div style="cursor: pointer" @click="handleClick(series.id)">
    <el-icon v-show="series.user_id" color="#409EFC" class="no-inherit">
      <Star />
    </el-icon>
    <el-icon v-show="series.is_active" color="#409EFC" class="no-inherit">
      <Money />
    </el-icon>

    <el-card :body-style="{ padding: '0px' }">
      <div class="img-container">
        <img :src="series.poster_img" class="image" :alt="series.name" />
      </div>
      <div class="bottom">
        <div
          style="
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          "
        >
          <h3>{{ series.name }}</h3>
          <div>
            <small>Seasons: {{ series.seasons }}</small> |
            <small>Episodes: {{ series.episodes }} </small>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
/* eslint-disable */
import router from "@/router";
import { Star, Money } from "@element-plus/icons-vue";
export default {
  components: { Star, Money },
  props: { series: Object },
  methods: {
    handleClick(id) {
      console.log("clicked");
      router.push({ name: "single-series", params: { id: id } });
    },
  },
};
</script>

<style scoped lang="scss">
.el-card {
  cursor: pointer;
  .img-container {
    height: 310px;
    img {
      object-fit: cover;
      display: block;
      width: 100%;
      height: 100%;
    }
  }
  .bottom {
    padding: 0 1rem;
    padding-bottom: 2em;
    margin-top: 10px;
    line-height: 12px;
    display: flex;
    flex-direction: column;
    gap: 3px;
    // justify-content: space-between;
    // align-items: center;
  }

  .button {
    padding: 0;
    min-height: auto;
  }
}
</style>
