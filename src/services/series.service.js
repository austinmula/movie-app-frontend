import axios from "axios";

const API_URL = "http://localhost:4001/api/series/";

export const getAllSeries = () => {
  return axios.get(API_URL).then((response) => {
    if (response.status !== 200) {
      throw new Error();
    }
    return response.data;
  });
};

export const getOneShow = (id) => {
  return axios.get(API_URL + id).then((response) => {
    console.log(response);
    if (response.status !== 200) {
      throw new Error();
    }
    return response.data[0];
  });
};

export const deleteShow = (id) => {
  return axios.delete(API_URL + id).then((response) => {
    console.log(response);
    if (response.status !== 200) {
      throw new Error();
    }
    return response.data;
  });
};
