import { deleteUser, getUsers } from "../../api/user";
import { useEffect, useState } from "../../lib"


const AdminUser = () => {
    const [user, setUser] = useState([]);
    useEffect(() => {
        getUsers().then(({ data}) => setUser(data))
                .catch(() => alert("list thất bại"))
    }, [])
    useEffect(() => {
        const btns = document.querySelectorAll('.btn-remove');

        for(const btn of btns) {
            btn.addEventListener("click", () => {
                const id = btn.dataset.id;
                deleteUser(id).then(() => {
                                    const newUsers = user.filter((item) => item.id != id);
                                    setUser(newUsers);
                                })
                                .catch(() => alert("Xoá không thành công"))
            })
        }
    })


  return ( /*html*/
    `
    <div class="container mt-5">
    <h1>Quản lý user</h1>
    <br>
    <table class="table table-bordered">
        <thead>
            <tr>
                <th>STT</th>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
        ${user.map((item, index) => 
            `
                <tr>
                        <td>${index+1}</td>
                        <td>${item.name}</td>
                        <td>${item.email}</td>
                        <td>${item.pass}</td>
                        <td width="150">
                            <button data-id="${item.id}" class="btn btn-danger btn-remove">Xóa</button> 
                            <button class="btn btn-danger btn-update"><a style="text-decoration: none; color: white;" href="/admin/user/${item.id}/edit">Sửa</a></button>
                        </td>
                    </tr>
            `
        ).join("")}
                

                         
        </tbody>
    </table>
    <button style="border: 1px solid whitesmoke; border-radius: 7px; padding: 5px; background-color: brown;">
        <a data-navigo style="text-decoration: none; color: white; padding: 5px;" href="/admin/contact/">show contact</a>
    </button>
    <button style="border: 1px solid whitesmoke; border-radius: 7px; padding: 5px; background-color: brown;">
        <a data-navigo style="text-decoration: none; color: white; padding: 5px;" href="/admin/projects/">show project</a>
    </button>
    <button style="border: 1px solid whitesmoke; border-radius: 7px; padding: 5px; background-color: brown;">
        <a data-navigo style="text-decoration: none; color: white; padding: 5px;" href="/admin/user/add">Add</a>
    </button>
</div>
    `
)
    }

export default AdminUser