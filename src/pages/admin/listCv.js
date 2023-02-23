import { deleteCv, getCvs } from "../../api/cv";
import { useEffect, useState } from "../../lib"

const listCv = () => {
    const [cv, setCv] = useState([]);
     useEffect(() => {
        getCvs().then(({ data}) => setCv(data))
                .catch(() => alert("list không thành công"))
     }, [])
     useEffect(() => {
        const btns = document.querySelectorAll('.btn-remove');
        for(const btn of btns) {
            btn.addEventListener("click", () => {
                const id = btn.dataset.id;
                deleteCv(id).then(() => {
                    const newCv = cv.filter((item) => item.id != id);
                    setCv(newCv);
                })
                            .catch(() => alert("Xoá không thành công"))
            })
        }
     })
  return ( /*html*/
    `
    <div class="container mt-5">

    <h1>Quản lý Cv</h1>
    <br>
    <table class="table table-bordered">
        <thead>
            <tr>
                <th>STT</th>
                <th>Link cv</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
        ${cv.map((item, index) => 
            `
                <tr>
                        <td>${index + 1}</td>
                        <td>${item.link}</td>
                        <td width="150">
                            <button data-id="${item.id}" class="btn btn-danger btn-remove">Xóa</button> 
                            <button class="btn btn-danger btn-update"><a style="text-decoration: none; color: white;" href="#/admin/cv/${item.id}/edit">Sửa</a></button>
                        </td>
                    </tr>
            `
            ).join("")}
                
        </tbody>
    </table>
    <button style="border: 1px solid whitesmoke; border-radius: 7px; padding: 5px; background-color: brown;">
        <a data-navigo style="text-decoration: none; color: white; padding: 5px;" href="#/admin/projects/">show Project</a>
    </button>
    <button style="border: 1px solid whitesmoke; border-radius: 7px; padding: 5px; background-color: brown;">
        <a data-navigo style="text-decoration: none; color: white; padding: 5px;" href="#/admin/profile">show ProFile</a>
    </button>
    <button style="border: 1px solid whitesmoke; border-radius: 7px; padding: 5px; background-color: brown;">
        <a data-navigo style="text-decoration: none; color: white; padding: 5px;" href="#/admin/cv/add">Add</a>
    </button>
</div>
    `
  )
}

export default listCv