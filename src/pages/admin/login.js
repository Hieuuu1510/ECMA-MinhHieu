import { getUsers } from "../../api/user";
import { useEffect, router, useState } from "../../lib"

const login = () => {
    const [users, setUser] = useState([]);
    useEffect(() => {
        getUsers().then(({ data}) => setUser(data))
                    .catch(() => alert("list thất bại")) 
    }, [])
    useEffect(() => {
        const username = document.getElementById('username');
        const password = document.getElementById('password');
        const login = document.getElementById('form-add');
        
        login.addEventListener("submit", (e) => {
            e.preventDefault();
            // users.map((item) => {
            //     if(item.email == username.value && item.pass == password.value) {
            //         alert("Đăng nhập thành công");
            //     }else {
            //         alert("mật khẩu hoặc tài khoản không đúng");
            //     }
            // })
            for(const item of users) {
                if(item.email == username.value && item.pass == password.value) {
                    router.navigate("/admin/projects");
                }else {
                    alert("mật khẩu hoặc tài khoản không đúng");
                }
            }
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
      <link rel="stylesheet" href="../brandy/css/login.css">
  </head>
  <body>
      <div class="container">
          <h1>Login</h1>
          <form id="form-add">
              <label for="username">Email</label>
              <input type="email" id="username" name="username" placeholder="Enter email">
              <label for="password">Password</label>
              <input type="password" id="password" name="password" placeholder="Enter password">
              <button value="Login" id="login">Login</button>
          </form>
      </div>
  </body>
  </html>
    `
};

export default login






