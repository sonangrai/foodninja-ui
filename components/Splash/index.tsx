import { Image } from "react-native";
import styled from "styled-components/native";

function Splash() {
  return (
    <SplashView source={require("../../assets/Pattern.png")}>
      <Image source={require("../../assets/logo.png")} />
      <Title>FoodNinja</Title>
      <Quote>Deliver Favorite Food</Quote>
    </SplashView>
  );
}

export default Splash;

const SplashView = styled.ImageBackground`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Title = styled.Text`
  font-size: 40px;
  font-weight: bold;
  color: #53e88b;
`;

const Quote = styled.Text`
  font-size: 13px;
  font-weight: 500;
  color: #09051c;
`;
