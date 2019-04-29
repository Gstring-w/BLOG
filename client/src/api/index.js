const api = {};

if (process.env.NODE_ENV !== "production") {
  api["GET_BLOG_DATA"] =
    "https://www.easy-mock.com/mock/5cc6aa2ddc60090f7ce6857b/data/data#!method=get";
} else {
  api["GET_BLOG_DATA"] = "localhost:12306/get_blog_data";
}

export default api;
