import React from "react";
import { useAppSelector } from "../../store/store";
import { NameField } from "./User.style";

const LastName = () => {
  const lastName = useAppSelector((state) => state.user.lastName);

  return <NameField>{lastName}</NameField>;
};

export default LastName;
