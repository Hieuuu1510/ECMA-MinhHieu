import instace from "./config";

const getProjects = () => {
    return instace.get("/projectData");
}
const getProject = (id) => {
    return instace.get(`/projectData/${id}`);
}
const postProject = (project) => {
    return instace.post("/projectData", project);
}
const deleteProject = (id) => {
    return instace.delete(`/projectData/${id}`);
}
const editProject = (project) => {
    return instace.put(`/projectData/${project.id}`,project);
}

export { getProjects, getProject, postProject, deleteProject, editProject}