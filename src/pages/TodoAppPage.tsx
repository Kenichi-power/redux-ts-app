import React from "react";

import Form from "../components/todo/Form";
import TodoItem from "../components/todo/TodoItem";
import { useAppSelector } from "../store/store";
import { MainDiv } from "./style";

const TodoAppPage = () => {
  const todos = useAppSelector((state) => state.todo.todos);

  return (
    <MainDiv>
      <h1>Redux Toolkit Todo App</h1>
      <Form />

      {todos?.map((todo: { id: number }) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </MainDiv>
  );
};

export default TodoAppPage;
