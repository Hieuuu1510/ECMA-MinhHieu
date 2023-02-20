import { postUser } from "../../api/user";
import { router, useEffect } from "../../lib"

const AdminUserAdd = () => {
    useEffect(() => {
        const productName = document.getElementById('product-name');
        const productEmail = document.getElementById('product-email');
        const productPass = document.getElementById('product-pass');
        const form = document.getElementById('form-add');

    
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            const newUser = {
                name: productName.value,
                email: productEmail.value,
                pass: productPass.value,
            }
            console.log(newUser);
            postUser(newUser).then(() => router.navigate("/admin/user"))
                            .catch(() => alert("Thêm thất bại"))
        })
    })
    return (/*html*/
        `
        <div class="container mt-5">
            <h1>Thêm user</h1>
            <form id="form-add">
                <div class="form-group mb-3">
                <label for="">Tên user</label>
                <input type="text" name="" id="product-name" class="form-control">
                </div>
                <div class="form-group mb-3">
                    <label for="">Email</label>
                    <input type="email" name="" id="product-email" class="form-control">
                </div>
                <div class="form-group mb-3">
                    <label for="">Password</label>
                    <input type="text" name="" id="product-pass" class="form-control">
                </div>

                <div class="form-group">
                <button class="btn btn-primary">Thêm User</button>
                <button  height="38px" class="btn" style="border: 1px solid whitesmoke; border-radius: 7px; padding: 5px; background-color: brown; width:138px">
                    <a data-navigo style="text-decoration: none; color: white; padding: 5px;" href="#/admin/user/">show User</a>
                </button>
                </div>
            
            </form>
        </div>
    `
    )
}

export default AdminUserAdd