import {
  Button,
  Center,
  HStack,
  Icon,
  Skeleton,
  Spinner,
  Text,
  VStack,
} from "native-base";
import React, { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import Navbar from "../common/header/navbar/Navbar";
import { COLORS, FONT } from "../../constants";
import styles from "./payslip.style";
import { MaterialIcons } from "@expo/vector-icons";
import SelectDropdown from "react-native-select-dropdown";
import PieChart from "react-native-pie-chart";
import { useSelector } from "react-redux";
import PayslipSkeleton from "../common/skeleton/PayslipSkeleton";

const Payslip = ({ navigation }) => {
  const { payslip } = useSelector((state) => {
    return {
      payslip: state.payslip.payslipData,
    };
  });
  const years = ["January 2024", "December 2023", "November 2023"];

  const [selectedDate, setSelectedDate] = useState(years[0]);
  const [activeData, setActiveData] = useState(
    payslip.filter((item) => item.date == selectedDate)
  );
  useEffect(() => {
    const data = payslip.filter((item) => item.date == selectedDate);
    setActiveData(data);
  }, [selectedDate]);
  const [loading, setLoading] = useState(false);

  const grossIncome =
    activeData[0].basic + activeData[0].hra + activeData[0].allowances;
  const grossDeduction =
    activeData[0].pf + activeData[0].incomeTax + activeData[0].insurance;

  const series = [grossDeduction, grossIncome];
  const sliceColor = ["#FFA84A", "#9B88ED"];
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <ScrollView>
        <View style={styles.container}>
          <HStack space={3} justifyContent="space-between">
            <View style={styles.upperLeft}>
              <Icon
                as={<MaterialIcons name="today" />}
                size={5}
                ml="4"
                color="muted.600"
              />
              <SelectDropdown
                data={years}
                onSelect={(selectedItem, index) => {
                  setLoading(true);
                  setTimeout(() => {
                    setSelectedDate(selectedItem);
                    setLoading(false);
                  }, 1000);
                }}
                defaultButtonText={years[0]}
                buttonTextAfterSelection={(selectedItem, index) => {
                  return selectedItem;
                }}
                rowTextForSelection={(item, index) => {
                  return item;
                }}
                buttonStyle={styles.dropdown1BtnStyle}
                buttonTextStyle={styles.dropdown1BtnTxtStyle}
                renderDropdownIcon={(isOpened) => {
                  return (
                    <MaterialIcons
                      name={isOpened ? "expand-less" : "expand-more"}
                      color={"#444"}
                      size={18}
                    />
                  );
                }}
                dropdownIconPosition={"right"}
                dropdownStyle={styles.dropdown1DropdownStyle}
                rowStyle={styles.dropdown1RowStyle}
                rowTextStyle={styles.dropdown1RowTxtStyle}
              />
            </View>
            <View style={styles.upperRight}>
              <Icon
                as={<MaterialIcons name="file-download" />}
                size={5}
                color="muted.400"
              />
            </View>
          </HStack>

          {!loading ? (
            <>
              <HStack
                space={3}
                justifyContent="space-between"
                style={styles.chart}
                mt={6}
                paddingX={8}
              >
                <View
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <PieChart
                    widthAndHeight={120}
                    series={series}
                    sliceColor={sliceColor}
                    coverRadius={0.7}
                    coverFill={"#FFF"}
                  />
                  <View
                    style={{
                      position: "absolute",
                      left: 0,
                      right: 0,
                    }}
                  >
                    <VStack
                      space={0}
                      alignItems="center"
                      justifyContent={"center"}
                    >
                      <Text>${grossIncome}</Text>
                      <Text>Gross Pay</Text>
                    </VStack>
                  </View>
                </View>
                <View style={{ justifyContent: "center" }}>
                  <VStack space={0} alignItems="flex-end" mb={3}>
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Text style={styles.legenTitle}>${grossIncome}</Text>
                      <Icon
                        as={<MaterialIcons name="circle" />}
                        size={4}
                        color="#9B88ED"
                        ml={2}
                      />
                    </View>
                    <Text mr={6} style={styles.legenSubTitle}>
                      Earnings
                    </Text>
                  </VStack>
                  <VStack space={0} alignItems="flex-end">
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      <Text style={styles.legenTitle}>${grossDeduction}</Text>
                      <Icon
                        as={<MaterialIcons name="circle" />}
                        size={4}
                        color="#FFA84A"
                        ml={2}
                      />
                    </View>
                    <Text mr={6} style={styles.legenSubTitle}>
                      Deductions
                    </Text>
                  </VStack>
                </View>
              </HStack>
              <View style={styles.earnings}>
                <Text
                  style={{
                    fontFamily: FONT.medium,
                    fontSize: 18,
                    color: "#9B88ED",
                    marginBottom: 6,
                  }}
                >
                  Earnings
                </Text>
                <HStack space={0} justifyContent={"space-between"} mb={2}>
                  <Text style={styles.earningsTitle}>Basic</Text>
                  <Text style={styles.earningsAmount}>
                    ${activeData[0].basic}
                  </Text>
                </HStack>
                <HStack space={0} justifyContent={"space-between"} mb={2}>
                  <Text style={styles.earningsTitle}>HRA</Text>
                  <Text style={styles.earningsAmount}>
                    ${activeData[0].hra}
                  </Text>
                </HStack>
                <HStack space={0} justifyContent={"space-between"} mb={2}>
                  <Text style={styles.earningsTitle}>Allowances</Text>
                  <Text style={styles.earningsAmount}>
                    ${activeData[0].allowances}
                  </Text>
                </HStack>
              </View>
              <View style={styles.deductions}>
                <View style={{ padding: 16 }}>
                  <Text
                    style={{
                      fontFamily: FONT.medium,
                      fontSize: 18,
                      color: "#FFA84A",
                      marginBottom: 6,
                    }}
                  >
                    Deductions
                  </Text>
                  <HStack space={0} justifyContent={"space-between"} mb={2}>
                    <Text style={styles.earningsTitle}>Employee PF</Text>
                    <Text style={styles.earningsAmount}>
                      ${activeData[0].pf}
                    </Text>
                  </HStack>
                  <HStack space={0} justifyContent={"space-between"} mb={2}>
                    <Text style={styles.earningsTitle}>Income Tax</Text>
                    <Text style={styles.earningsAmount}>
                      ${activeData[0].incomeTax}
                    </Text>
                  </HStack>
                  <HStack space={0} justifyContent={"space-between"}>
                    <Text style={styles.earningsTitle}>Insurance</Text>
                    <Text style={styles.earningsAmount}>
                      ${activeData[0].insurance}
                    </Text>
                  </HStack>
                </View>
                <View
                  style={{
                    borderTopColor: COLORS.lightWhite,
                    borderTopWidth: 1,
                    padding: 16,
                  }}
                >
                  <HStack space={0} justifyContent={"space-between"}>
                    <Text
                      style={{
                        fontFamily: FONT.medium,
                        fontSize: 18,
                        color: "#FFA84A",
                        marginBottom: 6,
                      }}
                    >
                      Gross Deductions
                    </Text>
                    <Text
                      style={{
                        fontFamily: FONT.medium,
                        fontSize: 18,
                        color: "#FFA84A",
                        marginBottom: 6,
                      }}
                    >
                      ${grossDeduction}
                    </Text>
                  </HStack>
                </View>
              </View>
            </>
          ) : (
            <PayslipSkeleton />
          )}
        </View>
      </ScrollView>
      <Navbar navigation={navigation} page={"Payslip"} />
    </SafeAreaView>
  );
};

export default Payslip;
