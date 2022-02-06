import React from "react";
import { Todo as TodoType, TodoState } from "./todo-slice";
import styles from "./Todo.module.css";

const Todo = (props: { onToggle: (index: number) => {}; todo: TodoType }) => {
  return (
    <div
      className={
        props.todo.state === TodoState.Active
          ? styles.todo
          : styles.completedTodo
      }
      onClick={() => props.onToggle(props.todo.index)}
    >
      {props.todo.name}
    </div>
  );
};

export default Todo;
