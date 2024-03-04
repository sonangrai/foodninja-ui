import { Image, useColorScheme } from "react-native";
import styled from "styled-components/native";

function SearchBar() {
  const colorScheme = useColorScheme();

  return (
    <Row>
      <InputBox $dark={colorScheme != "light"}>
        <Image
          source={
            colorScheme != "light"
              ? require("../../../assets/icons/searchIconWhite.png")
              : require("../../../assets/icons/searchIcon.png")
          }
        />
        <Input
          $dark={colorScheme != "light"}
          placeholder="What do you want to order?"
          placeholderTextColor={colorScheme != "light" ? "#fff" : "#DA6317"}
        />
      </InputBox>

      <Filter $dark={colorScheme != "light"}>
        <Image
          source={
            colorScheme != "light"
              ? require("../../../assets/icons/Filter-light.png")
              : require("../../../assets/icons/Filter.png")
          }
        />
      </Filter>
    </Row>
  );
}

export default SearchBar;

const Row = styled.View`
  flex-direction: row;
  gap: 10px;
`;

const InputBox = styled.View<{ $dark: boolean }>`
  padding: 12px 18px;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  background: ${({ $dark }) => ($dark ? "#252525" : "#fff6ed")};
  border-radius: 15px;
  width: 82%;
`;

const Input = styled.TextInput<{ $dark: boolean }>`
  color: ${({ $dark }) => ($dark ? "#fff" : "#da6317")};
`;

const Filter = styled.View<{ $dark: boolean }>`
  padding: 14px;
  background: ${({ $dark }) => ($dark ? "#252525" : "#fff6ed")};
  border-radius: 15px;
`;
