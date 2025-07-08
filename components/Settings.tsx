import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../router";
import { Button, StatusBar, Text, View } from "react-native";
import styles from "../styles";

type Props = NativeStackScreenProps<RootStackParamList>;
export default function Settings({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <Text>Settings Screen</Text>
      <Button title="Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}
