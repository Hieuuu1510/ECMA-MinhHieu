import { getProject } from "../api/project";
import { useEffect, useState } from "../lib";
import { getCvs } from "../api/cv";

const ProjectDetailPage = ({ projectId}) => {
    const [project, setProject] = useState([]);
    const [ cv, setCv] = useState([]);

    useEffect(() => {
        getProject(projectId).then(({ data}) => setProject(data))
                            .catch(() => console.log("list sản phẩm thất bại"))

        getCvs().then(({ data}) => setCv(data))
                            .catch(() => console.log("list link cv thất bại"))
    }, [])
    return ( /*html*/
        `
        <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" href="./brandy/css/projectDeltail.css">
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
                        <li><a data-navigo href="/#project">Project</a></li>
                        <li><a data-navigo href="/#contact">Contact</a></li>
                        <li><a data-navigo href="#/admin/login"><i class="fa-solid fa-gears"></i></a></li>
                    </ul>
                </nav>
            </header>
            <div class="banner">
                <p>Tôi làm Web Developer</p>
                ${cv.map((item) => `
                    <span class="span-deltail"><a class="cv-deltail" target="_blank" href="${item.link}"><> My resume <></a></span>
                 `).join("")}
                
            </div>
        <div class="projectDeltail">
            <img src="${project.gallerys}" width="400" height="370" alt="">
            <h2>${project.name}</h2>
            <span><i class="fa-regular fa-calendar-days icon"></i> ${project.date}</span>
            <p><b>Ngôn ngữ lập trình:</b> ${project.language}</p>
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
        `
    )
    
}

export default ProjectDetailPage



// const currentProject = projects.find((project) => project.id == projectId);
//     if (!currentProject) return `Loading...`;
//     return /*html*/ `<h1>Project Detail Page</h1>
//         ${currentProject.name}
//         <hr />
        
//         ${
//             currentProject.teams
//                 ? `
//                     <h2>Teams</h2>
//                     <ul>
//                         ${currentProject.teams.map((member) => `<li>${member.name}</li>`).join("")}
//                     <ul>
//                     `
//                 : ""
//         }