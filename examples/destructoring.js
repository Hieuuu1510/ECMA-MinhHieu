// object = { key: value }
const person = {
    name: "john",
    age: 20,
    address: {
        city: "haf noij",
    }
}
// 

// console.log(person.name);

// const { name } = person;
// console.log(name);

const { name, age , address: { city } } = person;
console.log(city);

function test({name, age, address: { city }}) {
    console.log(age);

}
test(person);