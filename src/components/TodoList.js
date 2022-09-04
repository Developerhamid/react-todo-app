import React from "react";
import "./TodoList.css";
import DeleteSharpIcon from "@mui/icons-material/DeleteSharp";

const TodoList = ({ todos, DeleteTask }) => {
  return (
    <>
      {todos.map((item) => {
        let { todo, id } = item;
        return (
          <div className="task-box" key={id}>
            <p id="taskData">{todo}</p>
            <div className="task-btns">
              <DeleteSharpIcon
                fontSize="large"
                color="error"
                id="deleteBtn"
                className="btns"
                onClick={() => DeleteTask(id)}
              />
            </div>
          </div>
        );
      })}
    </>
  );
};

export default TodoList;
