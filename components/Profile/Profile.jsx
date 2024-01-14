import {
  Box,
  Center,
  HStack,
  Icon,
  Text,
  VStack,
  useColorModeValue,
} from "native-base";
import React, { useState } from "react";
import {
  Animated,
  Dimensions,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";
import { COLORS, FONT, images } from "../../constants";
import styles from "./profile.style";
import { SceneMap, TabView } from "react-native-tab-view";
import { MaterialIcons } from "@expo/vector-icons";

const FirstRoute = () => (
  <View>
    <HStack space={[2, 3]} justifyContent="space-between" mt={6} paddingX={6}>
      <Text style={styles.tabContentLeft}>Date of Birth</Text>
      <Text style={styles.tabContentRight}>23 August 1990</Text>
    </HStack>
    <HStack space={[2, 3]} justifyContent="space-between" mt={4} paddingX={6}>
      <Text style={styles.tabContentLeft}>Gender</Text>
      <Text style={styles.tabContentRight}>Male</Text>
    </HStack>
    <HStack space={[2, 3]} justifyContent="space-between" mt={4} paddingX={6}>
      <Text style={styles.tabContentLeft}>Marital Status</Text>
      <Text style={styles.tabContentRight}>Unmarried</Text>
    </HStack>
    <HStack space={[2, 3]} justifyContent="space-between" mt={4} paddingX={6}>
      <Text style={styles.tabContentLeft}>Address</Text>
      <Text style={styles.tabContentRight}>48 Arthur Street, Ashfield</Text>
    </HStack>
  </View>
);

const SecondRoute = () => (
  <View>
    <HStack space={[2, 3]} justifyContent="space-between" mt={6} paddingX={6}>
      <Text style={styles.tabContentLeft}>Joined Date</Text>
      <Text style={styles.tabContentRight}>25 Dec 2022</Text>
    </HStack>
    <HStack space={[2, 3]} justifyContent="space-between" mt={4} paddingX={6}>
      <Text style={styles.tabContentLeft}>Working Hours</Text>
      <VStack
        space={[2, 3]}
        justifyContent="space-between"
        alignItems={"flex-end"}
      >
        <Text style={styles.tabContentRight}>Mon - Thurs</Text>
        <Text style={styles.tabContentRight}>9:00 - 19:00</Text>
      </VStack>
    </HStack>
    <HStack space={[2, 3]} justifyContent="space-between" mt={4} paddingX={6}>
      <Text style={styles.tabContentLeft}>Overtime</Text>
      <Text style={styles.tabContentRight}>N/A</Text>
    </HStack>
  </View>
);

const ThirdRoute = () => (
  <View>
    <HStack space={[2, 3]} justifyContent="space-between" mt={6} paddingX={6}>
      <Text style={styles.tabContentLeft}>Organization</Text>
      <Text style={styles.tabContentRight}>KFC</Text>
    </HStack>
    <HStack space={[2, 3]} justifyContent="space-between" mt={4} paddingX={6}>
      <Text style={styles.tabContentLeft}>Branch</Text>
      <Text style={styles.tabContentRight}>New South Wales</Text>
    </HStack>
    <HStack space={[2, 3]} justifyContent="space-between" mt={4} paddingX={6}>
      <Text style={styles.tabContentLeft}>Department</Text>
      <Text style={styles.tabContentRight}>IT Manager</Text>
    </HStack>
  </View>
);

const initialLayout = {
  width: Dimensions.get("window").width,
};
const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
});

const Profile = ({ navigation }) => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {
      key: "first",
      title: "Basic Info",
      icon: <MaterialIcons name="info-outline" />,
    },
    {
      key: "second",
      title: "Job Status",
      icon: <MaterialIcons name="import-contacts" />,
    },
    {
      key: "third",
      title: "Official Details",
      icon: <MaterialIcons name="contacts" />,
    },
  ]);

  const renderTabBar = (props) => {
    const inputRange = props.navigationState.routes.map((x, i) => i);
    return (
      <Box flexDirection="row" width={"100%"}>
        {props.navigationState.routes.map((route, i) => {
          const opacity = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map((inputIndex) =>
              inputIndex === i ? 1 : 0.5
            ),
          });
          const color =
            index === i
              ? useColorModeValue(COLORS.primary, "#e5e5e5")
              : useColorModeValue(COLORS.textGray, "#a1a1aa");
          const borderColor =
            index === i
              ? COLORS.primary
              : useColorModeValue("coolGray.200", "gray.400");
          return (
            <Box
              borderBottomWidth="3"
              borderColor={borderColor}
              flex={1}
              alignItems="center"
              justifyContent={"center"}
              p="3"
              cursor="pointer"
              key={i}
            >
              <Pressable
                onPress={() => {
                  setIndex(i);
                }}
              >
                <Center>
                  <Icon as={route.icon} size={5} color={color} />
                  <Text
                    style={{
                      color,
                      fontFamily: FONT.medium,
                      marginTop: 6,
                    }}
                  >
                    {route.title}
                  </Text>
                </Center>
              </Pressable>
            </Box>
          );
        })}
      </Box>
    );
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={styles.bg}>
        <View style={styles.top}></View>
        <View style={styles.bottom}>
          <View style={styles.profile}>
            <Image
              source={images.user}
              style={{
                width: 100,
                height: 100,
                borderRadius: 50,
                overflow: "hidden",
                borderWidth: 2,
                borderColor: "white",
              }}
            />
          </View>
          <View style={styles.info}>
            <VStack space={0} alignItems="center" justifyContent={"center"}>
              <Text style={styles.name}>John Doe</Text>
              <Text style={styles.contact}>
                johndoe@gmail.com | +61478698970
              </Text>
            </VStack>
          </View>
          <TabView
            navigationState={{
              index,
              routes,
            }}
            renderScene={renderScene}
            renderTabBar={renderTabBar}
            onIndexChange={setIndex}
            initialLayout={initialLayout}
            style={{
              marginTop: StatusBar.currentHeight,
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
