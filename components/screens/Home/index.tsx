import { Image, useColorScheme } from "react-native";
import styled from "styled-components/native";

function Home() {
  const colorScheme = "light" || useColorScheme();
  return (
    <HomeView
      $dark={colorScheme != "light"}
      source={
        colorScheme == "light"
          ? require("../../../assets/PatternCommon.png")
          : require("../../../assets/PatternCommon-dark.png")
      }
    >
      <TopRow>
        <PageTitle> Find Your {"\n"} Favorite Food </PageTitle>

        <Notification>
          <Image source={require("../../../assets/icons/noti.png")} />
          <RedDot />
        </Notification>
      </TopRow>
    </HomeView>
  );
}

export default Home;

const HomeView = styled.ImageBackground<{ $dark: boolean }>`
  padding: 25px;
  flex: 1;
  justify-content: space-evenly;
  background-color: ${({ $dark }) => ($dark ? "#000" : "transparent")};
`;

const TopRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;

const Notification = styled.View`
  position: relative;
  padding: 14px;
  background: #fafdff;
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

const PageTitle = styled.Text`
  font-size: 31px;
  font-weight: bold;
`;
