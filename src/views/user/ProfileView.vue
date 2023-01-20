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
    this.getFavourite(2);
    this.getMySubscriptions(2);
  },
  computed: {
    ...mapGetters(["my_favourites", "my_subs"]),
  },
};
</script>

<template>
  <NavigationBar />
  <div style="padding: 5rem 1rem">
    <MovieContainer :data="my_favourites" title="My Favourites" />
    <MovieContainer :data="my_subs" title="My Subscriptions" />
  </div>
</template>

<style lang="scss" scoped></style>
