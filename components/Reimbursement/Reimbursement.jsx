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
import { COLORS } from "../../constants";
import styles from "./reimbursement.style";
import { MaterialIcons } from "@expo/vector-icons";

const Reimbursement = () => {
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
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Reimbursement;
