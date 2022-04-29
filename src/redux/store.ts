import { configureStore } from '@reduxjs/toolkit'
import projectReducer from './project.reducer';

const store = configureStore({
    reducer: {
        projects: projectReducer,
    }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;