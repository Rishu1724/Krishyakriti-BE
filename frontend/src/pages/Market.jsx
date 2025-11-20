import { useEffect, useState } from "react";

export default function Market() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/learn/market")
      .then((res) => res.json())
      .then((d) => setData(d));
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">{data.title}</h1>

      <h2 className="text-xl font-bold mt-6">Sources</h2>
      <ul className="list-disc ml-5">
        {data.sources.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>
    </div>
  );
}
