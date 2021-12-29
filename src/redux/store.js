import { configureStore } from '@reduxjs/toolkit'
import tasklist from "../redux/reducers"
import addtaskdialog from "../redux/addtaskdialog";

const store = configureStore({
  devTools: true,
  reducer: {
    tasklist,
    addtaskdialog
  }
})

export default store
