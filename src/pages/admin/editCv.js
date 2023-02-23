import { getCv, editCv } from "../../api/cv";
import { router, useEffect, useState } from "../../lib";

const AdmineditCv = ({ cvId}) => {
    // console.log(cvId);
    const [cv, setCv] = useState([]);
    useEffect(() => {
        getCv(cvId).then(({data}) => setCv(data))
                    .catch(() => console.log("list thất bại"))
    }, []);
    useEffect(() => {
        const linkCv = document.getElementById('product-cv');
        const form = document.getElementById('form-add');

        form.addEventListener("submit", (e) => {
            e.preventDefault();

            const newCv = {
                id: cvId,
                link: linkCv.value,
            }
            editCv(newCv).then(() => router.navigate("#/admin/cv"))
                        .catch(() => alert("edit thất bại"))
        } )
    })
  return ( /*html*/
    `
    <div class="container mt-5">
    <h1>Edit CV</h1>
    <form id="form-add">
        <div class="form-group mb-3">
            <label for="">Link Cv</label>
            <input type="text" name="" id="product-cv" class="form-control" value="${cv.link}">
            </div>
            <div class="form-group">
            <button class="btn btn-primary">Edit</button>
        </div>
    </form>
</div>
    `
  )
}

export default AdmineditCv