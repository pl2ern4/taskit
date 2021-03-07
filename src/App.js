import React from 'react';
import DragAndDrop from './components/drag_and_drop/DragAndDrop';
import Profiles from './components/profiles/Profiles';

import { reducer } from './reducer';
import './App.css';

function App() {
  const tasks = [
    { id:1, description: "create a task", subject: "tasking nklnkln ndnkl nkl nlkllr", assignee: "Wca hgfh", category: 'todo', importance: "yellow" },
    { id:2, description: "create a task", subject: "tasking", assignee: "Tnsajnk bjvbk", category: 'todo', importance: "yellow" },
    { id:3, description: "create a task", subject: "tasking", assignee: "Zee eee", category: 'working', importance: "red" },
    { id:4, description: "create a task", subject: "tasking", assignee: "Zinat erfj", category: 'done', importance: "pink" },
  ]
  const team = ["Tnsajnk bjvbk",
    "Zinat erfj",
    "Wca hgfh",
    "Zee eee"]

  const [data, dispatch] = React.useReducer(
    reducer, { tasks, team }
  )

  const handleSubmit = params => dispatch({ type: 'ADD_MEMBER', teamName: params.name });

  const deleteUser = params => dispatch({ type: 'DELETE_MEMBER', teamName: params });

  return (
    <>
      <Profiles deleteUser={deleteUser} team={data.team} handleSubmit={handleSubmit} />
      <DragAndDrop dispatch={dispatch} team={data.team} tasks={data.tasks} />
    </>
  );
}

export default App;
