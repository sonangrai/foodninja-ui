import { Image, useColorScheme } from "react-native";
import styled from "styled-components/native";
import FoodButton from "../../../common/UI/FoodButton";
import { useState } from "react";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../App";

type OnboardingProps = {
  navigation: StackNavigationProp<RootStackParamList, "Home">;
};

function Onboarding({ navigation }: OnboardingProps) {
  const colorScheme = useColorScheme();
  const [step, setStep] = useState<number>(0);

  return (
    <OnboardingView $dark={colorScheme != "light"}>
      <Image
        source={
          step == 0
            ? require("../../../assets/onboard/illustration.png")
            : require("../../../assets/onboard/illustration2.png")
        }
      />
      <Heading $dark={colorScheme != "light"}>
        {step == 0 ? `Find your Comfort \n Food here` : `Food Ninja is Where Your \n Comfort Food Lives`}
      </Heading>
      <Info $dark={colorScheme != "light"}>
        {step == 0
          ? "Here You Can find a chef or dish for every \n taste and color. Enjoy!"
          : "Enjoy a fast and smooth food delivery at \n your doorstep"}
      </Info>
      <FoodButton
        title="Next"
        onPress={() => {
          if (step == 0) {
            setStep(1);
          } else {
            navigation.navigate("SignUp");
          }
        }}
      />
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
