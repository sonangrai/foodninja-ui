import Splash from "./components/Splash";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import Home from "./components/screens/Home";
import Onboarding from "./components/screens/Onboarding";
import SignUp from "./components/screens/SignUp";

// screen parameters
export type RootStackParamList = {
  Home: undefined;
  Onboarding: undefined;
  SignUp: undefined;
  Details: { itemId: number; otherParam: string };
};

const Stack = createNativeStackNavigator();

export default function App() {
  const [splash, setSplash] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setSplash(false);
    }, 4000);
  }, []);

  // Splash screen for 3 sec
  if (splash) return <Splash />;

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={(props) => ({
          headerShown: false,
        })}
      >
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
