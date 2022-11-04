import { setFirstName, setLastName } from "../../features/user/userSlice";
import { useAppDispatch } from "../../store/store";
import FirstName from "./FirstName";
import LastName from "./LastName";
import { NameBox, TextInput, Wrapper } from "./User.style";

const User = () => {
  const dispatch = useAppDispatch();
  return (
    <Wrapper>
      <TextInput
        type="text"
        maxLength={15}
        placeholder="First Name"
        onChange={(e) => {
          dispatch(setFirstName(e.target.value));
        }}
      />
      <TextInput
        type="text"
        maxLength={15}
        placeholder="Second Name"
        onChange={(e) => {
          dispatch(setLastName(e.target.value));
        }}
      />
      <NameBox>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h1>First Name:</h1>

          <FirstName />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h1>Last Name:</h1>
          <LastName />
        </div>
      </NameBox>
    </Wrapper>
  );
};

export default User;
