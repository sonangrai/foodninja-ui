import { Image, useColorScheme } from "react-native";
import styled from "styled-components/native";
import FoodButton from "../../../common/UI/FoodButton";

function Onboarding() {
  const colorScheme = useColorScheme();

  return (
    <OnboardingView $dark={colorScheme != "light"}>
      <Image source={require("../../../assets/onboard/illustration.png")} />
      <Heading $dark={colorScheme != "light"}>Find your Comfort {"\n"} Food here</Heading>
      <Info $dark={colorScheme != "light"}>
        Here You Can find a chef or dish for every {"\n"} taste and color. Enjoy!
      </Info>
      <FoodButton title="Next" onPress={() => {}} />
    </OnboardingView>
  );
}

export default Onboarding;

const OnboardingView = styled.View<{ $dark: boolean }>`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ $dark }) => ($dark ? "#000" : "#fff")};
`;

const Heading = styled.Text<{ $dark: boolean }>`
  font-size: 22px;
  line-height: 36px;
  text-align: center;
  font-weight: bold;
  color: ${({ $dark }) => ($dark ? "#fff" : "#09051c")};
`;

const Info = styled.Text<{ $dark: boolean }>`
  font-size: 12px;
  text-align: center;
  line-height: 24px;
  margin-top: 20px;
  margin-bottom: 40px;
  color: ${({ $dark }) => ($dark ? "#fff" : "#000")};
`;
