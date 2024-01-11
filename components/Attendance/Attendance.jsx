import { Box, HStack, Icon, Text, VStack } from "native-base";
import React from "react";
import { SafeAreaView, ScrollView, TouchableOpacity, View } from "react-native";
import Navbar from "../common/header/navbar/Navbar";

import styles from "./attendance.style";
import { COLORS, FONT } from "../../constants";
import { useSelector } from "react-redux";
import { MaterialIcons } from "@expo/vector-icons";
import moment from "moment";
const Attendance = ({ navigation }) => {
  const { attendance } = useSelector((state) => {
    return {
      attendance: state.attendance,
    };
  });
  const reversedData = attendance.attendanceRecords.slice(0).reverse();
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
                2024 January
              </Text>
            </View>
          </View>
          <HStack
            space={[2, 3]}
            justifyContent="space-between"
            mt={6}
            paddingX={6}
          >
            <Text color={COLORS.textPrimary} fontFamily={FONT.regular} mr={6}>
              Date
            </Text>
            <Text color={COLORS.textPrimary} fontFamily={FONT.regular}>
              Day type
            </Text>
            <Text color={COLORS.textPrimary} fontFamily={FONT.regular}>
              Worked Hour
            </Text>
            <Text color={COLORS.textPrimary} fontFamily={FONT.regular}>
              In
            </Text>
            <Text color={COLORS.textPrimary} fontFamily={FONT.regular}>
              Out
            </Text>
          </HStack>
          <View style={styles.listContainer}>
            {reversedData.map((item, index) => (
              <Box
                borderBottomWidth="1"
                borderColor={COLORS.lightWhite}
                py="2"
                key={index}
              >
                <HStack
                  space={[2, 3]}
                  justifyContent="space-between"
                  paddingX={4}
                >
                  <Text
                    color={COLORS.textPrimary}
                    fontFamily={FONT.regular}
                    fontSize={12}
                  >
                    {moment(item.date).format("DD/MM/YYYY")}
                  </Text>
                  <Text color={COLORS.textPrimary} fontFamily={FONT.regular}>
                    {item.dayType}
                  </Text>
                  <Text color={COLORS.textPrimary} fontFamily={FONT.regular}>
                    {item.workedHour}
                  </Text>
                  <Text color={COLORS.textPrimary} fontFamily={FONT.regular}>
                    {item.in}
                  </Text>
                  <Text color={COLORS.textPrimary} fontFamily={FONT.regular}>
                    {item.out}
                  </Text>
                </HStack>
              </Box>
            ))}
            <Box py="2">
              <HStack
                space={[2, 3]}
                justifyContent="space-between"
                paddingX={4}
              >
                <Text
                  color={COLORS.textPrimary}
                  fontFamily={FONT.regular}
                  fontSize={12}
                >
                  {moment("2024-12-12").format("DD/MM/YYYY")}
                </Text>
                <Text color={COLORS.textPrimary} fontFamily={FONT.regular}>
                  {"Working"}
                </Text>
                <Text color={COLORS.textPrimary} fontFamily={FONT.regular}>
                  {"9hrs"}
                </Text>
                <Text color={COLORS.textPrimary} fontFamily={FONT.regular}>
                  {"09:00"}
                </Text>
                <Text color={COLORS.textPrimary} fontFamily={FONT.regular}>
                  {"18:00"}
                </Text>
              </HStack>
            </Box>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.requestBtn}
        onPress={() => navigation.navigate("addAttendance")}
        activeOpacity={0.6}
      >
        <Icon as={<MaterialIcons name="add" />} size={5} mr="2" color="white" />
        <Text style={styles.requestText}>New Attendance</Text>
      </TouchableOpacity>
      <Navbar navigation={navigation} page={"Attendance"} />
    </SafeAreaView>
  );
};

export default Attendance;
