import { useDispatch } from "react-redux";
import { userError, userLogin } from "../redux/userSlice";
import Api from "./api";

const userService = {
  register: async (params) => {
    Api.post("/users/register", params);
  },
  login: async (params) => {
    const response = await Api.post("/users/login", params);
    localStorage.setItem("user", JSON.stringify(response.data.user));
    localStorage.setItem("token", JSON.stringify(response.data.token));
    return response;
  },
  logout: () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  },
};

export default userService;
