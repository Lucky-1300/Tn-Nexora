// import axios from "axios";

// const api = axios.create({
//   baseURL: "http://localhost:5000",
// });

// api.interceptors.response.use(
//   (res) => res,
//   (error) => {
//     if (error.response?.status === 403) {
//       window.location.href = "/403";
//     }
//     if (error.response?.status === 500) {
//       window.location.href = "/500";
//     }
//     return Promise.reject(error);
//   }
// );

// export default api;


import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000"
});

api.interceptors.response.use(
  (response) => response,
  (error) => {

    if (error.response) {

      if (error.response.status === 403) {
        window.location.href = "/403";
      }

      if (error.response.status === 404) {
        window.location.href = "/404";
      }

      if (error.response.status === 500) {
        window.location.href = "/500";
      }

    }

    return Promise.reject(error);
  }
);

export default api;