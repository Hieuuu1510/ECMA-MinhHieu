import ProjectItem from "./ProjectItem";

const ProjectList = ({ projects }) => {
    return `<div>
    
    ${projects.map((project) => {
            return `${ProjectItem({ project})}`;
        })
        .join("")}
    </div>`;
};

export default ProjectList;