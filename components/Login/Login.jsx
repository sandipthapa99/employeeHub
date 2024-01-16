import React, { useState } from "react";
import { SafeAreaView, Text, View } from "react-native";
import { Fingerprint, Logo } from "../../assets/svgs";
import { COLORS, SIZES } from "../../constants/theme";
import {
  Input,
  Icon,
  Stack,
  Pressable,
  FormControl,
  Button,
  Checkbox,
  HStack,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

import styles from "./login.style";

const Login = ({ navigation }) => {
  const [show, setShow] = useState(false);
  const router = useRouter();
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const validate = () => {
    if (formData.email !== "olaiza@gmail.com") {
      setErrors({ ...errors, email: "Invalid Credentials" });
      return false;
    } else if (formData.password !== "olaiza123") {
      setErrors({ ...errors, email: "Invalid Credentials" });
      return false;
    }
    setErrors({});
    return true;
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.topSection}>
          <Logo />
          <Text style={styles.welcomeText}>Welcome back, 👋 </Text>
          <Text style={styles.subText}>It's good to see you again. </Text>
        </View>
        <Stack space={4} w="100%" alignItems="center">
          <FormControl isRequired isInvalid={"email" in errors}>
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
              onChangeText={(text) => setFormData({ ...formData, email: text })}
              placeholder="username@company.com"
              style={{
                fontFamily: "Poppins-Regular",
              }}
            />
            {"email" in errors ? (
              <FormControl.ErrorMessage>
                Invalid Credentials!
              </FormControl.ErrorMessage>
            ) : (
              ""
            )}
          </FormControl>
          <FormControl isRequired isInvalid={"email" in errors}>
            <FormControl.Label>Password</FormControl.Label>
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
              onChangeText={(text) =>
                setFormData({ ...formData, password: text })
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
            {"email" in errors ? (
              <FormControl.ErrorMessage>
                Invalid Credentials!
              </FormControl.ErrorMessage>
            ) : (
              ""
            )}
          </FormControl>
        </Stack>
        <View style={styles.rememberSection}>
          <HStack>
            <Checkbox colorScheme={"info"} alignItems={"center"} size={"sm"}>
              <Text style={styles.rememberText}>Remember me</Text>
            </Checkbox>
          </HStack>
          <Text style={styles.forgetPw}>Forgot Password?</Text>
        </View>
        <View style={styles.btnContainer}>
          <Button
            size="lg"
            colorScheme="secondary"
            width={"80%"}
            style={{ backgroundColor: COLORS.primary }}
            onPress={() => {
              navigation.navigate("Dashboard");
              // validate()
              //   ? navigation.navigate("Dashboard")
              //   : console.log("Login Failed");
            }}
          >
            LOGIN
          </Button>
          <Button
            size="lg"
            colorScheme="secondary"
            width={"15%"}
            style={{ backgroundColor: COLORS.primary }}
            onPress={() => navigation.navigate("Dashboard")}
            // onPress={() => navigation.navigate("Dashboard", { name: "Jane" })}
          >
            <Fingerprint />
          </Button>
        </View>

        {/* <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
          <Image
            style={styles.searchBtnImage}
            source={icons.search}
            resizeMode="contain"
          />
        </TouchableOpacity> */}
        {/* <StatusBar style="auto" /> */}
      </View>
    </SafeAreaView>
  );
};

export default Login;
