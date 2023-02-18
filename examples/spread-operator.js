// spread -> clone ( copy )
const person = {
    name: "Hieu",
    age: 20,
    street: "lang",
    child: {
        name: "Uyn",
    }
}
console.log(person);
// Suwr dungj spread operator deer copy
// const info = {
//         ...person,
//         address: "Thái Bình",
//     };
// console.log(info);

// Sử dụng Object assign để copy
// const info = Object.assign({}, person, {address: "ha nam"});
// info.name = "linh";
// console.log(info);

// Deep copy
const info = structuredClone(person);
info.address = "Ha nam";
info.child.name = "hehe";
info.name = "linh";
console.log("person", person);
console.log("info", info);