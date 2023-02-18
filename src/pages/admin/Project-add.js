
import axios from "axios";
import { postProject } from "../../api/project";
import { useEffect, router } from "../../lib"

const AdminProjectAddPage = () => {
  useEffect(() => {
    const productName = document.getElementById('product-name');
    const productDate = document.getElementById('product-date');
    const productLanguage = document.getElementById('product-language');
    const productLink = document.getElementById('product-link');
    const productImages = document.getElementById('product-images');
    const formAdd = document.getElementById('form-add');

    formAdd.addEventListener("submit", async (e) => {
        e.preventDefault();

        const urls = await uploadFiles(productImages.files)

        const project = {
          name: productName.value,
          date: productDate.value,
          language: productLanguage.value,
          Link: productLink.value,
          gallerys: urls,
        }

        // fetch("http://localhost:3000/projectData", {
        //   method:"POST",
        //   headers: {
        //     "Content-type": "application/json",
        //   },
        //   body: JSON.stringify(project),
        // })
        // .then(() => router.navigate("admin/projects"))
        // .catch(() => console.log("ket noi that bai"))
        postProject(project).then(() => {
          router.navigate("admin/projects");
        })
        .catch(() => console.log("Thêm thất bại"));
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
    `<div class="container mt-5">
        <h1>Thêm sản phẩm</h1>
        <form id="form-add">
        <div class="form-group mb-3">
          <label for="">Tên dự án</label>
          <input type="text" name="" id="product-name" class="form-control">
        </div>
        <div class="form-group mb-3">
            <label for="">Ngày hoàn thành</label>
            <input type="date" name="" id="product-date" class="form-control">
        </div>
        <div class="form-group mb-3">
            <label for="">Ngôn ngữ lập trình</label>
            <input type="text" name="" id="product-language" class="form-control">
        </div>
        <div class="form-group mb-3">
            <label for="">link github</label>
            <input type="text" name="" id="product-link" class="form-control">
        </div>
        <div class="form-group mb-3">
            <label for="">Ảnh sản phẩm</label>
            <input type="file" name="" id="product-images" multiple class="form-control">
        </div>
        <div class="form-group">
          <button class="btn btn-primary">Thêm sản phẩm</button>
          <button  height="38px" class="btn" style="border: 1px solid whitesmoke; border-radius: 7px; padding: 5px; background-color: brown; width:138px">
            <a data-navigo style="text-decoration: none; color: white; padding: 5px;" href="/admin/projects/">show Project</a>
          </button>
        </div>
        
        </form>
    </div>`
  )
}

export default AdminProjectAddPage