import axios from "axios";

const API_URL = "http://localhost:4001/auth/";

export const login = (user) => {
  return axios
    .post(API_URL + "login", {
      email: user.email,
      password: user.password,
    })
    .then((response) => {
      console.log(response);
      if (response.status !== 200) {
        throw new Error();
      }

      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

export const logout = () => {
  localStorage.removeItem("user");
};
