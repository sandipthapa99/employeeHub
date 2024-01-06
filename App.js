import { StatusBar } from "expo-status-bar";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useState } from "react";
import { SvgComponent } from "./assets/svgs";
import { COLORS, SIZES } from "./constants/theme";
import {
  Input,
  Icon,
  Stack,
  Pressable,
  Center,
  NativeBaseProvider,
  FormControl,
  Button,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 5000);

export default function App() {
  const [show, setShow] = useState(false);
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

  return (
    <NativeBaseProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <SvgComponent />

          <Text style={styles.welcomeText}>Welcome back, 👋 </Text>
          <Text style={styles.subText}>It's good to see you again. </Text>
          <Stack space={4} w="100%" alignItems="center">
            <FormControl>
              <FormControl.Label>Email</FormControl.Label>
              <Input
                InputLeftElement={
                  <Icon
                    as={<MaterialIcons name="mail" />}
                    size={5}
                    ml="2"
                    color="muted.400"
                  />
                }
                placeholder="username@company.com"
                style={{
                  fontFamily: "Poppins-Regular",
                }}
              />
            </FormControl>
            <Input
              type={show ? "text" : "password"}
              InputLeftElement={
                <Icon
                  as={<MaterialIcons name="lock" />}
                  size={5}
                  ml="2"
                  color="muted.400"
                />
              }
              style={{ fontFamily: "Poppins-Regular" }}
              InputRightElement={
                <Pressable onPress={() => setShow(!show)}>
                  <Icon
                    as={
                      <MaterialIcons
                        name={show ? "visibility" : "visibility-off"}
                      />
                    }
                    size={5}
                    mr="2"
                    color="muted.400"
                  />
                </Pressable>
              }
              placeholder="Password"
            />
          </Stack>
          <Button
            size="sm"
            colorScheme="secondary"
            width={"100%"}
            style={{ backgroundColor: COLORS.primary }}
          >
            LOGIN
          </Button>
          {/* <StatusBar style="auto" /> */}
        </View>
      </SafeAreaView>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: SIZES.medium,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  welcomeText: {
    fontFamily: "Poppins-Medium",
    fontSize: 24,
    color: COLORS.textPrimary,
    marginTop: 16,
  },
  subText: {
    fontFamily: "Poppins-Regular",
    fontSize: 12,
    color: COLORS.textGray,
  },
});
