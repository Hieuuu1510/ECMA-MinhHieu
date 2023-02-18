import { editProject, getProject } from "../../api/project";
import { useEffect, router, useState } from "../../lib"

const AdminProjectEdit = ({ projectsId}) => {
    const [project, setProject] = useState({});
    useEffect(() => {        
      getProject(projectsId).then(({ data}) => setProject(data))
                            .catch(() => console.log("list 1 sản phẩm không thành công"))

        // fetch(`http://localhost:3000/projectData/${projectsId}`, {
        //     method: "GET",
        // })
        // .then((item) => item.json())
        // .then((item) => setProject(item))
        // .catch(() => console.log("KHông lấy được dữ liệuuu"));
    }, [])
    useEffect(() => {
        const projectName = document.getElementById('product-name');
        const projectDescribe = document.getElementById('product-describe')
        const projectImage = Document.getElementById('')
        const formAdd = document.getElementById('form-add');

        formAdd.addEventListener("submit", (e) => {
            e.preventDefault();
    
            const project = {
              id: projectsId,
              name: projectName.value,
              describe: projectDescribe.value,
              gallerys: project.gallerys,
            }

            editProject(project).then(() => {
              router.navigate("admin/projects");
            })
                                .catch(() => console.log("Sửa thất bại"))
    
            // fetch(`http://localhost:3000/projectData/${projectsId}`, {
            //   method:"PUT",
            //   headers: {
            //     "Content-type": "application/json",
            //   },
            //   body: JSON.stringify(project),
            // })
            // .then(() => router.navigate("admin/projects"))
            // .catch(() => console.log("ket noi that bai"))
        })
      })
      return (/*html*/
        `<div>
            <div class="container mt-5">
        <h1>Sửa sản phẩm</h1>
        <form id="form-add">
          <div class="form-group mb-3">
            <label for="">Tên sản phẩm</label>
            <input type="text" name="" id="product-name" class="form-control" value="${project.name}">
          </div>
          <div class="form-group mb-3">
              <label for="">Mô tả sản phẩm</label>
              <input type="text" name="" id="product-describe" class="form-control" value="${project.price}">
          </div>
          <div class="form-group mb-3">
              <label for="">Ảnh sản phẩm</label>
              <img src="${project.gallerys}" width="200px">
          </div>
          <div class="form-group">
            <button class="btn btn-primary">Sửa sản phẩm</button>
            
          </div>
        </form>
        <button style="border: 1px solid whitesmoke; border-radius: 7px; padding: 5px; background-color: brown;">
              <a data-navigo style="text-decoration: none; color: white; padding: 5px;" href="/admin/projects/">show Project</a>
            </button>
    </div>
        </div>`
      )
}

export default AdminProjectEdit