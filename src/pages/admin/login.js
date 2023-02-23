import { Login } from "../../api/auth";
import { useEffect, router, useState } from "../../lib"

const loginn = () => {
    useEffect(() => {
        const username = document.getElementById('username');
        const password = document.getElementById('password');
        const login = document.getElementById('form-add');
        
        login.addEventListener("submit", (e) => {
            e.preventDefault();
            const user = {
                email: username.value,
                pass: password.value,
            }

            Login(user).then(() => router.navigate("/admin/projects"))
                        .catch(() => alert("Tài khoản hoặc mật khẩu sai"))
            
        })
    })
  return /*html*/ `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <link rel="stylesheet" href="./brandy/css/login.css">
  </head>
  <body>
      <div class="container form-login">
          <h1>Login</h1>
          <form class="form" id="form-add">
              <label class="label" for="username">Email</label>
              <input class="inputLogin" type="email" id="username" name="username" placeholder="Enter email">
              <label class="label" for="password">Password</label>
              <input class="inputLogin" type="password" id="password" name="password" placeholder="Enter password">
              <p>Bạn chưa có tài khoản ..<a class="a-login" href="/#admin/signup/">Đăng ký</a></p>
              <button class="buttonLogin" value="Login" id="login">Login</button>
          </form>
      </div>
  </body>
  </html>
    `
};

export default loginn






