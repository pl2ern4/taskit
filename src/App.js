import React from 'react';
import DragAndDrop from './components/drag_and_drop/DragAndDrop';
import Profiles from './components/profiles/Profiles';

import {reducer} from './reducer';
import './App.css';

function App() {
  const tasks = [
    {description: "create a task", subject:"tasking nklnkln ndnkl nkl nlkllr", assignee:"Wca hgfh", category:'todo', importance:"yellow"},
    {description: "create a task", subject:"tasking", assignee:"Tnsajnk bjvbk", category:'todo', importance:"yellow"},
    {description: "create a task",subject:"tasking", assignee:"Zee eee", category:'working', importance:"red"},
    {description: "create a task", subject:"tasking", assignee:"Zinat erfj", category:'done', importance:"pink"},
  ]
  const team = ["Tnsajnk bjvbk",
  "Zinat erfj",
  "Wca hgfh",
  "Zee eee"]

  const [data, dispatch] = React.useReducer(
    reducer, { tasks, team }
  )

  const handleSubmit = params => {
    debugger;
    dispatch({type:'ADD_MEMBER',teamName: params.name});
  }

  return (
    <>
      <Profiles dispatch={dispatch} team={data.team} handleSubmit={handleSubmit}/>
      <DragAndDrop dispatch={dispatch} team={data.team} tasks={data.tasks}/>
    </>
  );
}

export default App;
