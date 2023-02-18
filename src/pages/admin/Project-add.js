
import axios from "axios";
import { postProject } from "../../api/project";
import { useEffect, router } from "../../lib"

const AdminProjectAddPage = () => {
  useEffect(() => {
    const productName = document.getElementById('product-name');
    const productDescribe = document.getElementById('product-describe');
    const productImages = document.getElementById('product-images');
    const formAdd = document.getElementById('form-add');

    formAdd.addEventListener("submit", async (e) => {
        e.preventDefault();

        const urls = await uploadFiles(productImages.files)

        const project = {
          name: productName.value,
          describe: productDescribe.value,
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
          <label for="">Tên sản phẩm</label>
          <input type="text" name="" id="product-name" class="form-control">
        </div>
        <div class="form-group mb-3">
            <label for="">Mô tả sản phẩm</label>
            <input type="text" name="" id="product-describe" class="form-control">
        </div>
        <div class="form-group mb-3">
            <label for="">Ảnh sản phẩm</label>
            <input type="file" name="" id="product-images" multiple class="form-control">
        </div>
        <div class="form-group">
          <button class="btn btn-primary">Thêm sản phẩm</button>
        </div>
        </form>
    </div>`
  )
}

export default AdminProjectAddPage