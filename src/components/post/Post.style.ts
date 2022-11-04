import styled from "styled-components";

export const PostButton = styled.button`
  background-color: rgb(163 230 53);
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  padding: 0.5rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: white;
  &:hover {
    background-color: rgb(190 242 100);
  }
`;

export const PostItemWrapper = styled.div`
  display: flex;
  width: 100%;
  background-color: rgb(99 102 241);
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  color: rgb(255 255 255);
  border-radius: 0.125rem;
  margin-top: 1rem;

  cursor: pointer;
  &:hover {
    background-color: rgb(165 180 252);
  }
`;

export const PostMainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
