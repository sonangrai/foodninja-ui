import { Image, ScrollView, useColorScheme } from "react-native";
import styled from "styled-components/native";
import { HomeProps } from "../components/screens/Home";
import { LinearGradient } from "expo-linear-gradient";

interface IProps extends HomeProps {
  active: String;
}

function NavBar({ navigation, active }: IProps) {
  const colorScheme = useColorScheme();
  const isDark = colorScheme != "light";

  return (
    <NavBarView $dark={isDark}>
      <Item onPress={() => {}}>
        <ButtonWrap
          $active={active == "Home"}
          colors={isDark ? ["#283930", "#24352e"] : ["#edfcf3", "#e8faf2"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <Image source={require("../assets/icons/Home.png")} />

          {active == "Home" && <ItemText $dark={isDark}>Home</ItemText>}
        </ButtonWrap>
      </Item>

      <Item onPress={() => {}}>
        <ButtonWrap
          colors={isDark ? ["#283930", "#24352e"] : ["#edfcf3", "#e8faf2"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          $active={active == "Profile"}
        >
          <Image source={require("../assets/icons/Profile.png")} />

          {active == "Profile" && <ItemText $dark={isDark}>Profile</ItemText>}
        </ButtonWrap>
      </Item>

      <Item onPress={() => {}}>
        <ButtonWrap
          colors={isDark ? ["#283930", "#24352e"] : ["#edfcf3", "#e8faf2"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          $active={active == "Cart"}
        >
          <Image source={require("../assets/icons/Buy.png")} />

          {active == "Cart" && <ItemText $dark={isDark}>Cart</ItemText>}
        </ButtonWrap>
      </Item>

      <Item onPress={() => {}}>
        <ButtonWrap
          colors={isDark ? ["#283930", "#24352e"] : ["#edfcf3", "#e8faf2"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          $active={active == "Message"}
        >
          <Image source={require("../assets/icons/Chat.png")} />

          {active == "Message" && <ItemText $dark={isDark}>Message</ItemText>}
        </ButtonWrap>
      </Item>
    </NavBarView>
  );
}

export default NavBar;

const NavBarView = styled.View<{ $dark: boolean }>`
  position: sticky;
  bottom: 8px;
  padding: 15px 20px;
  background: ${({ $dark }) => ($dark ? "#252525" : "#fff")};
  box-shadow: ${({ $dark }) => ($dark ? "0px 0px 50px rgba(1, 2, 7, 0.5)" : "0px 0px 50px rgba(90, 108, 234, 0.1)")};
  border-radius: 15px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Item = styled.TouchableOpacity`
  border-radius: 12px;
`;

const ButtonWrap = styled(LinearGradient)<{ $active: boolean }>`
  flex-direction: row;
  gap: 14px;
  align-items: center;

  padding: ${({ $active }) => ($active ? "12px 20px" : "0")};
  border-radius: 15px;
`;

const ItemText = styled.Text<{ $dark: boolean }>`
  font-size: 12px;
  color: ${({ $dark }) => ($dark ? "#fff" : "#09051C")};
  font-weight: 500;
`;
