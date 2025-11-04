import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const AI_URL = process.env.AI_SERVICE_URL;

export async function getAIPrediction(data) {
  try {
    const response = await axios.post(`${AI_URL}/predict`, data);
    return response.data;
  } catch (err) {
    console.error("Error calling AI service:", err.message);
    throw new Error("AI service unavailable");
  }
}
