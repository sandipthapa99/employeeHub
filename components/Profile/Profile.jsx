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
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { COLORS, FONT, SIZES, images } from "../../constants";
import styles from "./profile.style";
import { SceneMap, TabView } from "react-native-tab-view";
import { MaterialIcons } from "@expo/vector-icons";

// const FirstRoute = () => (
//   <View>
//     <HStack space={[2, 3]} justifyContent="space-between" mt={6} paddingX={6}>
//       <Text style={styles.tabContentLeft}>Date of Birth</Text>
//       <Text style={styles.tabContentRight}>23 August 1990</Text>
//     </HStack>
//     <HStack space={[2, 3]} justifyContent="space-between" mt={4} paddingX={6}>
//       <Text style={styles.tabContentLeft}>Gender</Text>
//       <Text style={styles.tabContentRight}>Male</Text>
//     </HStack>
//     <HStack space={[2, 3]} justifyContent="space-between" mt={4} paddingX={6}>
//       <Text style={styles.tabContentLeft}>Marital Status</Text>
//       <Text style={styles.tabContentRight}>Unmarried</Text>
//     </HStack>
//     <HStack space={[2, 3]} justifyContent="space-between" mt={4} paddingX={6}>
//       <Text style={styles.tabContentLeft}>Address</Text>
//       <Text style={styles.tabContentRight}>48 Arthur Street, Ashfield</Text>
//     </HStack>
//   </View>
// );

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

// const initialLayout = {
//   width: Dimensions.get("window").width,
// };
// const renderScene = SceneMap({
//   first: FirstRoute,
//   second: SecondRoute,
//   third: ThirdRoute,
// });

const Profile = () => {
  // const [index, setIndex] = useState(0);
  // const [routes] = useState([
  //   {
  //     key: "first",
  //     title: "Basic Info",
  //     icon: <MaterialIcons name="info-outline" />,
  //   },
  //   {
  //     key: "second",
  //     title: "Job Status",
  //     icon: <MaterialIcons name="import-contacts" />,
  //   },
  //   {
  //     key: "third",
  //     title: "Official Details",
  //     icon: <MaterialIcons name="contacts" />,
  //   },
  // ]);

  // const renderTabBar = (props) => {
  //   return (
  //     <Box flexDirection="row" width={"100%"}>
  //       {props.navigationState.routes.map((route, i) => {
  //         const color =
  //           index === i
  //             ? useColorModeValue(COLORS.primary, "#e5e5e5")
  //             : useColorModeValue(COLORS.textGray, "#a1a1aa");
  //         const borderColor =
  //           index === i
  //             ? COLORS.primary
  //             : useColorModeValue("coolGray.200", "gray.400");
  //         return (
  //           <Box
  //             borderBottomWidth="3"
  //             borderColor={borderColor}
  //             flex={1}
  //             alignItems="center"
  //             justifyContent={"center"}
  //             key={i}
  //           >
  //             <Pressable
  //               onPress={() => {
  //                 setIndex(i);
  //               }}
  //             >
  //               <Center>
  //                 <Icon as={route.icon} size={5} color={color} />
  //                 <Text
  //                   fontFamily={FONT.medium}
  //                   mt={2}
  //                   style={{
  //                     color,
  //                   }}
  //                 >
  //                   {route.title}
  //                 </Text>
  //               </Center>
  //             </Pressable>
  //           </Box>
  //         );
  //       })}
  //     </Box>
  //   );
  // };
  const [tabs] = useState([
    {
      title: "Basic Info",
      icon: <MaterialIcons name="info-outline" />,
    },
    {
      title: "Job Status",
      icon: <MaterialIcons name="import-contacts" />,
    },
    {
      title: "Official Details",
      icon: <MaterialIcons name="contacts" />,
    },
  ]);

  const [activeTab, setActiveTab] = useState("Basic Info");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={styles.container}>
        <View style={styles.top} />
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
              <Text style={styles.name}>Olaiza Edades</Text>
              <Text style={styles.contact}>
                olaizaedades@gmail.com | +61478698970
              </Text>
            </VStack>
          </View>
          <View style={styles.tabsContainer}>
            <View>
              <HStack space={[2, 3]} justifyContent="space-between" zIndex={2}>
                {tabs.map((item) => (
                  <TouchableOpacity
                    style={styles.tab(activeTab, item.title)}
                    onPress={() => {
                      setActiveTab(item.title);
                    }}
                    key={item.title}
                    activeOpacity={0.8}
                  >
                    <Center>
                      <Icon
                        as={item.icon}
                        size={5}
                        color={
                          activeTab === item.title
                            ? COLORS.primary
                            : COLORS.textPrimary
                        }
                      />
                      <Text style={styles.tabText(activeTab, item.title)}>
                        {item.title}
                      </Text>
                    </Center>
                  </TouchableOpacity>
                ))}
              </HStack>
              <View
                style={{
                  borderBottomColor: "#C0C6D0",
                  borderBottomWidth: 2,
                  bottom: 2,
                }}
              />
            </View>

            {activeTab === "Basic Info" && (
              <View>
                <HStack space={[2, 3]} justifyContent="space-between" mt={6}>
                  <Text style={styles.tabContentLeft}>Date of Birth</Text>
                  <Text style={styles.tabContentRight}>23 August 1990</Text>
                </HStack>
                <HStack space={[2, 3]} justifyContent="space-between" mt={4}>
                  <Text style={styles.tabContentLeft}>Gender</Text>
                  <Text style={styles.tabContentRight}>Female</Text>
                </HStack>

                <HStack space={[2, 3]} justifyContent="space-between" mt={4}>
                  <Text style={styles.tabContentLeft}>Marital Status</Text>
                  <Text style={styles.tabContentRight}>Unmarried</Text>
                </HStack>

                <HStack space={[2, 3]} justifyContent="space-between" mt={4}>
                  <Text style={styles.tabContentLeft}>Address</Text>

                  <Text style={styles.tabContentRight}>
                    48 Arthur Street, Ashfield
                  </Text>
                </HStack>
              </View>
            )}
            {activeTab === "Job Status" && (
              <View>
                <HStack space={[2, 3]} justifyContent="space-between" mt={6}>
                  <Text style={styles.tabContentLeft}>Joined Date</Text>
                  <Text style={styles.tabContentRight}>25 Dec 2022</Text>
                </HStack>
                <HStack space={[2, 3]} justifyContent="space-between" mt={4}>
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
                <HStack space={[2, 3]} justifyContent="space-between" mt={4}>
                  <Text style={styles.tabContentLeft}>Overtime</Text>
                  <Text style={styles.tabContentRight}>N/A</Text>
                </HStack>
              </View>
            )}
            {activeTab === "Official Details" && (
              <View>
                <HStack space={[2, 3]} justifyContent="space-between" mt={6}>
                  <Text style={styles.tabContentLeft}>Organization</Text>
                  <Text style={styles.tabContentRight}>ABC Organization</Text>
                </HStack>
                <HStack space={[2, 3]} justifyContent="space-between" mt={4}>
                  <Text style={styles.tabContentLeft}>Branch</Text>
                  <Text style={styles.tabContentRight}>New South Wales</Text>
                </HStack>
                <HStack space={[2, 3]} justifyContent="space-between" mt={4}>
                  <Text style={styles.tabContentLeft}>Department</Text>
                  <Text style={styles.tabContentRight}>IT Manager</Text>
                </HStack>
              </View>
            )}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
