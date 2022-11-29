import react from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis,Tooltip,Legend } from 'recharts';

const Widget3 = (movie) => {
    console.log(movie.info);
    return (
        <>
            <LineChart width={730} height={250} data={movie.info}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey={movie.info.vote_average} stroke="#8884d8" />
            </LineChart>
        </>
    )
}
export default Widget3;
