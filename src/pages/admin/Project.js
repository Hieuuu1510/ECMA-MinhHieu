// import { projects } from "../../data"

import { deleteProject, getProjects } from "../../api/project";
import { useState, useEffect } from "../../lib";
const AdminProjectsPage = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        // fetch("http://localhost:3000/projectData")
        // .then((hehe) => hehe.json())
        // .then((data) => setData(data))
        // .catch(() => console.log("sai"))
        getProjects().then(({ data}) => setData(data))
                    .catch(() => console.log("list thất bại"))

    }, [])
    
    useEffect(() => {
        const btns = document.querySelectorAll(".btn-remove");
        for(let btn of btns) {
            btn.addEventListener("click", () => {
                let id = btn.dataset.id;

                // fetch(`http://localhost:3000/projectData/${id}`, {
                //     method: "DELETE",    
                // })
                // .then(() => {
                //     let newProject = data.filter((item) => item.id != id);
                //     setData(newProject)
                // })
                // .catch(() => console.log("Xoa khong thanh cong"));
                deleteProject(id).then(() => {
                    let newProject = data.filter((item) => item.id != id);
                    setData(newProject);
                })
                                .catch(() => console.log("Xoá không thành công"))
            })
        }  
    })
    
  return ( /*html*/
    `<div class="container mt-5">
        <h1>Quản lý dự án</h1>
        <br>
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Tên dự án</th>
                    <th>Ngày hoàn thành</th>
                    <th>Ngôn ngữ lập trình</th>
                    <th>Linh github</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                ${data.map((project, index) => `
                    <tr>
                            <td>${index + 1}</td>
                            <td>${project.name}</td>
                            <td>${project.date}</td>
                            <td>${project.language}</td>
                            <td>${project.Link}</td>
                            <td><img src="${project.gallerys}" alt="" width="150px"></td>
                            <td width="150">
                                <button data-id="${project.id}" class="btn btn-danger btn-remove">Xóa</button> 
                                <button class="btn btn-danger btn-update"><a style="text-decoration: none; color: white;" href="/admin/projects/${project.id}/edit">Sửa</a></button>
                            </td>
                        </tr>
                `).join("")
            }
                             
            </tbody>
        </table>
        <button style="border: 1px solid whitesmoke; border-radius: 7px; padding: 5px; background-color: brown;">
            <a data-navigo style="text-decoration: none; color: white; padding: 5px;" href="/admin/contact/">show contact</a>
        </button>
        <button style="border: 1px solid whitesmoke; border-radius: 7px; padding: 5px; background-color: brown;">
            <a data-navigo style="text-decoration: none; color: white; padding: 5px;" href="/admin/projects/add">Add</a>
        </button>
    </div>`
  );
}

export default AdminProjectsPage