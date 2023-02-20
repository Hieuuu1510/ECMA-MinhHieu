import instace from "./config";

const getUsers = () => {
    return instace.get("/user");
}
const getUser = (id) => {
    return instace.get(`/user/${id}`);
}
const postUser = (newUser) => {
    return instace.post("/user", newUser);
}
const deleteUser = (id) => {
    return instace.delete(`/user/${id}`);
}
const editUser = (project) => {
    return instace.put(`/user/${project.id}`,project);
}

export { getUsers, getUser, postUser, deleteUser, editUser}