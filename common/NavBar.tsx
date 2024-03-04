import { Image, ScrollView } from "react-native";
import styled from "styled-components/native";
import { HomeProps } from "../components/screens/Home";
import { LinearGradient } from "expo-linear-gradient";

interface IProps extends HomeProps {
  active: String;
}

function NavBar({ navigation, active }: IProps) {
  return (
    <NavBarView>
      <Item onPress={() => {}}>
        <ButtonWrap
          $active={active == "Home"}
          colors={["#283930", "#24352e"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <Image source={require("../assets/icons/Home.png")} />

          {active == "Home" && <ItemText>Home</ItemText>}
        </ButtonWrap>
      </Item>

      <Item onPress={() => {}}>
        <ButtonWrap
          colors={["#283930", "#24352e"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          $active={active == "Profile"}
        >
          <Image source={require("../assets/icons/Profile.png")} />

          {active == "Profile" && <ItemText>Profile</ItemText>}
        </ButtonWrap>
      </Item>

      <Item onPress={() => {}}>
        <ButtonWrap
          colors={["#283930", "#24352e"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          $active={active == "Cart"}
        >
          <Image source={require("../assets/icons/Buy.png")} />

          {active == "Cart" && <ItemText>Cart</ItemText>}
        </ButtonWrap>
      </Item>

      <Item onPress={() => {}}>
        <ButtonWrap
          colors={["#283930", "#24352e"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          $active={active == "Message"}
        >
          <Image source={require("../assets/icons/Chat.png")} />

          {active == "Message" && <ItemText>Message</ItemText>}
        </ButtonWrap>
      </Item>
    </NavBarView>
  );
}

export default NavBar;

const NavBarView = styled.View`
  position: sticky;
  bottom: 8px;
  padding: 15px 20px;

  background: #252525;
  box-shadow: 0px 0px 50px rgba(1, 2, 7, 0.5);
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

const ItemText = styled.Text`
  font-size: 12px;
  color: #fff;
  font-weight: 500;
`;
