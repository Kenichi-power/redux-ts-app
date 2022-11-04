import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledDivLink = styled.span`
  display: flex;
  justify-content: space-between;
  width: 300px;
`;
export const NavigateBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  background-color: rgb(163 230 53);
  text-decoration-line: none;
  h3 {
    color: white;
    font-weight: 700;
  }
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: 500;
  &:hover {
    color: rgb(99 102 241);
  }
`;
