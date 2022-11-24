import react from "react";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
//const data = [{ name: 'Widget1', uv: 400, pv: 2400, amt: 2400 },{ name: 'Widget1', uv: 300, pv: 2300, amt: 2300 },{ name: 'Widget1', uv: 100, pv: 2100, amt: 1700 }];

const Widget1 = (movie) => {
    console.log(movie.info);
    return (
        <>
            <div className="bar">
                <BarChart width={730} height={250} data={movie.info.vote_average}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey={movie.info.vote_average} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey={movie.info.title} fill="#8884d8" />
                    <Bar dataKey={movie.info.vote_average} fill="#8884d8" />
                </BarChart>
            </div>
        </>
    )
}
export default Widget1;

