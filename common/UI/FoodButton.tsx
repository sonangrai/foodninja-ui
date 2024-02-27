import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

interface IButtonProps {
  title: string;
  onPress: () => void;
}

function FoodButton({ title, onPress }: IButtonProps) {
  return (
    <CustomButton onPress={onPress}>
      <ButtonWrap colors={["#53E88B", "#15BE77"]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }}>
        <ButtonText>{title}</ButtonText>
      </ButtonWrap>
    </CustomButton>
  );
}

export default FoodButton;

const ButtonWrap = styled(LinearGradient)`
  padding: 18px 60px;
  border-radius: 15px;
`;

const CustomButton = styled.TouchableOpacity`
  font-size: 16px;
`;

const ButtonText = styled.Text`
  color: white;
  font-size: 16px;
  text-align: center;
  font-weight: bold;
`;
