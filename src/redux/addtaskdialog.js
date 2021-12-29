import { createSlice} from '@reduxjs/toolkit'



const addtaskdialog = createSlice({
  name: 'addtaskdialog',
  initialState: false,
  reducers: {
    setVisible: (state) => {
      return !state
    },

  }
})

export const { setVisible } = addtaskdialog.actions
export default addtaskdialog.reducer
