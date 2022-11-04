import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const TextInput = styled.input`
  width: 400px;
  padding: 0.25rem;
  margin-bottom: 0.5rem;
  &:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
    border-width: 2px;
    border-color: rgb(132 204 22);
  }
  &::placeholder {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }
`;
export const NameBox = styled.div`
  display: flex;
  gap: 5rem;
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
`;
export const NameField = styled.div`
  font-weight: 700;
  color: white;
`;
