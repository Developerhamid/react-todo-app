import React, { useState, useEffect } from "react";
import "./TodoApp.css";
import "./Responsive.css";
import TodoList from "./TodoList";
import AddCircleSharpIcon from "@mui/icons-material/AddCircleSharp";

let selector = 0;

const TodoApp = () => {
  let AllTodos = localStorage.getItem("mytodos")
    ? JSON.parse(localStorage.getItem("mytodos"))
    : [];

  const [todos, setTodos] = useState(AllTodos);
  const [task, setTask] = useState("");

  const CreateTask = () => {
    setTodos((olderTask) => {
      setTask("");
      return [...olderTask, { todo: task, id: selector++ }];
    });
  };

  const InputCreateTask = (e) => {
    if (e.keyCode === 13) {
      CreateTask();
    }
  };

  const DeleteTask = (TaskId) => {
    setTodos((olderTask) => {
      return olderTask.filter((item) => item.id !== TaskId);
    });
  };

  useEffect(() => {
    localStorage.setItem("mytodos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <main>
        <div className="main-container">
          <h1 className="heading">My Daily Goals</h1>
          <div className="todo-container">
            <div className="todo-head">
              <input
                type="text"
                id="input-text"
                placeholder="Set Goal"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                onKeyDown={InputCreateTask}
              />
              <AddCircleSharpIcon
                color="primary"
                fontSize="large"
                className="btns"
                onClick={() => CreateTask()}
              />
            </div>
            <div>
              <h2 className="body-heading">Goals List</h2>
            </div>
            <div className="todo-body">
              <TodoList todos={todos} DeleteTask={DeleteTask} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default TodoApp;
