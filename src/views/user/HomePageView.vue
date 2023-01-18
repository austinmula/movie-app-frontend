<script>
import MovieContainer from "../../components/user/movies/MovieContainer.vue";
export default {
  components: {
    MovieContainer,
  },
  data() {
    return {
      items: [
        {
          id: 1,
          image:
            "https://occ-0-2705-3933.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABVViXo61ktgv3Texy1dw7g9TCTXVb3gFyP0975LjpVlLzEOWtP0WkWkyk1b8lpn8prjhM874wqOOaJ_cQL1HGteB7ZK7HV2xgA8d.jpg?r=d04",
          name: "All of us are Dead",
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
    <el-carousel height="100%">
      <el-carousel-item v-for="item in items" :key="item.id">
        <div class="overlay"></div>
        <div class="hero-text">
          <h1>{{ item.name }}</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            voluptas quaerat aut sequi commodi.
          </p>
          <el-button type="primary">Explore TV Series</el-button>
        </div>
        <img :src="item.image" :alt="item.name" />
      </el-carousel-item>
    </el-carousel>
  </div>
  <div style="padding: 3rem 1rem">
    <MovieContainer title="Recent Movies" />
    <MovieContainer title="Top Rated Movies" />
  </div>
</template>

<style lang="scss" scoped>
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.heading-comp {
  position: relative;
  max-height: 678px;
  height: 100vh;
  .navigation-bar {
    // position: fixed;
    position: absolute;
    // background: #000;
    top: 0;
    height: 45px;
    width: 100%;
  }

  .el-carousel {
    position: relative;
    max-height: 678px;
    height: 100vh;
    .overlay {
      position: absolute;
      background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.2),
        rgba(0, 0, 0, 0.9)
      );

      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      right: 0;
    }

    // z-index: 2;
    img {
      object-fit: cover;
      position: relative;
      width: 100%;
      height: 100%;
      z-index: -1;
    }
    .hero-text {
      padding: 4rem;
      position: absolute;
      width: 50%;
      top: 50%;
      transform: translateY(-50%);
      color: rgb(255, 255, 255);
      z-index: 1000;
      h1 {
        font-size: 4em;
        margin: 0;
        padding: 0;
        font-weight: 700;
        letter-spacing: 1px;
      }
      p {
        max-width: 500px;
      }
    }
  }
}
</style>
