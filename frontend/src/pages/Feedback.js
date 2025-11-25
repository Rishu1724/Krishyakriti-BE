import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { BACKEND_URL } from "../config";

export default function FeedbackScreen() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const submitFeedback = async () => {
    setStatus("Submitting...");

    const res = await fetch(`${BACKEND_URL}/feedback`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setStatus("Submitted!");
      setForm({ name: "", email: "", message: "" });
    } else {
      setStatus("Error submitting");
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 26, fontWeight: "bold" }}>Feedback</Text>

      <TextInput
        placeholder="Name"
        value={form.name}
        onChangeText={(t) => setForm({ ...form, name: t })}
        style={{
          borderWidth: 1,
          padding: 12,
          borderRadius: 10,
          marginTop: 20,
        }}
      />

      <TextInput
        placeholder="Email"
        value={form.email}
        onChangeText={(t) => setForm({ ...form, email: t })}
        style={{
          borderWidth: 1,
          padding: 12,
          borderRadius: 10,
          marginTop: 10,
        }}
      />

      <TextInput
        placeholder="Message"
        value={form.message}
        onChangeText={(t) => setForm({ ...form, message: t })}
        multiline
        style={{
          borderWidth: 1,
          padding: 12,
          borderRadius: 10,
          height: 120,
          marginTop: 10,
        }}
      />

      <TouchableOpacity
        onPress={submitFeedback}
        style={{
          backgroundColor: "#009179",
          padding: 15,
          borderRadius: 10,
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <Text style={{ color: "white", fontWeight: "bold" }}>Submit</Text>
      </TouchableOpacity>

      {status !== "" && (
        <Text style={{ marginTop: 15, fontWeight: "bold" }}>{status}</Text>
      )}
    </View>
  );
}
