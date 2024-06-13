import { useState } from "react";

export function useManageProjectState(){
    const [project, setProject] = useState({pro: 'E-commerce Platform' , description: 'Led the development of a fully-featured e-commerce platform, handling over 1 million transactions per month.'})

    function handleProjectName(e){
        const newProject = {...project , pro: e.target.value}
        setProject(newProject)
    }

    function handleProjectDescription(e){
        const newProject = {...project , description: e.target.value}
        setProject(newProject)
    }

    return {
        project, 
        handleProjectName,
        handleProjectDescription
    }


}


export function EditProject({handleProjectName, handleProjectDescription}){
    return (

    <div className="project-input common-flex">

        <div>
            <label>Project Name</label>
        <input type="text" onChange={handleProjectName} />

        </div>

        <div>

<label>Project Description</label>
        <input type="text" onChange={handleProjectDescription} />
        </div>

    </div>

    )

}

export function Project({project}){
    return (
        <div>
            <p>{project.pro}</p>
            <p>{project.description}</p>
        </div>
    )



}