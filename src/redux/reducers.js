//create redux rooters for tasklist and category
function tasklist(state= [], action) {
  switch (action.type) {
    case 'ADD_TASK':
      return [
        ...state,
        action.task
      ]
    case 'REMOVE_TASK':
      return state.filter(task => task.id !== action.id)
    default:
      return state
  }
}
}

const rootReducer = combineReducers({
  tasklist: tasklist,
});
