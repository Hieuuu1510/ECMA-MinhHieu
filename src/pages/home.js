
import Header from "../components/Header";
import nav from "../components/Nav";

const HomePage = () => {
    return /*html*/ `
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="././brandy/css/home.css">
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
                    <li><a data-navigo href="/project">Project</a></li>
                    <li><a data-navigo href="/contact">Contact</a></li>
                    <li><a data-navigo href="/admin/login"><i class="fa-solid fa-gears"></i></a></li>
                </ul>
            </nav>
        </header>
        <div class="banner">
            <p>Tôi làm Web Developer</p>
            <span><a target="_blank" href=""><> My resume <></a></span>
            <br>
            <img src="././brandy/images/shape.png" alt="" >
        </div>
        <div class="about">
            <div class="about-text">
                <p>About me</p>
                <img src="././brandy/images/shape.png" alt="">
            </div>
            <div class="about-me">
                <div class="anh">
                    <img src="././brandy/images/chanh.jpg" alt="" width="350" style="border-radius: 15px;">
                </div>
                <div class="text-profile1">
                    <h2>Một chút về tôi</h2>
                    <p>Hiện tại, mình đang là sinh viên kì 5 tại trường FPT Polytechnic. Mình bắt đầu học lập trình từ
                    tháng 8 năm ngoái và phần lớn thời gian trong ngày mình đều ngồi học code. Ngoài việc học tập trên trường thì mình thường xuyên
                    học thêm trên w3school và trên các kênh Youtube như evondev, easy frontend, ...</p>
                </div>
                <div class="text-profile2">
                    <h2>Thông tin cơ bản</h2>
                    <p>
                        Học vấn:  FPT Polytechnic<br>
                        Email:  hieutmph20715@fpt.edu.vn<br>
                        Website: <br>
                        Điện thoại:  0862069563<br>
                        Địa chỉ:  Lý Nhân - Hà Nam<br>
                        Nghề nghiệp:  Web developer<br>
                        <tr>
                            <td></td>
                        </tr>

                    </p>
                </div>
            </div>
        </div>
        <footer>
            <div class="logo-footer">
                <p>Minh <b>Hiếu</b></p>
            </div>
            <div class="lienKet">
                <p>FOLLOW ME ON HERE</p>
               <a target="_blank" href="https://www.instagram.com/_mink.hyeu/"> <i class="fa-brands fa-instagram ig"></i> </a>
               <a target="_blank" href="https://www.facebook.com/profile.php?id=100052403615266">  <i class="fa-brands fa-facebook fb"></i> </a>
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