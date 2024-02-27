import { StackNavigationProp } from "@react-navigation/stack";
import { Image, useColorScheme } from "react-native";
import { RootStackParamList } from "../../../App";
import styled from "styled-components/native";
import Form from "./Form";

type SignUpProps = {
  navigation: StackNavigationProp<RootStackParamList, "Home">;
};

function SignUp({ navigation }: SignUpProps) {
  const colorScheme = useColorScheme();

  return (
    <SignUpView
      $dark={colorScheme != "light"}
      source={
        colorScheme != "dark" ? require("../../../assets/Pattern.png") : require("../../../assets/Pattern-dark.png")
      }
    >
      <TopPart>
        <Image source={require("../../../assets/logo.png")} />
        <Title>FoodNinja</Title>
        <Quote $dark={false}>Deliver Favorite Food</Quote>
      </TopPart>

      <Form />
    </SignUpView>
  );
}

export default SignUp;

const SignUpView = styled.ImageBackground<{ $dark: boolean }>`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ $dark }) => ($dark ? "#000" : "#fff")};
`;

const TopPart = styled.View`
  display: flex;
  align-items: center;
`;

const Title = styled.Text`
  font-size: 40px;
  font-weight: bold;
  color: #53e88b;
`;

const Quote = styled.Text<{ $dark: boolean }>`
  font-size: 13px;
  font-weight: 500;
  color: ${({ $dark }) => ($dark ? "#fff" : "#09051c")};
`;
