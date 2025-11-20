import { useEffect, useState } from "react";

export default function Agroforestry() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/learn/agroforestry")
      .then((res) => res.json())
      .then((d) => setData(d));
  }, []);

  if (!data) return <p>Loading...</p>;

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">{data.title}</h1>
      <p className="mt-4">{data.description}</p>

      <h2 className="text-xl font-bold mt-6">Types</h2>
      <ul className="list-disc ml-5">
        {data.types.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </div>
  );
}
