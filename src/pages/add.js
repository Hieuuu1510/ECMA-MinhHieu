import { useEffect } from "../lib"
import axios from "axios";

const add = () => {
    useEffect(() => {
        const img = document.getElementById('file');
        const form = document.getElementById('form-add');

        form.addEventListener("submit", async (e) => {
            e.preventDefault();
            const urls = await uploadFiles(img.files)
            const newImg = {
                "image": urls,
            }

            fetch("https://dj0r17-8080.preview.csb.app/api/images", {
            method: "POST",
            headers: {
                    "Content-type": "application/json",
                  },
                  body: JSON.stringify(newImg),
                })
                .then(() => console.log(newImg))
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
    <div class="container ">
    <h1>Login</h1>
    <form  id="form-add">
        <label  for="username">Email</label>
        <input  type="file" id="file" multiple name="username" placeholder="Enter email">
        <button class="buttonLogin" value="Login" id="login">Login</button>
    </form>
</div>
    `
  )
}

export default add