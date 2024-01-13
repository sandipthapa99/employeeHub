import { Center, Text, VStack } from "native-base";
import React from "react";
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  View,
} from "react-native";
import { COLORS, images } from "../../constants";
import styles from "./profile.style";

const Profile = ({ navigation }) => {
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
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
