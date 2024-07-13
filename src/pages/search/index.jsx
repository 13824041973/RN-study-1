import { View, Text } from "react-native";

export default function Search({ route }) {
  const item = route?.params || {};
  return (
    <View>
      <Text>{JSON.stringify(item)}</Text>
    </View>
  );
}
