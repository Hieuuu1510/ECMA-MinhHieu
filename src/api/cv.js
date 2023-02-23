import instace from "./config";

const getCvs = () => {
    return instace.get("/linkCv");
}
const getCv = (id) => {
    return instace.get(`/linkCv/${id}`);
}
const postCv = (newLink) => {
    return instace.post("/linkCv", newLink);
}
const deleteCv = (id) => {
    return instace.delete(`/linkCv/${id}`);
}
const editCv = (newLink) => {
    return instace.put(`/linkCv/${newLink.id}`, newLink);
}

export { getCvs, getCv, postCv, deleteCv, editCv}