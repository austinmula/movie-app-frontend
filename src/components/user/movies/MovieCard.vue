<template>
  <div style="cursor: pointer" @click="handleClick">
    <el-card :body-style="{ padding: '0px' }">
      <div class="img-container">
        <img
          src="https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/38/1537460082-daredevil-season-3-poster.jpg?resize=768:*"
          class="image"
        />
      </div>
      <div class="bottom">
        <div
          style="
            display: flex;
            align-items: center;
            justify-content: space-between;
          "
        >
          <h3>Dare Devil</h3>
          <small>SS 34</small>
        </div>
        <div>
          <small><strong>Genre: </strong> Action | Fiction </small>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
import router from "@/router";
export default {
  props: {},
  methods: {
    handleClick() {
      console.log("clicked");
      router.push({ name: "adminhome" });
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
