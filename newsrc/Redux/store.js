import { configureStore } from '@reduxjs/toolkit';
import tasks from './taskslist.reducers';
import modals from './modals.reducers';

const store = configureStore({
	devTools: true,
	reducer: {
		tasks,
		modals,
	},
});

export default store;