import { createSlice} from '@reduxjs/toolkit'

const data = [
    {key: 1, category: 'Work2', title: 'Task 12', note: "This is an extra note", time: "1/12/2022"},
    {key: 2, category: 'Work2', title: 'Task 22', note: "This is an extra note", time: "1/12/2022"},
    {key: 3, category: 'Work2', title: 'Task 3', note: "This is an extra note", time: "1/12/2022"},
    {key: 4, category: 'Work2', title: 'Task 42', note: "This is an extra note", time: "1/12/2022"},
    {key: 5, category: 'Work2', title: 'Task 52', note: "This is an extra note", time: "1/12/2022"},
    {key: 6, category: 'Work2', title: 'Task 62', note: "This is an extra note", time: "1/12/2022"},
    {key: 7, category: 'Work2', title: 'Task 72', note: "This is an extra note", time: "1/12/2022"},

]

const tasklist = createSlice({
    name: 'tasklist',
    initialState: data,
    reducers: {
        addTask: (state, action) => {
            state.push(action.task)
        },
        removeTask: (state, action) => {
            state.splice(action.task, 1)
        },

    }
})

export const { addTask, removeTask } = tasklist.actions
export default tasklist.reducer
