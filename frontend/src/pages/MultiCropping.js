import { View, Text, ScrollView } from "react-native";

export default function MulticroppingScreen() {
  return (
    <ScrollView style={{ padding: 20 }}>
      <Text style={{ fontSize: 26, fontWeight: "bold" }}>Multicropping</Text>

      <Text style={{ marginTop: 20 }}>
        Multicropping is growing multiple crops in the same field...
      </Text>
    </ScrollView>
  );
}
