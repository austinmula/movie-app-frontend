import axios from "axios";

const API_URL = "http://localhost:4001/api/subscriptions/";

export const getAllSubs = () => {
  return axios.get(API_URL).then((response) => {
    if (response.status !== 200) {
      throw new Error();
    }
    return response.data;
  });
};

export const getMySubs = (id) => {
  return axios.get(API_URL + id).then((response) => {
    console.log(response);
    if (response.status !== 200) {
      throw new Error();
    }
    return response.data;
  });
};
