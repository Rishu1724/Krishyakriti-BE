import { TouchableOpacity, Text, View } from "react-native";

export default function LearnCard({ label, icon, onPress }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: "#E7E1C6",
        padding: 20,
        borderRadius: 16,
        alignItems: "center",
      }}
    >
      <View
        style={{
          backgroundColor: "#009179",
          width: 60,
          height: 60,
          borderRadius: 30,
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 10,
        }}
      >
        <Text style={{ fontSize: 30, color: "white" }}>{icon}</Text>
      </View>

      <Text style={{ fontWeight: "bold", fontSize: 16 }}>{label}</Text>
    </TouchableOpacity>
  );
}
