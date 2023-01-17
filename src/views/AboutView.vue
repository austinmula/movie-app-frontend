<script>
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          image:
            "https://cdn.oneesports.gg/cdn-data/2022/08/Anime_OnePieceFilmRed_MoviePoster_Shanks_Luffy.webp",
          name: "One piece",
        },
        {
          id: 2,
          image:
            "https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQSMcH7d0gQjQ7W5mJmJNGAw6fzlWzoHeohNtmmbcFx6GA2gaWkX6qmIx7mJSOqk7y0t9sNfdzePXYTKqhDnZjjzPj1fhK9PD3og9JAH4NWAyQ_JUmPFzc0yUcV6he_IYdKJzz97ULbOVVGACnP6SmlxDv34.jpg?r=ca3",
          name: "Vikings Valhalla",
        },
        {
          id: 3,
          image:
            "https://images.squarespace-cdn.com/content/v1/51b3dc8ee4b051b96ceb10de/a39f4723-84c5-437e-b53f-c797c9783d88/new-poster-and-premiere-date-for-tim-burtons-wednesday.jpg",
          name: "Wednesday",
        },
      ],
    };
  },
};
</script>

<template>
  <div class="heading-comp">
    <div class="navigation-bar">
      <p>Navbar</p>
    </div>
    <div class="overlay"></div>
    <el-carousel height="inherit">
      <el-carousel-item v-for="item in items" :key="item.id">
        <h1>{{ item.name }}</h1>
        <img :src="item.image" :alt="item.name" />
      </el-carousel-item>
    </el-carousel>
  </div>

  <div class="cust-container">
    <h3>Recent TV shows</h3>
    <el-row :gutter="20">
      <el-col :span="6">
        <el-card :body-style="{ padding: '0px' }">
          <img
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            class="image"
          />
          <div style="padding: 14px">
            <span>Yummy hamburger</span>
            <div class="bottom">
              <time class="time">{{ currentDate }}</time>
              <el-button text class="button">Operating</el-button>
            </div>
          </div>
        </el-card></el-col
      >
      <el-col :span="6"
        ><el-card :body-style="{ padding: '0px' }">
          <img
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            class="image"
          />
          <div style="padding: 14px">
            <span>Yummy hamburger</span>
            <div class="bottom">
              <time class="time">{{ currentDate }}</time>
              <el-button text class="button">Operating</el-button>
            </div>
          </div>
        </el-card></el-col
      >
      <el-col :span="6"
        ><el-card :body-style="{ padding: '0px' }">
          <img
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            class="image"
          />
          <div style="padding: 14px">
            <span>Yummy hamburger</span>
            <div class="bottom">
              <time class="time">{{ currentDate }}</time>
              <el-button text class="button">Operating</el-button>
            </div>
          </div>
        </el-card></el-col
      >
      <el-col :span="6"
        ><el-card :body-style="{ padding: '0px' }">
          <img
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            class="image"
          />
          <div style="padding: 14px">
            <span>Yummy hamburger</span>
            <div class="bottom">
              <time class="time">{{ currentDate }}</time>
              <el-button text class="button">Operating</el-button>
            </div>
          </div>
        </el-card></el-col
      >
    </el-row>
  </div>
</template>

<style lang="scss" scoped>
.cust-container {
  width: 90%;
  max-width: 1440px;
  margin: auto;
  min-height: 100vh;
  padding: 3rem 1rem;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.heading-comp {
  position: relative;
  max-height: 678px;
  height: 100vh;
  .navigation-bar {
    position: fixed;
    background: #000;
    top: 0;
    height: 45px;
    width: 100%;
    z-index: 1;
  }
  .overlay {
    position: absolute;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.9)
    );
    opacity: 0.99;

    z-index: 1;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
  }
  .el-carousel {
    // position: relative;
    max-height: 678px;
    height: 100vh;
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
    h1 {
      margin: 0;
      padding: 0;
      position: absolute;
      font-size: 4em;
      z-index: 1;
    }
  }
}
</style>
