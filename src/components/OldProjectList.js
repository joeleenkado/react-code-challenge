import { Component } from 'react';

class OldProjectList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newProject: {
                id: '',
                projectName: '',
                isActive: true,
            },
            projects: [
                {
                    id: '1',
                    projectName: 'Demo Project',
                    isActive: true,
                }
            ],
        };
    }

    render() {
        const { projects, newProject } = this.state;
        return (
            <>
                <h2>Class Component</h2>
                <div style={{ padding: 20 }}>
                    ID: <input value={newProject.id} onChange={(e) => this.setState({ newProject: {...newProject, id: e.target.value }})} />
                    <br />
                    Name: <input value={newProject.projectName} onChange={(e) => this.setState({ newProject: { ...newProject, projectName: e.target.value } })} />
                    <br />
                    Active:
                    <select name="active" id="active" value={newProject.isActive} onChange={(e) => this.setState({ newProject: { ...newProject, isActive: e.target.value } })}>
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                    <button onClick={() => this.setState({
                        projects: [
                            ...projects,
                            newProject
                        ],
                        newProject: {
                            id: '',
                            projectName: '',
                            isActive: true,
                        }
                    })}>
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
}

export default OldProjectList;