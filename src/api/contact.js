import instace from "./config";

const getContacts = () => {
    return instace.get("/contact");
}
const postContact = (newContact) => {
    return instace.post("/contact", newContact);
}
const deleteContact = (id) => {
    return instace.delete(`/contact/${id}`);
}


export { getContacts, postContact, deleteContact}