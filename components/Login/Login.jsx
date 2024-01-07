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
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.topSection}>
          <Logo />
          <Text style={styles.welcomeText}>Welcome back, 👋 </Text>
          <Text style={styles.subText}>It's good to see you again. </Text>
        </View>
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
          <FormControl>
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
            onPress={() => navigation.navigate("DashBoard")}
          >
            LOGIN
          </Button>
          <Button
            size="lg"
            colorScheme="secondary"
            width={"15%"}
            style={{ backgroundColor: COLORS.primary }}
            onPress={() => navigation.navigate("DashBoard")}
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
