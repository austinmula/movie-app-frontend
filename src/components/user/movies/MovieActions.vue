<template>
  <div class="actions-container">
    <div class="flex justify-space-between flex-wrap gap-4">
      <el-button
        v-if="this.isSub.length && this.isSub[0].is_active"
        type="danger"
        >Unsubscribe</el-button
      >
      <el-button v-else type="primary">Subscribe</el-button>

      <el-button
        v-if="this.isfavourite.length && this.isfavourite[0].is_fav"
        type="danger"
        >Remove from Favourites</el-button
      >
      <el-button v-else type="success">Add to Favourites</el-button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      isfavourite: [],
      isSub: [],
    };
  },
  computed: {
    ...mapGetters(["current_user"]),
  },
  props: ["movie_id"],
  methods: {
    getFavourite() {
      let user_id = this.current_user.user.user_id;
      fetch(`http://localhost:4001/api/favourites/${user_id}/${this.movie_id}`)
        .then((res) => res.json())
        .then((data) => {
          this.isfavourite = data;
        });
    },
    getSubscription() {
      let user_id = this.current_user.user.user_id;
      fetch(
        `http://localhost:4001/api/subscriptions/${user_id}/${this.movie_id}`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          this.isSub = data;
        });
    },
  },
  mounted() {
    this.getFavourite();
    this.getSubscription();
  },
};
</script>

<style lang="scss" scoped></style>
