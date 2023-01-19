import axios from "axios";

const API_URL = "http://localhost:4001/api/series/";

export const getAllSeries = () => {
  return axios.get(API_URL).then((response) => {
    console.log(response);
    if (response.status !== 200) {
      throw new Error();
    }
    return response.data;
  });
};
