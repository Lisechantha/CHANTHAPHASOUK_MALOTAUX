import react from "react";
import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

const url2 =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=491c441367c3f74fbdc2f5597625c8ec";

export default function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(url2)
      .then((r) => r.json())
      .then(setData);
  }, []);
  return (
    // BarChart => name + value
    <BarChart
      width={600}
      height={300}
      margin="auto"
      data={data.map((it) => ({ name: it.name, value: it.vote_average}))}
    >
      {/* XAxis => dataMonth */}
      <XAxis dataKey="name" />

      {/* YAxis => value */}
      <YAxis />

      <Tooltip />

      {/* Bar => name */}
      <Bar dataKey="value" stackId="a" fill="#8884d8" />
    </BarChart>
  );
}


