import { router, useEffect } from "../../lib";
import axios from "axios";
import { postProFile } from "../../api/proFile";

const addProFile = () => {
    useEffect(() => {
        const img = document.getElementById('product-images');
        const describe = document.getElementById('product-describe');
        const hocVan = document.getElementById('product-hocvan');
        const email = document.getElementById('product-email');
        const vercel = document.getElementById('product-link');
        const Phone = document.getElementById('product-phone');
        const address = document.getElementById('product-address');
        const job = document.getElementById('product-job');
        

        const form = document.getElementById('form-add');


        form.addEventListener("submit", async (e) => {
            e.preventDefault();
            const urls = await uploadFiles(img.files)
            const newProFile = {
                "image": urls,
                "describe": describe.value,
                "hocVan": hocVan.value,
                "email": email.value,
                "vercel": vercel.value,
                "Phone": Phone.value,
                "address": address.value,
                "job": job.value,
            }

            postProFile(newProFile)
                .then(() => router.navigate("#/admin/profile"))
                .catch(() => console.log("ket noi that bai"))
            
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
    `
    <div class="container mt-5">
        <h1>Thêm proFile</h1>
        <form id="form-add">
        <div class="form-group mb-3">
          <label for="">image</label>
          <input type="file" name="" id="product-images" multiple class="form-control">
        </div>
        <div class="form-group mb-3">
            <label for="">describe</label>
            <textarea name="" id="product-describe" cols="173" rows="10"></textarea>
        </div>
        <div class="form-group mb-3">
            <label for="">Học vấn</label>
            <input type="text" name="" id="product-hocvan" class="form-control">
        </div>
        <div class="form-group mb-3">
            <label for="">Email</label>
            <input type="email" name="" id="product-email" class="form-control">
        </div>
        <div class="form-group mb-3">
            <label for="">link vercel</label>
            <input type="text" name="" id="product-link" multiple class="form-control">
        </div>
        <div class="form-group mb-3">
            <label for="">Phone</label>
            <input type="text" name="" id="product-phone" multiple class="form-control">
        </div>
        <div class="form-group mb-3">
            <label for="">link address</label>
            <input type="text" name="" id="product-address" multiple class="form-control">
        </div>
        <div class="form-group mb-3">
            <label for="">job</label>
            <input type="text" name="" id="product-job" multiple class="form-control">
        </div>
        <div class="form-group">
          <button class="btn btn-primary">Thêm sản phẩm</button>
          <button  height="38px" class="btn" style="border: 1px solid whitesmoke; border-radius: 7px; padding: 5px; background-color: brown; width:138px">
            <a data-navigo style="text-decoration: none; color: white; padding: 5px;" href="#/admin/profile/">show ProFile</a>
          </button>
        </div>
        
        </form>
    </div>
    `
  )
}

export default addProFile