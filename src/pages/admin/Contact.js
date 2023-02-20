import { deleteContact, getContacts } from "../../api/contact";
import { useEffect, useState } from "../../lib"

const adminContactPage = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        getContacts().then(({ data}) => setData(data))
                    .catch(() => alert("list contact thất bại"));
    }, [])
    useEffect(() => {
        const btns = document.querySelectorAll('.btn-remove');
        for(const btn of btns) {
            btn.addEventListener("click", () => {
                let id = btn.dataset.id;
                deleteContact(id).then(() => {
                    let newContact = data.filter((item) => item.id != id)
                    setData(newContact);
                })
                                .catch(() => console.log("Xoá không thành công"))
                
            })
        }
    })
  return ( /*html*/
    `<div class="container mt-5">
    <h1>Quản lý contact user</h1>
    <br>
    <table class="table table-bordered">
        <thead>
            <tr>
                <th>STT</th>
                <th>Name</th>
                <th>Email</th>
                <th>Nội dung</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
        ${data.map((project, index) => 
            `
                <tr>
                    <td>${index+1}</td>
                    <td>${project.name}</td>
                    <td>${project.email}</td>
                    <td>${project.textarea}</td>
                    <td width="150">
                        <button data-id="${project.id}" class="btn btn-danger btn-remove" >Xóa</button> 
                    </td>
                </tr>
            `).join("")}
                           
        </tbody>
    </table>
    <button style="border: 1px solid whitesmoke; border-radius: 7px; padding: 5px; background-color: brown;">
        <a data-navigo style="text-decoration: none; color: white; padding: 5px;" href="#/admin/projects/">show Project</a>
    </button>
    <button style="border: 1px solid whitesmoke; border-radius: 7px; padding: 5px; background-color: brown;">
        <a data-navigo style="text-decoration: none; color: white; padding: 5px;" href="#/admin/user/">show User</a>
    </button>
</div>`
  )
}

export default adminContactPage