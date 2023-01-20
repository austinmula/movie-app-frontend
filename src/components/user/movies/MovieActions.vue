<template>
  <div class="actions-container">
    <div class="flex justify-space-between flex-wrap gap-4">
      <el-popover
        v-if="this.isSub.length && this.isSub[0].is_active"
        :visible="visible"
        placement="top"
        :width="160"
      >
        <p>Are You Sure?</p>
        <div style="text-align: right; margin: 0">
          <el-button size="small" text @click="visible = false"
            >cancel</el-button
          >
          <el-button size="small" type="primary" @click="handleUnSub"
            >confirm</el-button
          >
        </div>
        <template #reference>
          <el-button type="danger">Unsubscribe</el-button>
        </template>
      </el-popover>

      <el-button v-else type="primary" @click="handleSubscribe"
        >Subscribe</el-button
      >

      <el-popover
        v-if="this.isfavourite.length && this.isfavourite[0].is_fav"
        :visible="visible"
        placement="top"
        :width="160"
      >
        <p>Are You Sure?</p>
        <div style="text-align: right; margin: 0">
          <el-button size="small" text @click="visible = false"
            >cancel</el-button
          >
          <el-button size="small" type="primary" @click="handleUnFav"
            >confirm</el-button
          >
        </div>
        <template #reference>
          <el-button type="danger">Remove from Favourites</el-button>
        </template>
      </el-popover>

      <el-button v-else type="success" @click="handleAddToFav"
        >Add to Favourites</el-button
      >
      <el-popover :visible="visible" placement="top" :width="160">
        <p>Are you sure to delete this?</p>
        <div style="text-align: right; margin: 0">
          <el-button size="small" text @click="visible = false"
            >cancel</el-button
          >
          <el-button size="small" type="primary" @click="visible = false"
            >confirm</el-button
          >
        </div>
      </el-popover>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import axios from "axios";
export default {
  data() {
    return {
      isfavourite: [],
      isSub: [],
      url: "http://localhost:4001/api",
    };
  },
  computed: {
    ...mapGetters(["current_user"]),
  },
  props: ["movie_id"],
  methods: {
    async handleSubscribe() {
      let user_id = this.current_user.user.user_id;
      const response = await axios.post(`${this.url}/subscriptions/subscribe`, {
        user_id: user_id,
        movie_id: this.movie_id,
      });
      if (response.status === 200) {
        console.log("success");
        this.isSub = response.data;
      }
    },
    async handleAddToFav() {
      let user_id = this.current_user.user.user_id;
      const response = await axios.post(`${this.url}/favourites/add`, {
        user_id: user_id,
        movie_id: this.movie_id,
      });
      if (response.status === 200) {
        console.log("success");
        this.isfavourite = response.data;
      }
    },
    async handleUnFav() {
      let user_id = this.current_user.user.user_id;
      const response = await axios.delete(`${this.url}/favourites/remove`, {
        data: {
          user_id: user_id,
          movie_id: this.movie_id,
        },
      });
      if (response.status === 200) {
        console.log("success");
        this.isfavourite = [];
      }
    },
    async handleUnSub() {
      let user_id = this.current_user.user.user_id;
      const response = await axios.put(`${this.url}/subscriptions/remove`, {
        user_id: user_id,
        movie_id: this.movie_id,
      });
      // console.log(response);
      if (response.status === 200) {
        this.isSub = response.data;
      }
    },
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
