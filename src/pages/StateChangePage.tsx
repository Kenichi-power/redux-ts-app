import React from "react";
import User from "../components/user/User";
import { MainDiv } from "./style";

const StateChange = () => {
  return (
    <MainDiv>
      <h1>Redux Toolkit State Change</h1>
      <User />
    </MainDiv>
  );
};

export default StateChange;
