<script>
import MovieContainer from "@/components/user/movies/MovieContainer.vue";
import NavigationBar from "@/components/user/NavigationBar.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  components: {
    MovieContainer,
    NavigationBar,
  },
  methods: {
    ...mapActions(["getFavourite", "getMySubscriptions"]),
  },
  created() {
    this.getFavourite(this.current_user.user.user_id);
    this.getMySubscriptions(this.current_user.user.user_id);
  },
  computed: {
    ...mapGetters(["my_favourites", "my_subs", "current_user"]),
  },
};
</script>

<template>
  <NavigationBar />
  <div style="padding: 5rem 1rem">
    <div class="cust-container">
      <el-card>
        <div class="profile">
          <el-avatar :size="50" :src="circleUrl" />

          <div>
            <h3>{{ this.current_user.user.name }}</h3>
            <small>{{ this.current_user.user.email }}</small>
          </div>
        </div>
      </el-card>
    </div>
    <MovieContainer :data="my_favourites" title="My Favourites" />
    <MovieContainer :data="my_subs" title="My Subscriptions" />
  </div>
</template>

<style lang="scss" scoped>
.el-card {
  .profile {
    display: flex;
    gap: 2rem;
  }
  h3 {
    margin: 0;
    padding: 0;
    font-size: 1rem;
  }
  small {
    font-size: 10px;
  }
}
</style>
