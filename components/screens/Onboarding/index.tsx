import { Image } from "react-native";
import styled from "styled-components/native";
import FoodButton from "../../../common/UI/FoodButton";

function Onboarding() {
  return (
    <OnboardingView>
      <Image source={require("../../../assets/onboard/illustration.png")} />
      <Heading>Find your Comfort {"\n"} Food here</Heading>
      <Info>Here You Can find a chef or dish for every {"\n"} taste and color. Enjoy!</Info>
      <FoodButton title="Next" onPress={() => {}} />
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
  font-size: 22px;
  line-height: 36px;
  color: #09051c;
  text-align: center;
  font-weight: bold;
`;

const Info = styled.Text`
  font-size: 12px;
  text-align: center;
  line-height: 24px;
  margin-top: 20px;
  margin-bottom: 40px;
`;
