<template>
  <el-container>
    <el-aside width="230px">
      <div class="logo">
        <h3>Movie Manager</h3>
      </div>
      <el-menu
        :default-active="activeIndex"
        active-text-color="#fff3f3"
        background-color="#333"
        class="el-menu-vertical-demo"
        text-color="#fff"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-menu-item index="1">
          <!-- <el-icon><icon-menu /></el-icon> -->
          <router-link to="/admin"><span>DashBoard</span></router-link>
        </el-menu-item>
        <el-menu-item index="2">
          <!-- <el-icon><document /></el-icon> -->
          <router-link to="/admin/subscriptions"
            ><span>Subscriptions</span></router-link
          >
        </el-menu-item>
        <el-menu-item index="3">
          <!-- <el-icon><setting /></el-icon> -->
          <router-link to="/admin/tv-shows"><span>TV_Shows</span></router-link>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header>
        <el-menu
          class="el-menu-demo"
          mode="horizontal"
          :ellipsis="false"
          @select="handleSelect"
        >
          <div class="heading">
            <el-menu-item>Admin</el-menu-item>
          </div>
        </el-menu>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from "vuex";
import router from "@/router";
export default {
  name: "HomeView",
  data() {
    return {
      activeIndex: 1,
    };
  },
  components: {},
  computed: {
    ...mapGetters(["current_user"]),
    adminCheck() {
      return this.current_user.user.role_id == 2;
    },
  },
  mounted() {
    if (!this.adminCheck) {
      router.push({ name: "homepage" });
    }
  },
};
</script>

<style lang="scss" scoped>
.el-aside {
  height: 100vh;
  background: #333;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  a {
    text-decoration: none;
    color: #fff;
  }
  .logo {
    padding: 1px 1rem;
    background-color: rgb(32, 31, 31);
    h3 {
      color: #e1e2e2;
      font-weight: 400;
      letter-spacing: 2px;
    }
  }
}
.el-menu {
  border-right: 0px;
  .el-menu-item.is-active {
    background: #353b4f;
  }
}
.el-menu--horizontal {
  border-bottom: 0px !important;
}
.heading {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  z-index: -1;
}

.el-main {
  background: #f9f9f9;
  // background: #000;
}
.el-container {
  // position: absolute;
  position: relative;
  left: 115px;
  width: calc(100% - 230px);
}
</style>
