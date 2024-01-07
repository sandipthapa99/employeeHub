import React, { useState } from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { SvgComponent } from "../assets/svgs";
import { COLORS, SIZES } from "../constants/theme";
import {
  Input,
  Icon,
  Stack,
  Pressable,
  FormControl,
  Button,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const Login = ({ navigation }) => {
  const [show, setShow] = useState(false);
  const router = useRouter();
  return (
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
          onPress={() => navigation.navigate("Profile", { name: "Jane" })}
        >
          LOGIN
        </Button>
        {/* <StatusBar style="auto" /> */}
      </View>
    </SafeAreaView>
  );
};

export default Login;

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
