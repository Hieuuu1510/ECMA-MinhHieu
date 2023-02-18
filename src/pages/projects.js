import Header from "../components/Header";
import ProjectList from "../components/projectList";
import { projects} from '../data';
import { getProjects } from "../api/project";
import { useState, useEffect } from "../lib";


const ProjectsPage = () => {
    const [project, setProject] = useState([]);

    useEffect(() => {
        // fetch("http://localhost:3000/projectData")
        // .then((hehe) => hehe.json())
        // .then((data) => setData(data))
        // .catch(() => console.log("sai"))
        getProjects().then(({ data}) => setProject(data))
                    .catch(() => console.log("list thất bại"))

    },[]);
    console.log(project)
    return ( /*html*/ `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" href="././brandy/css/project.css">
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
                        <li><a href="/">Home</a></li>
                        <li><a href="/project">Project</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/admin/projects"><i class="fa-solid fa-gears"></i></a></li>
                    </ul>
                </nav>
            </header>
            <div class="banner">
                <p>Tôi làm Web Developer</p>
                <img src="././brandy/images/shape.png" alt="">
            </div>
            <div class="project-title">
                <h2>Project</h2>
                <img src="././brandy/images/shape.png" alt="">
            </div>
            <div class="project">
                ${
                    project.map((item) => 
                        `
                            <div class="data">
                                <img src="${item.gallerys}" alt="">
                                <h2>${item.name}</h2>
                                <p>Cao Minh Chu (với tư cách Phó Giám đốc Sở Y tế TP Cần Thơ, đồng thời là Trưởng Ban Quản lý dự án) chỉ đạo cấp dưới tiếp nhận các báo giá, thông số kỹ thuật của thiết bị y tế do Công ty NSJ cung cấp. Từ đó, những người này làm báo cáo xin vốn, lập dự toán</p>
                            </div>
                        `
                    ).join("")
                }
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
    `);
};

// ${Header()}
//             <h1>Projects Page</h1>
//         ${ProjectList({ projects: projects})}

export default ProjectsPage;