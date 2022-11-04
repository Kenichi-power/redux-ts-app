import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { removeTodo, toggleCompetedTodo } from "../../features/todo/todoSlice";
import {
  CompleteButton,
  RemoveButton,
  TextWrapper,
  TodoItemWrapper,
} from "./todo.style";

interface TodoItemProps {
  todo?: any;
  id?: any;
}

const TodoItem: FC<TodoItemProps> = ({ todo }) => {
  const dispatch = useDispatch();
  const toggleTodoHandler = (id: TodoItemProps) => {
    dispatch(toggleCompetedTodo(id));
  };
  const removeTodoHandler = (id: TodoItemProps) => {
    dispatch(removeTodo(id));
  };
  return (
    <TodoItemWrapper>
      <CompleteButton
        onClick={() => toggleTodoHandler(todo.id)}
        className="text-sm px-4 py-2 cursor-pointer bg-lime-300 hover:bg-lime-400">
        Complete
      </CompleteButton>
      <TextWrapper
        completed={todo.completed}
        className={`text-sm ${
          todo.completed ? "line-through font-medium text-lime-400" : ""
        }`}>
        {todo.text}
      </TextWrapper>
      <RemoveButton onClick={() => removeTodoHandler(todo.id)}>
        Delete
      </RemoveButton>
    </TodoItemWrapper>
  );
};

export default TodoItem;
