<template>
  <div class="navigation-bar">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      :ellipsis="false"
      @select="handleSelect"
    >
      <el-menu-item index="homepage">LOGO</el-menu-item>
      <div class="flex-grow" />
      <el-menu-item index="homepage">Home</el-menu-item>
      <el-menu-item index="all-series">TV Series</el-menu-item>
      <el-menu-item index="profile">Profile</el-menu-item>
      <div
        style="
          display: flex;
          justify-content: center;
          align-items: center;
          height: 55px;
          padding-right: 1rem;
        "
      >
        <el-button v-if="currentUser" type="danger" @click="handleLogOut"
          >Logout</el-button
        >
        <el-button v-else type="info" @click="handleLogIn">Login</el-button>
      </div>
    </el-menu>
  </div>
</template>

<script>
import router from "@/router";
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
      activeIndex: "",
    };
  },

  computed: {
    ...mapGetters(["current_user"]),
    currentUser() {
      return this.current_user.status.loggedIn;
    },
  },
  methods: {
    ...mapActions(["logout"]),
    handleSelect(key, keyPath) {
      console.log(key, keyPath[0]);
      router.push({ name: keyPath[0] });
    },
    handleLogIn() {
      router.push({ name: "login" });
    },
    handleLogOut() {
      this.logout();
      router.push({ name: "login" });
    },
  },
};
</script>

<style scoped lang="scss">
.flex-grow {
  flex-grow: 1;
}
.el-menu--horizontal {
  border: 0;
}
.el-menu {
  background: transparent;
  .el-menu-item {
    color: #fff;
    font-weight: 700;
    letter-spacing: 1px;
  }
  .el-menu-item.is-active {
    color: #fff;
  }
}
.navigation-bar {
  position: fixed;
  // position: absolute;
  top: 0;
  width: 100%;
  z-index: 10000;
  background: rgb(0, 0, 0);
  opacity: 0.7;
}
</style>
