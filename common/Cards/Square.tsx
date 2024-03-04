import { Image } from "react-native";
import styled from "styled-components/native";

interface IProps {
  img: any;
  name: string;
  distance: string;
}

function Square(props: IProps) {
  return (
    <SquareCard>
      <Image
        source={props.img}
        style={{
          height: 80,
          width: 80,
          objectFit: "contain",
        }}
      />
      <Name>{props.name}</Name>
      <Distance>{props.distance}</Distance>
    </SquareCard>
  );
}

export default Square;

const SquareCard = styled.TouchableOpacity`
  padding: 26px;
  background: #ffffff;
  box-shadow: 12px 26px 50px rgba(90, 108, 234, 0.07);
  border-radius: 22px;
`;

const Name = styled.Text`
  font-size: 16px;
  font-weight: 600;
  color: #000;
  text-align: center;
  margin-top: 10px;
`;

const Distance = styled.Text`
  font-size: 13px;
  font-weight: 200;
  color: #000;
  text-align: center;
  margin-top: 4px;
`;
