// import './style.css'
// import javascriptLogo from './javascript.svg'
// import { setupCounter } from './counter.js'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import { render, router } from "./src/lib";
import AboutPage from "./src/pages/about";
import AdminProjectsPage from "././src/pages/admin/Project";
import AdminProjectAddPage from "././src/pages/admin/Project-add";
import AdminProjectEdit from "././src/pages/admin/Project-edit";
import ContactPage from "./src/pages/contact";
import HomePage from "./src/pages/home";
import NotFoundPage from "./src/pages/not-found";
import PostDetailPage from "./src/pages/post-detail";
import PostsPage from "./src/pages/posts";
import ProjectDetailPage from "./src/pages/project-detail";
import ProjectsPage from "./src/pages/projects";

// import contact
import adminContactPage from "./src/pages/admin/Contact";

// import admin
import signupPage from "./src/pages/admin/signupPage";
import loginn from "./src/pages/admin/login";


// import linkCv
import linkCvAdd from "./src/pages/admin/linkCvAdd";
import listCv from "./src/pages/admin/listCv";
import AdmineditCv from "./src/pages/admin/editCv";

// import proFile
import addProFile from "./src/pages/admin/addProFile";
import listProFile from "./src/pages/admin/listProFile";
import editProfile from "./src/pages/admin/editProfile";

const app = document.getElementById('app');

router.on("/", () => render(HomePage,app));
router.on("/about",() => render(AboutPage,app));
router.on("/contact",() => render(ContactPage,app));
router.on("/post/:postId",() => render(PostDetailPage, app));
router.on("/post",() => render(PostsPage,app));
router.on("/project",() => render(ProjectsPage,app));
router.on("/project/:projectId",({ data}) => render(() => ProjectDetailPage(data),app));


// quản lí dự án
router.on("/admin/projects/", () => render(AdminProjectsPage,app));
router.on("/admin/projects/add", () => render(AdminProjectAddPage,app));
router.on("/admin/projects/:projectsId/edit", ({ data}) => render(() => AdminProjectEdit(data), app));


// quản lí phản hồi
router.on("/admin/contact/", () => render(adminContactPage,app));


// quản lí admin
router.on("/admin/login/", () => render(loginn, app))
router.on("/admin/signup/", () => render(signupPage, app));


// quản lí proFile
router.on("/admin/profile/add", () => render(addProFile, app));
router.on("/admin/profile", () => render(listProFile, app));
router.on("/admin/profile/:profileId/edit", ({ data}) => render(() => editProfile(data), app))

// quản lí linkCv
router.on("/admin/cv/add", () => render(linkCvAdd, app));
router.on("/admin/cv", () => render(listCv, app));
router.on("/admin/cv/:cvId/edit", ({ data}) =>  render(() => AdmineditCv(data), app));


router.notFound(() => render(NotFoundPage, app));
router.resolve();
