import { Text, View } from "native-base";
import React from "react";
import styles from "./statusButton.style";

const StatusButton = ({ status }) => {
  return (
    <View style={styles.container(status)}>
      <Text style={styles.text}>{status}</Text>
    </View>
  );
};

export default StatusButton;
