import instance from "./config";

const register = (user) => {
  return instance.post("/signup", user);
};

const Login = (user) => {
  return instance.post("/signin", user);
};

export { register, Login };