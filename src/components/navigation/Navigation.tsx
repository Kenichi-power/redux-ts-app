import React from "react";

import { NavigateBar, StyledDivLink, StyledLink } from "./Navigation.style";

const Navigation = () => {
  return (
    <NavigateBar>
      <h3>All features</h3>
      <StyledDivLink>
        <StyledLink to="/">State Change</StyledLink>
        <StyledLink to="/todoAppPage">Todo list</StyledLink>
        <StyledLink to="/asyncThunkPage">Async Thunk</StyledLink>
      </StyledDivLink>
    </NavigateBar>
  );
};

export default Navigation;
