import { register } from "../../api/auth";
import { router, useEffect } from "../../lib"

const signupPage = () => {
    useEffect(() => {
        const email = document.getElementById('email');
        const pass = document.getElementById('password');
        const form = document.getElementById('form-signup');

        form.addEventListener("submit", (e) => {
            e.preventDefault();
            
            const user = {
                email: email.value,
                pass: pass.value,
            }
            register(user).then(() => {
                                alert("ĐĂng ký thành công hãy đăng nhập");
                                router.navigate("/#admin/login")})
                            .catch(() => alert("Đăng ký thất bại"))
        })
    })

  return ( /*html*/


    `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <form class="form-signup" id="form-signup">
            <h2 class="h2-signup">Đăng ký</h2>
            <div class="signup">
              <label class="label-signup" for="email">Email:</label>
              <input class="input-signup" type="email" id="email" name="email" required>
            </div>
            <div>
              <label class="label-signup" for="password">Mật khẩu:</label>
              <input class="input-signup" type="password" id="password" name="password" required>
            </div>
            <button class="button-signup" id="btn-signup">Đăng ký</button>
          </form>
    </body>
    </html>
    `
  )
}

export default signupPage