
import { useEffect, useState } from "../lib";
import { postContact } from "../api/contact";
import { getCvs } from "../api/cv";
const ContactPage = () => {

    const [ cv, setCv] = useState([]);
    useEffect(() => {
        getCvs().then(({ data}) => setCv(data))
                .catch(() => console.log("list link cv thất bại"))
    }, [])

    useEffect(() => {
        const Name = document.getElementById('name');
        const Email = document.getElementById('email');
        const Textarea = document.getElementById('textarea');
        const formAdd = document.getElementById('form-add');

        formAdd.addEventListener("submit", (e) => {
            e.preventDefault();

            const newContact = {
                name: Name.value,
                email: Email.value,
                textarea: Textarea.value,
            }
            postContact(newContact).then(() => alert("gửi thành công"))
                                    .catch(() => alert("Gửi thất bại"))
        })

        
    });
    return /*html*/ `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
        <link rel="stylesheet" href="./brandy/css/contact.css">
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
                    <span><a target="_blank" href="${item.link}"><> My resume <></a></span>
                `).join("")}
                <img src="./images/shape.png" alt="">
            </div>
            <div class="contact">
                <div class="form-contact">
                    <div class="text-contact">
                        <h2>Contact</h2>
                        <img src="./images/shape.png" alt="">
                    </div>
                    <div class="container">
                        <form id="form-add" class="form-add">
                            <div class="form-left">
                                <label for="fname"> Name</label>
                                <input type="text" id="name" class="input" name="firstname" placeholder=" &ensp;Your name.." ><br>
                            
                                <label for="lname">Email</label>
                                <input type="email" id="email" class="input" name="lastname" placeholder=" &ensp;Your Email..">
                            </div>
                          
                            <div class="form-right">
                                <textarea id="textarea" name="subject" class="textarea" placeholder=" &ensp;Write something.." style="height:50px"></textarea>
        
                                <button value="Submit" class="submit">submit</button>
                            </div>
                        </form>
                      </div>
                </div>
                <div class="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.2859105236457!2d105.80402051532151!3d21.02124304123087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab67b4b3859d%3A0x7cf6f4c87bd7d484!2zNjIgxJAuIE5ndXnhu4VuIENow60gVGhhbmgsIEzDoW5nIFRoxrDhu6NuZywgxJDhu5FuZyDEkGEsIEjDoCBO4buZaSwgVmnhu4d0IE5hbQ!5e0!3m2!1svi!2s!4v1676568932315!5m2!1svi!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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

export default ContactPage;