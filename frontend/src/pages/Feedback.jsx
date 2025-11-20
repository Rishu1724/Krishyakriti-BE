import { useState } from "react";

export default function Feedback() {
  const [feedback, setFeedback] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleSubmit = async () => {
    setStatus("Submitting...");

    const res = await fetch("http://localhost:5000/api/feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(feedback),
    });

    if (res.ok) {
      setStatus("Submitted!");
      setFeedback({ name: "", email: "", message: "" });
    } else {
      setStatus("Failed. Try again.");
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Send Feedback</h1>

      <input
        className="w-full border p-3 rounded mb-3"
        placeholder="Name"
        value={feedback.name}
        onChange={(e) => setFeedback({ ...feedback, name: e.target.value })}
      />

      <input
        className="w-full border p-3 rounded mb-3"
        placeholder="Email"
        value={feedback.email}
        onChange={(e) => setFeedback({ ...feedback, email: e.target.value })}
      />

      <textarea
        className="w-full border p-3 rounded mb-3"
        rows="5"
        placeholder="Message"
        value={feedback.message}
        onChange={(e) => setFeedback({ ...feedback, message: e.target.value })}
      />

      <button
        onClick={handleSubmit}
        className="w-full bg-[#009179] text-white py-3 rounded"
      >
        Submit
      </button>

      <p className="mt-3">{status}</p>
    </div>
  );
}
