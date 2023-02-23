import { editProFile, getProFile } from "../../api/proFile";
import { router, useEffect, useState } from "../../lib"
import axios from "axios";

const editProfile = ({ profileId}) => {
    // console.log(profileId);
    const [ profile, setProFile] = useState([]);

    useEffect(() => {
        getProFile(profileId).then(({ data}) => setProFile(data))
                    .catch(() => console.log("list thất bại"))
    }, [])

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

          let url = [];

          img.files.length > 0
           ? (url = await uploadFiles(img.files))
           : (url = profile.image)


          const newProFile = {
            "id": profileId,
            "image": url,
            "describe": describe.value,
            "hocVan": hocVan.value,
            "email": email.value,
            "vercel": vercel.value,
            "Phone": Phone.value,
            "address": address.value,
            "job": job.value,
        }

        editProFile(newProFile).then(() => router.navigate("#/admin/profile"))
                                .catch(() => console.log("Edit không thành công"))
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
  return ( /*html*/
    `
    <div class="container mt-5">
    <h1>Thêm proFile</h1>
    <form id="form-add">
    <div class="form-group mb-3">
      <label for="">image</label>
      <img src="${profile.image}" alt="" style="margin-bottom: 10px" width="250">
      <input type="file" name="" id="product-images" class="form-control" >
    </div>
    <div class="form-group mb-3">
        <label for="">describe</label>
        <textarea name="" id="product-describe" cols="173" rows="10" class="form-control" value="">${profile.describe}</textarea>
    </div>
    <div class="form-group mb-3">
        <label for="">Học vấn</label>
        <input type="text" name="" id="product-hocvan" class="form-control" value="${profile.hocVan}">
    </div>
    <div class="form-group mb-3">
        <label for="">Email</label>
        <input type="email" name="" id="product-email" class="form-control" value="${profile.email}">
    </div>
    <div class="form-group mb-3">
        <label for="">link vercel</label>
        <input type="text" name="" id="product-link" multiple class="form-control" value="${profile.vercel}">
    </div>
    <div class="form-group mb-3">
        <label for="">Phone</label>
        <input type="text" name="" id="product-phone" multiple class="form-control" value="${profile.Phone}">
    </div>
    <div class="form-group mb-3">
        <label for="">link address</label>
        <input type="text" name="" id="product-address" multiple class="form-control" value="${profile.address}">
    </div>
    <div class="form-group mb-3">
        <label for="">job</label>
        <input type="text" name="" id="product-job" multiple class="form-control" value="${profile.job}">
    </div>
    <div class="form-group">
      <button class="btn btn-primary">edit profile</button>
    </div>
    
    </form>
</div>
    `
  )
}

export default editProfile