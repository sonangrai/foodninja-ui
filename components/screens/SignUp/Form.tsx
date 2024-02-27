import styled from "styled-components/native";
import FoodButton from "../../../common/UI/FoodButton";
import { Image, useColorScheme } from "react-native";

function Form() {
  const colorScheme = useColorScheme();

  return (
    <SignUpForm $dark={colorScheme != "light"}>
      <FormTitle $dark={colorScheme != "light"}>Sign Up for Free</FormTitle>

      {/* User Name  */}
      <TextInputItem $dark={colorScheme != "light"}>
        <Image source={require("../../../assets/icons/Profile.png")} />
        <Input $dark={colorScheme != "light"} placeholder="Sonang..." placeholderTextColor={"#3b3b3b"} />
      </TextInputItem>

      {/* Password  */}
      <TextInputItem $dark={colorScheme != "light"}>
        <Image source={require("../../../assets/icons/Message.png")} />
        <Input $dark={colorScheme != "light"} placeholder="something@gmail.com" placeholderTextColor={"#3b3b3b"} />
      </TextInputItem>

      {/* User Name  */}
      <TextInputItem $dark={colorScheme != "light"}>
        <Image source={require("../../../assets/icons/Lock.png")} />
        <Input $dark={colorScheme != "light"} placeholder="password" secureTextEntry placeholderTextColor={"#3b3b3b"} />
      </TextInputItem>

      <FoodButton title="Create Account" onPress={() => {}} />

      <Link onPress={() => {}}>
        <LinkText>already have an account?</LinkText>
      </Link>
    </SignUpForm>
  );
}

export default Form;

const SignUpForm = styled.View<{ $dark: boolean }>`
  width: 80%;
`;

const FormTitle = styled.Text<{ $dark: boolean }>`
  font-weight: bold;
  text-align: center;
  font-size: 20px;
  margin: 85px 0 40px 0;
  color: ${({ $dark }) => ($dark ? "#fff" : "#000")};
`;

const Link = styled.TouchableOpacity`
  margin-top: 20px;
`;

const LinkText = styled.Text`
  text-align: center;
  font-size: 12px;
  color: green;
`;

const TextInputItem = styled.View<{ $dark: boolean }>`
  background: ${({ $dark }) => ($dark ? "rgba(90, 108, 234, 0.07)" : "#fff")};
  border: 1px solid ${({ $dark }) => ($dark ? "rgba(90, 108, 234, 0.07)" : "#f4f4f4")};
  box-shadow: 12px 26px 50px rgba(90, 108, 234, 0.07);
  border-radius: 15px;
  padding: 16px;
  margin-bottom: 12px;
  display: flex;
  flex-direction: row;
  gap: 20px;
  position: relative;
`;

const Input = styled.TextInput<{ $dark: boolean }>`
  color: ${({ $dark }) => ($dark ? "#f4f4f4" : "#000")};
`;