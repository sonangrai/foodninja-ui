import { Image } from "react-native";
import styled from "styled-components/native";

function SearchBar() {
  return (
    <Row>
      <InputBox>
        <Image source={require("../../../assets/icons/searchIcon.png")} />
        <Input placeholder="What do you want to order?" placeholderTextColor={"#DA6317"} />
      </InputBox>

      <Filter>
        <Image source={require("../../../assets/icons/Filter.png")} />
      </Filter>
    </Row>
  );
}

export default SearchBar;

const Row = styled.View`
  flex-direction: row;
  gap: 10px;
`;

const InputBox = styled.View`
  padding: 12px 18px;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  background: #fff6ed;
  border-radius: 15px;
  width: 82%;
`;

const Input = styled.TextInput`
  color: #da6317;
`;

const Filter = styled.View`
  padding: 14px;
  background: #fff6ed;
  border-radius: 15px;
`;
