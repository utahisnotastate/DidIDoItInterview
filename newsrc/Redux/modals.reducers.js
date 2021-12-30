import { createSlice } from '@reduxjs/toolkit';


const modals = createSlice({
	name: 'modals',
	initialState: {
		addTaskVisible: false,
		editTaskVisible: false,
	},
	reducers: {
		setAddTaskVisible: (state) => {
			state.addTaskVisible = !state.addTaskVisible;
		},
		setEditTaskVisible: (state) => {
			state.editTaskVisible = !state.editTaskVisible;
		},
	},
});

export const { setAddTaskVisible, setEditTaskVisible } = modals.actions;
export default modals.reducer;