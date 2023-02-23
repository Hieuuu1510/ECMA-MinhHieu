import { getCvs } from "../api/cv";
import { getProFiles } from "../api/proFile";
import { useEffect, useState } from "../lib";


const HomePage = () => {
    const [profile, setProfile] = useState([]);
    const [cv, setCv] = useState([]);
    useEffect(() => {
        getCvs().then(({ data }) => setCv(data))
            .catch(() => console.log("list link cv thất bại"))


        getProFiles().then(({ data}) => setProfile(data))
                    .catch(() => console.log("list profile thất bại"))
    }, [])
    return /*html*/ `
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="./brandy/css/home.css">
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
      integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
</head>
<body>

    
        <header>
            <div class="logo">
                <p>Minh <b>Hiếu</b></p>
            </div>
            <nav>
                <ul>
                    <li><a data-navigo href="/">Home</a></li>
                    <li><a data-navigo href="/#project" >Project</a></li>
                    <li><a data-navigo href="/#contact">Contact</a></li>
                    <li><a data-navigo href="#/admin/login"><i class="fa-solid fa-gears"></i></a></li>
                </ul>
            </nav>
        </header>
        <div class="banner">
            <p>Tôi làm Web Developer</p>
            ${cv.map((item) => `
                <span><a target="_blank" href="${item.link}"><> My resume <></a></span>
            `).join("")}
            
            <br>
            <img src="././images/shape.png" alt="" >
        </div>
        <div class="about">
            <div class="about-text">
                <p>About me</p>
                <img src=".././images/shape.png" alt="">
            </div>
            <div class="about-me">
                ${profile.map((item) => `
                <div class="anh">
                <img src="${item.image}" width="200" height="712" style="border-radius: 15px;">
            </div>
            <div class="text-profile1">
                <h2>Một chút về tôi</h2>
                <p>${item.describe}</p>
            </div>
            <div class="text-profile2">
                <h2>Thông tin cơ bản</h2>
                <p>
                    Học vấn:  ${item.hocVan}<br>
                    Email:  ${item.email}<br>
                    Website: ${item.vercel}<br>
                    Điện thoại:  ${item.Phone}<br>
                    Địa chỉ:  ${item.address}<br>
                    Nghề nghiệp:  ${item.job}<br>
                </p>
            </div>
                `)}  
            </div>
        </div>
        <footer>
            <div class="logo-footer">
                <p>Minh <b>Hiếu</b></p>
            </div>
            <div class="text-footer">
                <p>Đằng sau 1 lập trình viên thành công là một người bạn gái... <b>không tồn tại</b> .</p>
            </div>
        </footer>

</body>
</html>
    `;

};

export default HomePage;