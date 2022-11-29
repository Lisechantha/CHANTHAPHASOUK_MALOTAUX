import React, { useEffect, useState } from "react";
import { PieChart, Pie} from 'recharts';

const url =
  "https://api.monimpacttransport.fr/beta/getEmissionsPerDistance?km=10";

export default function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((r) => r.json())
      .then(setData);
  }, []);
  
  return (
    <div className="type">
            {
                (data.length == 0) ? <p className="notfound">Not Found</p> : <h4 className="typeT">{data[1].name}</h4>
            }
    </div>
  );
}

