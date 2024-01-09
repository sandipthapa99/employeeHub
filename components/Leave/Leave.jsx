import {
  Avatar,
  Box,
  FlatList,
  HStack,
  Icon,
  Spacer,
  Text,
  VStack,
} from "native-base";
import React from "react";
import {
  SafeAreaView,
  ScrollView,
  ScrollViewBase,
  TouchableOpacity,
  View,
} from "react-native";
import Navbar from "../common/header/navbar/Navbar";
import styles from "./leave.style";
import { MaterialIcons } from "@expo/vector-icons";
import { COLORS, FONT } from "../../constants";
import StatusButton from "../common/buttons/StatusButton";

const Leave = ({ navigation }) => {
  const date = new Date();
  const data = [
    {
      id: 1,
      date: "2023/12/12",
      type: "Annual",
      status: "Pending",
    },
    {
      id: 2,
      date: "2023/12/12",
      type: "Annual",
      status: "Approved",
    },
    {
      id: 3,
      date: "2023/12/12",
      type: "Annual",
      status: "Pending",
    },
    {
      id: 4,
      date: "2023/12/12",
      type: "Annual",
      status: "Rejected",
    },
    {
      id: 5,
      date: "2023/12/12",
      type: "Annual",
      status: "Pending",
    },
    {
      id: 6,
      date: "2023/12/12",
      type: "Annual",
      status: "Approved",
    },
    {
      id: 7,
      date: "2023/12/12",
      type: "Annual",
      status: "Pending",
    },
    {
      id: 8,
      date: "2023/12/12",
      type: "Annual",
      status: "Approved",
    },
  ];
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.upperDash}>
            <View style={styles.today}>
              <Icon
                as={<MaterialIcons name="today" />}
                size={5}
                ml="2"
                color="muted.400"
              />
              <Text ml={2} style={styles.date}>
                As of, {date.toDateString()}
              </Text>
            </View>
            <View style={styles.statsContainer}>
              <View style={styles.stat}>
                <Text style={styles.statNum} fontSize={24} color={"#11CD51"}>
                  15
                </Text>
                <Text fontSize={14} color={COLORS.textPrimary}>
                  Total
                </Text>
              </View>
              <View style={styles.stat}>
                <Text style={styles.statNum} fontSize={24} color={"#FF380D"}>
                  {data.filter((item) => item.status === "Approved").length}
                </Text>
                <Text fontSize={14} color={COLORS.textPrimary}>
                  Used
                </Text>
              </View>
              <View style={styles.stat}>
                <Text style={styles.statNum} fontSize={24} color={"#FF9900"}>
                  {15 -
                    data.filter((item) => item.status === "Approved").length}
                </Text>
                <Text fontSize={14} color={COLORS.textPrimary}>
                  Available
                </Text>
              </View>
            </View>
          </View>
          <HStack
            space={[2, 3]}
            justifyContent="space-between"
            mt={6}
            paddingX={6}
          >
            <Text color={COLORS.textPrimary} fontFamily={FONT.regular}>
              Date
            </Text>
            <VStack>
              <Text
                _dark={{
                  color: "warmGray.50",
                }}
                color={COLORS.textPrimary}
                fontFamily={FONT.regular}
              >
                Type
              </Text>
            </VStack>
            <Text color={COLORS.textPrimary} fontFamily={FONT.regular}>
              Status
            </Text>
          </HStack>
          <FlatList
            style={styles.listContainer}
            data={data}
            renderItem={({ item }) => (
              <Box
                borderBottomWidth="1"
                _dark={{
                  borderColor: "muted.50",
                }}
                borderColor={COLORS.lightWhite}
                py="2"
              >
                <HStack
                  space={[2, 3]}
                  justifyContent="space-between"
                  paddingX={4}
                >
                  <Text>{item.date}</Text>
                  <VStack>
                    <Text
                      _dark={{
                        color: "warmGray.50",
                      }}
                      color="coolGray.800"
                      bold
                    >
                      {item.type}
                    </Text>
                  </VStack>
                  <StatusButton status={item.status} />
                </HStack>
              </Box>
            )}
            keyExtractor={(item, index) => `${item.id}-${index}`}
          />
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.requestBtn}
        onPress={() => navigation.navigate("LeaveApplication")}
      >
        <Icon as={<MaterialIcons name="add" />} size={5} mr="2" color="white" />
        <Text style={styles.requestText}>New Request</Text>
      </TouchableOpacity>
      <View style={{ position: "absolute", bottom: 0 }}>
        <Navbar navigation={navigation} page={"Leave"} />
      </View>
    </SafeAreaView>
  );
};

export default Leave;
