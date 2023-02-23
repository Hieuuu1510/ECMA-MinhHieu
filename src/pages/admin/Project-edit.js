import { editProject, getProject } from "../../api/project";
import { useEffect, router, useState } from "../../lib"
import axios from "axios";

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
      const productName = document.getElementById('product-name');
      const productDate = document.getElementById('product-date');
      const productLanguage = document.getElementById('product-language');
      const productLink = document.getElementById('product-link');
      const img = document.getElementById('product-image');
        const formAdd = document.getElementById('form-add');

        formAdd.addEventListener("submit", async (e) => {
            e.preventDefault();

            let url = [];

            img.files.length > 0
              ? (url = await uploadFiles(img.files))
              : (url = project.gallerys)


            const projects = {
              id: projectsId,
              name: productName.value,
              date: productDate.value,
              language: productLanguage.value,
              Link: productLink.value,
              gallerys: url,
            }

            editProject(projects).then(() => {
              router.navigate("#/admin/projects");
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

    const uploadFiles = async (files) => {
      if(files) {
        const CLOUND_NAME = "dstmo8xdv";
        const PRESET_NAME = "demo-upload";
        const FOLDER_NAME = "ECMA";
        const urls = [];
        const api = `https://api.cloudinary.com/v1_1/${CLOUND_NAME}/image/upload`;
  
        const formData = new FormData(); // key: value
  
        formData.append("upload_preset", PRESET_NAME);
        formData.append("folder", FOLDER_NAME)
  
        for(const file of files) {
          formData.append('file', file);
  
          const response = await axios.post(api, formData, {
            headers: {
              "Content-Type" : "multipart/form-data",
            },
          });
          urls.push(response.data.secure_url);
          return urls;
        }
      }
        
        }
      return (/*html*/
        `<div>
            <div class="container mt-5">
        <h1>Sửa dự án</h1>
        <form id="form-add">
          <div class="form-group mb-3">
            <label for="">Tên dự án</label>
            <input type="text" name="" id="product-name" class="form-control" value="${project.name}">
          </div>
          <div class="form-group mb-3">
              <label for="">Ngày hoàn thành</label>
              <input type="date" name="" id="product-date" class="form-control" value="${project.date}">
          </div>
          <div class="form-group mb-3">
              <label for="">Ngôn ngữ lập trình</label>
              <input type="text" name="" id="product-language" class="form-control" value="${project.language}">
          </div>
          <div class="form-group mb-3">
              <label for="">link github</label>
              <input type="text" name="" id="product-link" class="form-control" value="${project.Link}">
          </div>
          <div class="form-group mb-3">
              <label for="">Ảnh sản phẩm</label>
              <img src="${project.gallerys}" width="200px">
              <input type="file" name="" id="product-image" multiple class="form-control">
          </div>
          <div class="form-group">
            <button class="btn btn-primary">Sửa sản phẩm</button>
            <button style="border: 1px solid whitesmoke; border-radius: 7px; padding: 5px; background-color: brown;">
              <a data-navigo style="text-decoration: none; color: white; padding: 5px;" href="#/admin/projects/">show Project</a>
            </button>
          </div>
        </form>
        
    </div>
        </div>`
      )
}

export default AdminProjectEdit