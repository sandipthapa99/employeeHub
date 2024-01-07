import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useState } from "react";

import Login from "./components/Login/Login";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "./components/Dashboard/Profile";
import Dashboard from "./components/Dashboard/Dashboard";
import { COLORS, icons, images } from "./constants";
import ScreenHeaderBtn from "./components/common/header/ScreenHeaderBtn";
import styles from "./components/Dashboard/dashboard.style";
import { Text, View } from "react-native";
SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 3000);

export default function App() {
  const [fontsLoaded] = useFonts({
    "Poppins-Bold": require("./assets/fonts/Poppins-Bold.ttf"),
    "Poppins-Medium": require("./assets/fonts/Poppins-Medium.ttf"),
    "Poppins-Regular": require("./assets/fonts/Poppins-Regular.ttf"),
    "Poppins-SemiBold": require("./assets/fonts/Poppins-SemiBold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const Stack = createNativeStackNavigator();

  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Login}
            options={{
              title: "",
              headerStyle: {
                backgroundColor: "#fff",
              },
              headerShadowVisible: false,
            }}
          />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen
            name="Dashboard"
            options={{
              headerStyle: {
                backgroundColor: COLORS.lightWhite,
              },
              headerShadowVisible: false,
              headerLeft: () => (
                <View style={styles.header}>
                  <View style={styles.headerLeft}>
                    <ScreenHeaderBtn iconUrl={images.user} dimension={"100%"} />
                    <Text style={styles.username}>John Doe</Text>
                  </View>
                </View>
              ),
              headerRight: () => (
                <View>
                  <Text style={styles.headerRight}>KFC</Text>
                </View>
              ),
              headerTitle: "",
            }}
            component={Dashboard}
          />
        </Stack.Navigator>
        {/* <Login /> */}
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
