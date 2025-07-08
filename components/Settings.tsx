import React from "react";
import { StatusBar, Text, View } from "react-native";
import styles from "../styles";

export default function Settings() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text>Settings Content</Text>
    </View>
  );
}
