import instace from "./config";

const getProFiles = () => {
    return instace.get("/proFile");
}
const getProFile = (id) => {
    return instace.get(`/proFile/${id}`);
}
const postProFile = (newProFile) => {
    return instace.post("/proFile", newProFile);
}
const deleteProFile = (id) => {
    return instace.delete(`/proFile/${id}`);
}
const editProFile = (newProFile) => {
    return instace.put(`/proFile/${newProFile.id}`,newProFile);
}

export { getProFiles, getProFile, postProFile, deleteProFile, editProFile}