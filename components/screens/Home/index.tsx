import { Image, ScrollView, useColorScheme } from "react-native";
import styled from "styled-components/native";
import SearchBar from "./SearchBar";
import NavBar from "../../../common/NavBar";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../App";

export type HomeProps = {
  navigation: StackNavigationProp<RootStackParamList, "Home">;
};

function Home({ navigation }: HomeProps) {
  const colorScheme = useColorScheme();

  return (
    <HomeView
      $dark={colorScheme != "light"}
      source={
        colorScheme == "light"
          ? require("../../../assets/PatternCommon.png")
          : require("../../../assets/PatternCommon-dark.png")
      }
    >
      <ScrollView contentContainerStyle={{ gap: 18 }}>
        <TopRow>
          <PageTitle $dark={colorScheme != "light"}> Find Your {"\n"} Favorite Food </PageTitle>

          <Notification $dark={colorScheme != "light"}>
            <Image source={require("../../../assets/icons/noti.png")} />
            <RedDot />
          </Notification>
        </TopRow>

        <SearchBar />
      </ScrollView>

      <NavBar navigation={navigation} active="Home" />
    </HomeView>
  );
}

export default Home;

const HomeView = styled.ImageBackground<{ $dark: boolean }>`
  padding: 70px 25px 20px 25px;
  flex: 1;
  background-color: ${({ $dark }) => ($dark ? "#000" : "#fff")};
`;

const TopRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;

const Notification = styled.View<{ $dark: boolean }>`
  position: relative;
  padding: 14px;
  background: ${({ $dark }) => ($dark ? "#252525" : "#fafdff")};
  box-shadow: 11px 28px 50px rgba(20, 78, 90, 0.2);
  border-radius: 15px;
`;

const RedDot = styled.View`
  position: absolute;
  right: 70%;
  top: 20%;
  bottom: 88.92%;

  width: 8px;
  height: 8px;
  border-radius: 50%;

  background: #ff4545;
  border: 1px solid #ffffff;
`;

const PageTitle = styled.Text<{ $dark: boolean }>`
  font-size: 31px;
  font-weight: bold;
  color: ${({ $dark }) => ($dark ? "#fff" : "#000")};
`;
