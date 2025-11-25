import { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import LearnCard from "../components/LearnCard";

export default function Learn({ navigation }) {
  const [userLocation, setUserLocation] = useState("");
  const [nearbyKVKs, setNearbyKVKs] = useState([]);
  const [searching, setSearching] = useState(false);

  const searchKVK = () => {
    if (!userLocation.trim()) {
      alert("Please enter a location.");
      return;
    }

    setSearching(true);

    setTimeout(() => {
      setNearbyKVKs([
        {
          id: 1,
          name: "KVK Bangalore Rural",
          distance: "5.2 km",
          phone: "080-12345678",
        },
        {
          id: 2,
          name: "KVK Hassan",
          distance: "12.8 km",
          phone: "08172-234567",
        },
      ]);
      setSearching(false);
    }, 1200);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Learn</Text>

      {/* Top Cards */}
      <View style={styles.cardRow}>
        <LearnCard
          label="Multicropping"
          icon="🌱"
          onPress={() => navigation.navigate("Multicropping")}
        />
        <LearnCard
          label="Agroforestry"
          icon="🌳"
          onPress={() => navigation.navigate("Agroforestry")}
        />
        <LearnCard
          label="Market Info"
          icon="🏪"
          onPress={() => navigation.navigate("Market")}
        />
      </View>

      {/* KVK SEARCH */}
      <Text style={styles.sectionTitle}>Find Nearest KVK</Text>

      <TextInput
        placeholder="Enter your location"
        value={userLocation}
        onChangeText={setUserLocation}
        style={styles.input}
      />

      <TouchableOpacity style={styles.searchBtn} onPress={searchKVK}>
        <Text style={styles.searchBtnText}>
          {searching ? "Searching..." : "Search"}
        </Text>
      </TouchableOpacity>

      {/* Display Search Results */}
      {nearbyKVKs.length > 0 && (
        <View style={styles.resultsContainer}>
          {nearbyKVKs.map((kvk) => (
            <View key={kvk.id} style={styles.kvkCard}>
              <Text style={styles.kvkTitle}>{kvk.name}</Text>
              <Text style={styles.kvkText}>Distance: {kvk.distance}</Text>
              <Text style={styles.kvkText}>Phone: {kvk.phone}</Text>
            </View>
          ))}
        </View>
      )}

      {/* Feedback Button */}
      <TouchableOpacity
        style={styles.feedbackBtn}
        onPress={() => navigation.navigate("Feedback")}
      >
        <Text style={styles.feedbackBtnText}>Send Feedback</Text>
      </TouchableOpacity>

      <View style={{ height: 50 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
  },
  header: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
  },
  cardRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 30,
  },
  input: {
    borderWidth: 1,
    borderColor: "#009179",
    borderRadius: 10,
    padding: 12,
    marginTop: 10,
  },
  searchBtn: {
    marginTop: 10,
    backgroundColor: "#009179",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  searchBtnText: {
    color: "white",
    fontWeight: "bold",
  },
  resultsContainer: {
    marginTop: 20,
  },
  kvkCard: {
    backgroundColor: "#E7E1C6",
    marginBottom: 10,
    padding: 15,
    borderRadius: 10,
  },
  kvkTitle: {
    fontWeight: "bold",
    fontSize: 16,
  },
  kvkText: {
    marginTop: 4,
  },
  feedbackBtn: {
    marginTop: 30,
    backgroundColor: "#006A58",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  feedbackBtnText: {
    color: "white",
    fontWeight: "bold",
  },
});
