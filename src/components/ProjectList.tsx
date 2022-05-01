import { useState, useEffect } from "react";

const ProjectList = () => {
const [newId, setNewId] = useState('');
const [newProjectName, setNewProjectName]  = useState('')
const [newIsActive, setNewIsActive] = useState(true);   

const newProject = {
        id: newId,
        projectName: newProjectName,
        isActive: newIsActive,
    },
    projects = [
        {
            id: '1',
            projectName: 'Demo Project',
            isActive: true,
        }
    ]

    return (
        <>
            <h2>Function Compoent with Hooks and Redux</h2>
            <div style={{ padding: 20 }}>
                    ID: <input value={newId} onChange={(e) => setNewId( e.target.value)} />
                    <br />
                    Name: <input value={newProjectName} onChange={(e) => setNewProjectName( e.target.value)} />
                    <br />
                    Active:
                    <select name="active" id="active" value={newIsActive} onChange={(e) => setNewIsActive( e.target.value)}>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                    <button onClick={() => {
                        projects.push(newProject)
                    setNewId('')
                    setNewProjectName('')
                    setNewIsActive(true)

                    
                    }}>
                        Submit
                    </button>
                </div>

                {
                    projects.map(project => (
                        <div style={{borderStyle: 'solid', margin: 10 }}>
                            <p>ID: {project.id}</p>
                            <p>Name: {project.projectName}</p>
                        </div>
                    ))
                }     
        </>
    );
}

export default ProjectList;