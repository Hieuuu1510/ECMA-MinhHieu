import { postCv } from "../../api/cv";
import { router, useEffect } from "../../lib"

const linkCvAdd = () => {

    useEffect(() => {
        const linkCv = document.getElementById('product-cv');
        const form = document.getElementById('form-add');

        form.addEventListener("submit", (e) => {
            e.preventDefault();

            const newLink = {
                link: linkCv.value,
            }
            postCv(newLink).then(() => router.navigate("#/admin/cv"))
                            .catch(() => alert("Thêm không thành công"))
        })
    })

  return (/*html*/
    `
            <div class="container mt-5">
            <h1>Thêm CV</h1>
            <form id="form-add">
                <div class="form-group mb-3">
                    <label for="">Link Cv</label>
                    <input type="text" name="" id="product-cv" class="form-control">
                    </div>
                    <div class="form-group">
                    <button class="btn btn-primary">Add</button>
                    <button style="border: 1px solid whitesmoke; border-radius: 7px; padding: 5px; background-color: brown;">
                        <a data-navigo style="text-decoration: none; color: white; padding: 5px;" href="#/admin/cv/">show Cv</a>
                    </button>
                </div>
            </form>
            
        </div>
    `
  )
}

export default linkCvAdd