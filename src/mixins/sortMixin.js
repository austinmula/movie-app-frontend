export default {
  computed: {
    sortedPosts: function () {
      return [...this.all_series]
        .sort((a, b) => new Date(b.released) - new Date(a.released))
        .slice(0, 4);
    },
  },
};
