import { StatusBar } from "expo-status-bar";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useState } from "react";

import Login from "./components/Login/Login";
import { NativeBaseProvider, extendTheme } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "./components/Dashboard/Profile";
import Dashboard from "./components/Dashboard/Dashboard";
import { COLORS, icons, images } from "./constants";
import ScreenHeaderBtn from "./components/common/header/ScreenHeaderBtn";
import styles from "./components/Dashboard/dashboard.style";
import { Text, TouchableOpacity, View } from "react-native";
import Payslip from "./components/Payslip/Payslip";
import Attendance from "./components/Attendance/Attendance";
import LateEarly from "./components/LateEarly/LateEarly";
import Birthday from "./components/Birthday/Birthday";
import Leave from "./components/Leave/Leave";
import Employees from "./components/Employees/Employees";
import Settings from "./components/Settings/Settings";
import Reimbursement from "./components/Reimbursement/Reimbursement";
import Notification from "./components/Notification/Notification";
import { useRouter } from "expo-router";
import LeaveApplication from "./components/Leave Application/LeaveApplication";
SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 3000);

export default function App() {
  const router = useRouter();

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

  const theme = extendTheme({
    colors: {
      primary: {
        50: "#E3F2F9",
        100: "#C5E4F3",
        200: "#A2D4EC",
        300: "#7AC1E4",
        400: "#47A9DA",
        500: "#0088CC",
        600: "#007FEE",
        700: "#006BA1",
        800: "#005885",
        900: "#003F5E",
      },
    },
  });

  return (
    <NativeBaseProvider theme={theme}>
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
          <Stack.Screen
            name="Dashboard"
            options={{
              headerShown: false,
              headerStyle: {
                backgroundColor: COLORS.lightWhite,
              },
              headerShadowVisible: false,
              headerLeft: () => <View></View>,
              headerTitle: "",
            }}
            component={Dashboard}
          />
          <Stack.Screen name="Attendance" component={Attendance} />
          <Stack.Screen name="Late/Early" component={LateEarly} />
          <Stack.Screen name="Birthday" component={Birthday} />
          <Stack.Screen name="Payslip" component={Payslip} />
          <Stack.Screen
            name="Leave"
            component={Leave}
            options={{
              headerTitle: "Leave Report",
            }}
          />
          <Stack.Screen
            name="LeaveApplication"
            component={LeaveApplication}
            options={{
              headerTitle: "Leave Application",
            }}
          />
          <Stack.Screen name="Employees" component={Employees} />
          <Stack.Screen name="Settings" component={Settings} />
          <Stack.Screen name="Reimbursement" component={Reimbursement} />
          <Stack.Screen name="Notifications" component={Notification} />
          <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
        {/* <Login /> */}
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
