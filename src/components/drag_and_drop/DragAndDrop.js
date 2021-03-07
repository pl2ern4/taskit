import React from "react";
import { DragAndDropStyles, DeleteTask, TaskContainer, TaskCategory, Task, TaskContent, TaskDetail, Profile } from './DragAndDropStyles';
import CreateTask from '../create_task/CreateTask';
import { getName } from '../../utility';

const DragAndDrop = ({ tasks = [], dispatch, team }) => {
  const newtasks = { 'working': [], 'done': [], 'todo': [] };

  const onDragStart = (ev, id) => ev.dataTransfer.setData("id", id);

  const onDragOver = ev => ev.preventDefault();

  const deleteTask = params => dispatch({ type: 'DELETE_TASK', taskId: params });

  const handleSubmit = params => dispatch({ type: 'CREATE_TASK', task: params });

  const onDrop = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");

    let newTasks = tasks.filter(task => {
      if (task.name == id) {
        task.category = cat;
      }
      return task;
    });

    dispatch({ type: 'CREATE_TASK', task: [...newTasks] })
  };
  tasks.forEach(t => {
    newtasks[t.category].push(
      <Task
        key={`task_${t.id}`}
        onDragStart={e => onDragStart(e, t.name)}
        draggable
        importance={`${t.importance}`}
      >
        <DeleteTask onClick={() => deleteTask(t.id)}>x</DeleteTask>
        <TaskDetail>{t.subject}</TaskDetail>
        <Profile>
          {getName(t.assignee)}
        </Profile>
      </Task>
    );
  });

  return (
    <DragAndDropStyles>
      <TaskContainer>
        <TaskCategory
          onDragOver={e => onDragOver(e)}
          onDrop={e => {
            onDrop(e, "todo");
          }}
        >
          <TaskContent>To Do</TaskContent>
          {newtasks.todo}
        </TaskCategory>
        <TaskCategory
          onDragOver={e => onDragOver(e)}
          onDrop={e => {
            onDrop(e, "working");
          }}
        >
          <TaskContent>Working...</TaskContent>
          {newtasks.working}
        </TaskCategory>
        <TaskCategory
          onDragOver={e => onDragOver(e)}
          onDrop={e => onDrop(e, "done")}
        >
          <TaskContent>Done</TaskContent>
          {newtasks.done}
        </TaskCategory>
      </TaskContainer>
      <CreateTask team={team} handleSubmit={handleSubmit} />
    </DragAndDropStyles>
  );
}

export default DragAndDrop;