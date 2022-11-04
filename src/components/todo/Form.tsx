import React, { useState } from "react";

import { v4 } from "uuid";
import { addTodo } from "../../features/todo/todoSlice";
import { useAppDispatch } from "../../store/store";
import { FormWrapper, HandlerButton, TextInput } from "./todo.style";

const Form = () => {
  const dispatch = useAppDispatch();
  const [todoValue, setTodoValue] = useState("");

  const addTodoHandler = () => {
    const todo: { id: any; text: string; completed: boolean } = {
      id: v4(),
      text: todoValue,
      completed: false,
    };
    dispatch(addTodo(todo));
    setTodoValue("");
  };
  return (
    <FormWrapper onSubmit={(e) => e.preventDefault()}>
      <TextInput
        type="text"
        value={todoValue}
        placeholder="Type something..."
        onChange={(e) => setTodoValue(e.target.value)}
      />
      <HandlerButton
        type="submit"
        className="shrink-0 bg-lime-300  hover:bg-lime-400 transition-all px-3 text-sm"
        onClick={() => addTodoHandler()}
        disabled={todoValue.length < 1}>
        Submit
      </HandlerButton>
    </FormWrapper>
  );
};

export default Form;
