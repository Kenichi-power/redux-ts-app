import { useAppSelector } from "../../store/store";
import { NameField } from "./User.style";

const FirstName = () => {
  const name = useAppSelector((state) => state.user.firstName);
  return <NameField>{name}</NameField>;
};

export default FirstName;
