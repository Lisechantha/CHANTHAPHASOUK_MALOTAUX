import react from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
const data = [{ name: 'Widget3', uv: 400, pv: 2400, amt: 2400 },{ name: 'Widget3', uv: 100, pv: 2100, amt: 1900 }];

const Widget3 = () => {
    return (
        <>
            <LineChart width={600} height={300} data={data}>
                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="name" />
                <YAxis />
            </LineChart>
        </>
    )
}
export default Widget3;
