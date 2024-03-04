import styled from "styled-components/native";
import FoodButton from "../../../common/UI/FoodButton";
import { Image, Platform, useColorScheme } from "react-native";
import { useState } from "react";
import { SignUpProps } from ".";

function Form({ navigation }: SignUpProps) {
  const [hidden, setHidden] = useState<boolean>(true);
  const colorScheme = useColorScheme();

  return (
    <SignUpForm $dark={colorScheme != "light"} behavior={Platform.OS === "ios" ? "padding" : "height"}>
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

      {/* Password  */}
      <TextInputItem $dark={colorScheme != "light"}>
        <Image source={require("../../../assets/icons/Lock.png")} />
        <Input
          $dark={colorScheme != "light"}
          placeholder="password"
          secureTextEntry={hidden}
          placeholderTextColor={"#3b3b3b"}
        />
        <EyeClick onPress={() => setHidden((hidden) => !hidden)}>
          <Eye
            $show={!hidden}
            source={
              colorScheme != "light"
                ? require("../../../assets/icons/Show-dark.png")
                : require("../../../assets/icons/Show.png")
            }
          />
        </EyeClick>
      </TextInputItem>

      <FoodButton title="Create Account" onPress={() => navigation.navigate("Home")} />

      <Link onPress={() => {}}>
        <LinkText>already have an account?</LinkText>
      </Link>
    </SignUpForm>
  );
}

export default Form;

const SignUpForm = styled.KeyboardAvoidingView<{ $dark: boolean }>`
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
  align-items: center;
  gap: 20px;
  position: relative;
`;

const Input = styled.TextInput<{ $dark: boolean }>`
  color: ${({ $dark }) => ($dark ? "#f4f4f4" : "#000")};
  width: 100%;
`;

const Eye = styled.Image<{ $show: boolean }>`
  overflow: hidden;
`;

const EyeClick = styled.TouchableOpacity`
  position: absolute;
  bottom: 60%;
  right: 10px;
`;
