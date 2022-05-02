import React, { useState, useEffect
} from "react";
import { useDispatch } from "react-redux";
// import ReactDOM from "react-dom"
import store from "../redux/store";
import { RootState } from "../redux/store";
import projectReducer from "../redux/project.reducer";

const ProjectList = () => {
const [newId, setNewId] = useState('');
const [newProjectName, setNewProjectName]  = useState('')
const [newIsActive, setNewIsActive] = useState('true');   
const [inactive, toggleInactive] = useState(false)

const dispatch = useDispatch()

const newProject = {
        id: newId,
        projectName: newProjectName,
        isActive: JSON.parse(newIsActive)
    }
   const projects = [
        {
            id: '1',
            projectName: 'Demo Project',
            isActive: true,
        },
    ]
    const reduxProjects = store.getState().projects.projects
    useEffect(() => {},)
console.log('projectReducerff:', reduxProjects[0].id)
    return (
        <>
        STORE: {JSON.stringify(store.getState())}
        {/* ROOTSTATE: {JSON.stringify(RootState)} */}
            <h2>Function Compoent with Hooks and Redux</h2>
            <div style={{ padding: 20 }}>
                    ID: <input value={newId} onChange={(e) => setNewId( e.target.value)} />
                    <br />
                    Name: <input value={newProjectName} onChange={(e) => setNewProjectName( e.target.value)} />
                    <br />
                    Active:
                    <select name="active" id="active" value={newIsActive} onChange={(e) => setNewIsActive( e.target.value)}>
                        <option value='true'>Yes</option>
                        <option value='false'>No</option>
                    </select>
                    <button onClick={() => {
                        console.log('newProject:', newProject)
                     dispatch({type: "ADD_PROJECT", payload: newProject})
                     
                     
                        projects.push(newProject)
                        console.log('projects:', projects)
                    setNewId('')
                    setNewProjectName('')
                    setNewIsActive("true")
                    
                    }}>
                        Submit
                    </button>
                    <button onClick={(e) =>
                        dispatch(
                            {type: "CLEAR_LIST"}
                            )
                        }>CLEAR LIST</button>
                </div>
{/* {console.log('iiiii')} */}
                
                   { reduxProjects.length < 1 ? null :
                       reduxProjects.map((project) => 
// console.log('jhjh')
  !project.isActive === true ? null :                       
                        <div style={{borderStyle: 'solid', margin: 10 }}>
                           
                           <label>
                               inactive?
                            <input type='checkbox' value='true'
                            onChange={e => toggleInactive(!inactive)}
                            
                            ></input>
                            </label>
                            <p>ID: {project.id}</p> 
                            <p>Name: {project.projectName}</p> 
                      
                        </div>
                        
                        
                        )
    
                   }
                             
        </>
    );
}

export default ProjectList;