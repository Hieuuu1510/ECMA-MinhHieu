// const products = ["product 1", "product 2", "product 3"];

// for(let i = 0; i <= products.length; i++) {
//     console.log(products[i]);
// }
// // for...in
// for(let a  in products) {
//     console.log(products[a]);
// }
// // for...of
// for(let b of products) {
//     console.log(b);
// }
// // foreach
// products.forEach(function(item, i) {
//     console.log(item);
// });

const productList = [
    { id: 1, name: "Product A", price: 200 }, // item
    { id: 2, name: "Product B", price: 300 }, // item
    { id: 3, name: "Product C", price: 400 }, // item
];

const app = document.getElementById('app');

// // Ví dụ show product sử dụng forEach
// const showProducts = () => {
//     let result = "";
//     productList.forEach((item) => {
//         result += `<div>${item.price}</div>`;
//     });
//     app.innerHTML = result;
// }

// map - method --- có thể thay đổi dữ liệu trong mảng
// const newProductList = productList.map((item) => {
//     let arr = "";
//     arr += `${item.name} "ahihi"`;
//     console.log(arr);
// })

// // ví dụ show product sử dụng map
// const showProduct = () => {
//     app.innerHTML = productList.map((index) => 
//         `<div>${index.name}</div>`).join("");
// }
// showProduct();


// filter --- Tạo một mảng mới để xoá sản phẩm
const newFilterProducts = productList.filter((item) => item.id != 1);
const [fisrt, second] = newFilterProducts;
document.querySelector("#show").innerHTML = [fisrt, second];
// find --- hiện thị chi tiết sản phẩm
const findItem = productList.find((item) => item.id == 2);
const newItem = `<div>${findItem.name}</div> <div>${findItem.price}</div>`;
document.querySelector("#productdetail").innerHTML = newItem;