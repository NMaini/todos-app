import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import Todo from "./Todo";
import {
  todos as todosSelector,
  addTodo,
  removeTodo,
  toggleTodo,
  Todo as TodoType,
  TodoState,
} from "./todo-slice";

const Todos = () => {
  const todos = useAppSelector(todosSelector);
  const dispatch = useAppDispatch();

  const [todoName, setTodoName] = useState("");

  const onAddTodo = () => {
    let todo: TodoType = {
      name: todoName,
      index: todos.length,
      state: TodoState.Active,
    };

    dispatch(addTodo(todo));
  };

  const onRemoveTodo = () => {};

  const onToggleTodo = (index: number) => dispatch(toggleTodo(index));

  return (
    <div>
      <div className="todos">
        {todos.map((todo) => (
          <Todo
            key={todo.index}
            onToggle={onToggleTodo}
            todo={{
              name: todo.name,
              index: todo.index,
              state: TodoState.Active,
            }}
          ></Todo>
        ))}
      </div>
      <input
        type="text"
        value={todoName}
        onChange={(e) => setTodoName(e.target.value)}
      />
      <button onClick={onAddTodo}>Add Todo</button>
    </div>
  );
};

export default Todos;
