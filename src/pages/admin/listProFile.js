import { deleteProFile, getProFiles } from "../../api/proFile";
import { useEffect, useState } from "../../lib"

const listProFile = () => {
    const [proFile, setProFile] = useState([]);

    useEffect(() => {
        getProFiles().then(({ data}) => setProFile(data))
                    .catch(() => console.log("list profile thất bại"))
    }, [])

    useEffect(() => {
        const btns = document.querySelectorAll('.btn-remove');
        for(const btn of btns) {
            btn.addEventListener("click", () => {
                const id = btn.dataset.id;
                deleteProFile(id).then(() => {
                    let newProFile = proFile.filter((item) => item.id != id);
                    setProFile(newProFile);
                })
                                .catch(() => console.log("Xoá không thành công"))
            })
        }
    })
  return ( /*html*/
    `
    <div class="">
    <h1 style="margin-top: 20px;">Quản lý proFile</h1>
    <br>
    <table class="table table-bordered">
        <thead>
            <tr>
                <th>STT</th>
                <th>Image</th>
                <th>describe</th>
                <th>hocVan</th>
                <th>email</th>
                <th>vercel</th>
                <th>Phone</th>
                <th>address</th>
                <th>job</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
            ${proFile.map((item, index) => `
                <tr>
                        <td>${index + 1}</td>
                        <td><img src="${item.image}" alt="" width="150px" height="130px"></td>
                        <td>${item.describe}</td>
                        <td>${item.hocVan}</td>
                        <td>${item.email}</td>
                        <td>${item.vercel}</td>
                        <td>${item.Phone}</td>
                        <td>${item.address}</td>
                        <td>${item.job}</td>
                        <td width="150">
                            <button data-id="${item.id}" class="btn btn-danger btn-remove">Xóa</button> 
                            <button class="btn btn-danger btn-update"><a style="text-decoration: none; color: white;" href="#/admin/profile/${item.id}/edit">Sửa</a></button>
                        </td>
                    </tr>
            
            `).join("")}
                
                         
        </tbody>
    </table>
    <button style="border: 1px solid whitesmoke; border-radius: 7px; padding: 5px; background-color: brown;">
        <a data-navigo style="text-decoration: none; color: white; padding: 5px;" href="#/admin/contact/">show contact</a>
    </button>
    <button style="border: 1px solid whitesmoke; border-radius: 7px; padding: 5px; background-color: brown;">
        <a data-navigo style="text-decoration: none; color: white; padding: 5px;" href="#/admin/projects/">show Project</a>
    </button>
    <button style="border: 1px solid whitesmoke; border-radius: 7px; padding: 5px; background-color: brown;">
        <a data-navigo style="text-decoration: none; color: white; padding: 5px;" href="#/admin/cv/">show Cv</a>
    </button>
    <button style="border: 1px solid whitesmoke; border-radius: 7px; padding: 5px; background-color: brown;">
        <a data-navigo style="text-decoration: none; color: white; padding: 5px;" href="#/admin/profile/add">Add</a>
    </button>
</div>
    </div>
    `
  )
}

export default listProFile