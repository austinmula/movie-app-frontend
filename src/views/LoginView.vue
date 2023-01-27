/* eslint-disable */
<template>
  <div class="login">
    <el-card>
      <h2>Login</h2>
      <el-form
        class="login-form"
        :model="model"
        :rules="rules"
        ref="form"
        @submit.prevent="handleLogin"
      >
        <el-form-item prop="email">
          <el-input
            v-model="model.email"
            placeholder="Email"
            type="email"
            id="email"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="model.password"
            placeholder="Password"
            type="password"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            :loading="loading"
            class="login-button"
            type="primary"
            native-type="submit"
            block
            >Login</el-button
          >
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import router from "../router";

export default {
  data() {
    return {
      validCredentials: {
        email: "lightscope",
        password: "lightscope",
      },
      model: {
        email: "",
        password: "",
      },
      loading: false,
      rules: {},
      message: "",
    };
  },
  computed: {
    ...mapGetters(["current_user"]),
    loggedIn() {
      return this.current_user.status.loggedIn;
    },
  },
  created() {
    if (this.loggedIn) {
      router.push({ name: "profile" });
    }
  },
  mounted() {
    console.log(this.current_user.status.loggedIn);
  },
  methods: {
    ...mapActions(["login"]),
    handleLogin() {
      this.loading = true;
      this.login({
        email: this.model.email,
        password: this.model.password,
      })
        .then((data) => {
          console.log(data);
          router.push({ name: "homepage" });
        })
        .catch((error) => {
          console.log(error.message);
          // this.loading = false;
          this.$message.error(
            (error.response && error.response.data) ||
              error.message ||
              error.toString()
          );
        })
        .finally(() => (this.loading = false));
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.login-button {
  width: 100%;
  margin-top: 30px;
  padding: 20px;
}
.login-form {
  width: 290px;
}
.forgot-password {
  margin-top: 10px;
}
</style>
<style lang="scss">
$teal: rgb(0, 124, 137);
.el-button--primary {
  background: $teal;
  border-color: $teal;
  &:hover,
  &.active,
  &:focus {
    background: lighten($teal, 7);
    border-color: lighten($teal, 7);
  }
}
.login .el-input__inner:hover {
  border-color: $teal;
}
.login .el-input__prefix {
  background: rgb(238, 237, 234);
  left: 0;
  height: calc(100% - 2px);
  left: 1px;
  top: 1px;
  border-radius: 3px;
  .el-input__icon {
    width: 30px;
  }
}
.login .el-input input {
  //   padding-left: 35px;
  padding: 20px;
}
.login .el-card {
  padding-top: 0;
  padding-bottom: 30px;
}
h2 {
  font-family: "Open Sans";
  letter-spacing: 1px;
  font-family: Roboto, sans-serif;
  padding-bottom: 20px;
}

.login .el-card {
  width: 330px;
  display: flex;
  justify-content: center;
}
</style>
