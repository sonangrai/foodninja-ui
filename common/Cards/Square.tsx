import { Image, useColorScheme } from "react-native";
import styled from "styled-components/native";

interface IProps {
  img: any;
  name: string;
  distance: string;
}

function Square(props: IProps) {
  const colorScheme = useColorScheme();
  const isDark = colorScheme != "light";

  return (
    <SquareCard $dark={isDark}>
      <Image
        source={props.img}
        style={{
          height: 80,
          width: 80,
          objectFit: "contain",
        }}
      />
      <Name $dark={isDark}>{props.name}</Name>
      <Distance $dark={isDark}>{props.distance}</Distance>
    </SquareCard>
  );
}

export default Square;

const SquareCard = styled.TouchableOpacity<{ $dark: boolean }>`
  padding: 26px;
  background: ${({ $dark }) => ($dark ? "#252525" : "#fff")};
  box-shadow: 12px 26px 50px rgba(90, 108, 234, 0.07);
  border-radius: 22px;
`;

const Name = styled.Text<{ $dark: boolean }>`
  font-size: 16px;
  font-weight: 600;
  color: ${({ $dark }) => ($dark ? "#fff" : "#000")};
  text-align: center;
  margin-top: 10px;
`;

const Distance = styled.Text<{ $dark: boolean }>`
  font-size: 13px;
  font-weight: 200;
  color: ${({ $dark }) => ($dark ? "#fff" : "#000")};
  text-align: center;
  margin-top: 4px;
`;
