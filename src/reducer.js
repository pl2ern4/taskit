export const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_DROP_DEPTH':
      return { ...state, dropDepth: action.dropDepth }
    case 'SET_IN_DROP_ZONE':
      return { ...state, inDropZone: action.inDropZone };
    case 'CREATE_TASK':
      return {
        ...state,
        tasks: state.tasks.concat({
          ...action.task,
          id: (new Date()).getTime()
        })
      };
    case 'DELETE_TASK':
      if (!action.taskId) {
        return { ...state };
      }
      return { ...state, tasks: state.tasks.filter(obj => obj.id !== action.taskId) };
    case 'ADD_MEMBER':
      return { ...state, team: state.team.concat(action.teamName) };
    case 'DELETE_MEMBER':
      return {
        ...state,
        tasks: state.tasks.filter(obj => obj.assignee !== action.teamName),
        team: state.team.filter(obj => obj !== action.teamName)
      };
    default:
      return state;
  }
}
