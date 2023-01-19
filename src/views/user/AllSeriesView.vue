<script>
import MovieContainer from "@/components/user/movies/MovieContainer.vue";
import NavigationBar from "@/components/user/NavigationBar.vue";
import { mapActions, mapGetters } from "vuex";
export default {
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
  },
};
</script>

<template>
  <NavigationBar />
  <div style="padding: 4rem 1rem">
    <MovieContainer :data="all_series" title="All Movies" />
  </div>
</template>
