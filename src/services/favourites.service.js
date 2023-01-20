import axios from "axios";

const API_URL = "http://localhost:4001/api/favourites/";

export const getFavourites = (id) => {
  return axios.get(API_URL + id).then((response) => {
    console.log(response);
    if (response.status !== 200) {
      throw new Error();
    }
    return response.data;
  });
};
