import React from "react";
import { TouchableOpacity, Image } from "react-native";

import styles from "./screenheader.style";
import { Text, View } from "native-base";

const ScreenHeaderBtn = ({ iconUrl, dimension, handlePress }) => {
  return (
    <View style={styles.btnContainer} onPress={handlePress}>
      <Image
        source={iconUrl}
        resizeMode="cover"
        style={styles.btnImg(dimension)}
      />
    </View>
  );
};

export default ScreenHeaderBtn;
