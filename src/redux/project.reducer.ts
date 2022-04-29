import { Project } from '../types/Project.type';

interface ProjectState {
    projects: Project[]
};

const sampleProject: Project = {
    id: '1',
    projectName: 'Demo Project',
    isActive: true,
};

const initialState: ProjectState = {
    projects: [
        sampleProject,
    ],
};

enum ProjectActionType {
    ADD_PROJECT = 'ADD_PROJECT',
};

interface ProjectAction {
    type: String,
    payload: Project,
};

const projectReducer = (state: ProjectState = initialState, action: ProjectAction) => {
    switch (action.type) {
        case ProjectActionType.ADD_PROJECT:
            const project = Object.assign({}, (action as ProjectAction).payload);
            return { ...state, projects: [...state.projects, project] };
        default:
            return state;
    }
};

export default projectReducer;