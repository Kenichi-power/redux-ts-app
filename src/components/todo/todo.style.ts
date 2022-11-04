import styled from "styled-components";

interface TextWrapperProps {
  completed: any;
}

export const FormWrapper = styled.form`
  display: flex;
`;
export const TextInput = styled.input`
  display: flex;
  width: 400px;
  padding: 0.25rem;
  align-items: center;
  background-color: rgb(99 102 241);

  &:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
    border-width: 2px;
    border-color: rgb(132 204 22);
    color: white;
  }
  &::placeholder {
    font-size: 0.875rem;
    line-height: 1.25rem;
    color: white;
  }
`;
export const HandlerButton = styled.button`
  flex-shrink: 0;
  background-color: rgb(163 230 53);

  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  font-size: 0.875rem;
  line-height: 1.25rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  color: white;
  &:hover {
    background-color: rgb(190 242 100);
  }
`;
export const TodoItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  min-width: 32%;
`;
export const CompleteButton = styled.div`
  font-size: 0.875rem;
  line-height: 1.25rem;
  padding: 0.5rem;
  cursor: pointer;
  color: white;
  background-color: rgb(163 230 53);
  &:hover {
    background-color: rgb(190 242 100);
  }
`;
export const RemoveButton = styled.div`
  display: flex;
  font-size: 0.875rem;
  line-height: 1.25rem;
  padding: 0.5rem;
  cursor: pointer;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  color: white;
  background-color: rgb(248 113 113);
  &:hover {
    background-color: rgb(239 68 68);
  }
`;
export const TextWrapper = styled.div`
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: white;
  ${({ completed }: TextWrapperProps) =>
    completed
      ? "text-decoration-line:line-through;color:rgb(163 230 53);font-weight: 700;"
      : ""};
`;
