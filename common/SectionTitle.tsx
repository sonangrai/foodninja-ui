import { useColorScheme } from "react-native";
import styled from "styled-components/native";

interface IProps {
  title: string;
  clickHandle: () => void;
}

function SectionTitle({ title, clickHandle }: IProps) {
  const colorScheme = useColorScheme();
  const isDark = colorScheme != "light";

  return (
    <SectionTitleView>
      <Title $dark={isDark}>{title}</Title>

      <Link onPress={clickHandle}>
        <LinkText>View More</LinkText>
      </Link>
    </SectionTitleView>
  );
}

export default SectionTitle;

const SectionTitleView = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.Text<{ $dark: boolean }>`
  font-size: 15px;
  font-weight: 600;
  color: ${({ $dark }) => ($dark ? "#fff" : "#000")};
`;

const Link = styled.TouchableOpacity``;

const LinkText = styled.Text`
  font-size: 12px;
  color: #ff7c32;
`;
