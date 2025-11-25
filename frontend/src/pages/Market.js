import { ScrollView, Text } from "react-native";

export default function MarketScreen() {
  return (
    <ScrollView style={{ padding: 20 }}>
      <Text style={{ fontSize: 26, fontWeight: "bold" }}>Market Info</Text>

      <Text style={{ marginTop: 20 }}>
        Market insights for farmers...
      </Text>
    </ScrollView>
  );
}
