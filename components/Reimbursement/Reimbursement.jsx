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
import { COLORS, FONT } from "../../constants";
import styles from "./reimbursement.style";
import { MaterialIcons } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import moment from "moment";
import StatusButton from "../common/buttons/StatusButton";

const Reimbursement = () => {
  const { reimbursement } = useSelector((state) => {
    return {
      reimbursement: state.reimbursement,
    };
  });
  const reversedData = reimbursement.reimbursementList.slice(0).reverse();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.upperDash}>
            <View style={styles.statsContainer}>
              <HStack space={3} justifyContent="space-between">
                <View style={styles.stat}>
                  <Text style={styles.statNum} fontSize={24} color={"#11CD51"}>
                    15
                  </Text>
                  <Text fontSize={14} color={COLORS.textPrimary}>
                    Approved
                  </Text>
                </View>
                <View style={styles.stat}>
                  <Text style={styles.statNum} fontSize={24} color={"#FF380D"}>
                    10{" "}
                  </Text>
                  <Text fontSize={14} color={COLORS.textPrimary}>
                    Rejected
                  </Text>
                </View>
                <View style={styles.stat}>
                  <Text style={styles.statNum} fontSize={24} color={"#FF9900"}>
                    15
                  </Text>
                  <Text fontSize={14} color={COLORS.textPrimary}>
                    Pending
                  </Text>
                </View>
                <View style={styles.stat}>
                  <Text style={styles.statNum} fontSize={24} color={"#9B88ED"}>
                    $405.00
                  </Text>
                  <Text fontSize={14} color={COLORS.textPrimary}>
                    Receivable
                  </Text>
                </View>
              </HStack>
            </View>
          </View>

          <HStack
            space={[2, 3]}
            justifyContent="space-evenly"
            mt={6}
            paddingX={4}
          >
            <Text color={COLORS.textPrimary} fontFamily={FONT.regular}>
              Date
            </Text>
            <Text color={COLORS.textPrimary} fontFamily={FONT.regular}>
              Category
            </Text>
            <Text color={COLORS.textPrimary} fontFamily={FONT.regular}>
              Amount
            </Text>
            <Text color={COLORS.textPrimary} fontFamily={FONT.regular}>
              Status
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
                  alignItems={"center"}
                >
                  <Text
                    color={COLORS.textPrimary}
                    fontFamily={FONT.regular}
                    fontSize={12}
                  >
                    {moment(item.date).format("DD/MM/YYYY")}
                  </Text>
                  <Text color="coolGray.800">{item.category}</Text>
                  <Text color="coolGray.800">{item.amount}</Text>
                  <StatusButton status={item.status} />
                </HStack>
              </Box>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Reimbursement;
