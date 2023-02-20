import { editUser, getUser } from "../../api/user";
import { router, useEffect, useState } from "../../lib";


const AdminUserEdit = ({ userId}) => {

    const [user, setUser] = useState([]);

    useEffect(() => {
        getUser(userId).then(({ data}) => setUser(data) )
                        .catch(() => alert("List thất bại"))
    }, [])
    useEffect(() => {
        const productName = document.getElementById('product-name');
        const productEmail = document.getElementById('product-email');
        const productPass = document.getElementById('product-pass');
        const form = document.getElementById('form-add');

        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const newUser = {
                id: userId,
                name: productName.value,
                email: productEmail.value,
                pass: productPass.value,
            }
            editUser(newUser).then(() => router.navigate("#/admin/user"))
                            .catch(() => console.log("Edit thất bại"))
        })
    })
  return ( /*html*/
    `
    <div class="container mt-5">
    <h1>Edit user</h1>
    <form id="form-add">
        <div class="form-group mb-3">
        <label for="">Tên user</label>
        <input type="text" name="" id="product-name" class="form-control" value="${user.name}">
        </div>
        <div class="form-group mb-3">
            <label for="">Email</label>
            <input type="email" name="" id="product-email" class="form-control" value="${user.email}">
        </div>
        <div class="form-group mb-3">
            <label for="">Password</label>
            <input type="text" name="" id="product-pass" class="form-control" value="${user.pass}">
        </div>

        <div class="form-group">
        <button class="btn btn-primary">Sửa User</button>
        </div>
    
    </form>
</div>
    `
  )
}

export default AdminUserEdit