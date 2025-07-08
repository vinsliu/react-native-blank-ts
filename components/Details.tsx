import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../router";
import { StatusBar, Text, View } from "react-native";
import styles from "../styles";
import React from "react";

type Props = NativeStackScreenProps<RootStackParamList, "Details">;
export default function ({ route, navigation }: Props) {
  const { title, stock, content } = route.params;
  React.useEffect(() => {
    navigation.setOptions({ title });
  }, []);
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text>
        {content} and stock is {stock}
      </Text>
    </View>
  );
}
