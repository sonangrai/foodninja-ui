import { Image, useColorScheme } from "react-native";
import styled from "styled-components/native";

function Splash() {
  const colorScheme = useColorScheme();

  return (
    <SplashView
      $dark={colorScheme != "light"}
      source={colorScheme == "light" ? require("../../assets/Pattern.png") : require("../../assets/Pattern-dark.png")}
    >
      <Image source={require("../../assets/logo.png")} />
      <Title>FoodNinja</Title>
      <Quote $dark={colorScheme != "light"}>Deliver Favorite Food</Quote>
    </SplashView>
  );
}

export default Splash;

const SplashView = styled.ImageBackground<{ $dark: boolean }>`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ $dark }) => ($dark ? "#000" : "transparent")};
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
