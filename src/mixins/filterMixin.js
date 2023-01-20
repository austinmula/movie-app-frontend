export default {
  computed: {
    topRatedPosts: function () {
      return [...this.all_series]
        .sort((a, b) => b.imdb_score - a.imdb_score)
        .slice(0, 4);
    },
  },
};
