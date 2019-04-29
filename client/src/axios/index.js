import axios from "axios";
import api from "../api";

export const getBlogData = () => {
  return axios.get(api["GET_BLOG_DATA"]);
};
