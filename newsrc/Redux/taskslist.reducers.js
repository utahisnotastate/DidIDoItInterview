import { createSlice } from '@reduxjs/toolkit';

const data = [
	{ id: 1, title: 'Task 12', note: 'This is an extra note', time: '1/12/2022' },
	{ id: 2, title: 'Task 22', note: 'This is an extra note', time: '1/12/2022' },
	{ id: 3, title: 'Task 3', note: 'This is an extra note', time: '1/12/2022' },
	{ id: 4, title: 'Task 42', note: 'This is an extra note', time: '1/12/2022' },
	{ id: 5, title: 'Task 52', note: 'This is an extra note', time: '1/12/2022' },
	{ id: 6, title: 'Task 62', note: 'This is an extra note', time: '1/12/2022' },
	{ id: 7, title: 'Task 72', note: 'This is an extra note', time: '1/12/2022' },

];

const tasks = createSlice({
	name: 'tasks',
	initialState: data,
	reducers: {
		addTask: (state, action) => {
			state.push(action.task);
		},
	},
});

export const { addTask } = tasks.actions;
export default tasks.reducer;