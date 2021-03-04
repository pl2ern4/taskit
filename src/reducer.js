export const reducer = (state, action) => {
    switch (action.type) {
      case 'SET_DROP_DEPTH':
        return { ...state, dropDepth: action.dropDepth }
      case 'SET_IN_DROP_ZONE':
        return { ...state, inDropZone: action.inDropZone };
      case 'CREATE_TASK':
        return { ...state, tasks: state.tasks.concat(action.task) };
      case 'DELETE_TASK':
        return { ...state, tasks: state.tasks.filter(obj=>obj.subject!=action.task.subject) };
      case 'ADD_MEMBER':
        return { ...state, team: state.team.concat(action.teamName) };
      case 'DELETE_MEMBER':
          return { ...state, team: state.team.filter(obj=>obj!==action.teamName) };
      default:
        return state;
    }
}
  