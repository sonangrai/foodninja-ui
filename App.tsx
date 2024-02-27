import Splash from "./components/Splash";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import Home from "./components/screens/Home";

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
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{ title: "Home" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
