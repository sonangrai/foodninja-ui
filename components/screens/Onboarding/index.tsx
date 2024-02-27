import { Image } from "react-native";
import styled from "styled-components/native";

function Onboarding() {
  return (
    <OnboardingView>
      <Image source={require("../../../assets/onboard/Illustartion.png")} />
      <Heading>Find your Comfort {"\n"} Food here</Heading>
      <Info>Here You Can find a chef or dish for every {"\n"} taste and color. Enjoy!</Info>
    </OnboardingView>
  );
}

export default Onboarding;

const OnboardingView = styled.View`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #fff;
`;

const Heading = styled.Text`
  font-size: 22;
  line-height: 40px;
  color: #09051c;
  text-align: center;
  font-weight: bold;
`;

const Info = styled.Text`
  font-size: 12px;
  text-align: center;
  line-height: 24px;
  margin-top: 20px;
`;
