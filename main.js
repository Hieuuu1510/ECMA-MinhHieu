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
import adminContactPage from "./src/pages/admin/Contact";


const app = document.getElementById('app');

router.on("/", () => render(HomePage,app));
router.on("/about",() => render(AboutPage,app));
router.on("/contact",() => render(ContactPage,app));
router.on("/post/:postId",() => render(PostDetailPage, app));
router.on("/post",() => render(PostsPage,app));
router.on("/project",() => render(ProjectsPage,app));
router.on("/project/:projectId",(params) => render(() => ProjectDetailPage(params),app));



router.on("/admin/projects/", () => render(AdminProjectsPage,app));
router.on("/admin/projects/add", () => render(AdminProjectAddPage,app));
router.on("/admin/projects/:projectsId/edit", ({ data}) => render(() => AdminProjectEdit(data), app));

router.on("/admin/contact/", () => render(adminContactPage,app));


router.notFound(() => render(NotFoundPage, app));
router.resolve();
