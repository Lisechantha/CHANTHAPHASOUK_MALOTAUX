import react from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import 'bootstrap/dist/css/bootstrap.min.css'
//const data = [{ name: 'Widget1', uv: 400, pv: 2400, amt: 2400 },{ name: 'Widget1', uv: 300, pv: 2300, amt: 2300 },{ name: 'Widget1', uv: 100, pv: 2100, amt: 1700 }];
//const data=[]

const Widget1 = (movies) => {

   console.log(movies.info);
   const array = movies && movies.info && movies.info.map((DataAPI)=>({
    titre: DataAPI.title,
    note: DataAPI.vote_average
}));

console.log(array.value);

    return (
        <>
            <div className="bar">
                <BarChart width={730} height={250} data={array}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey={array.titre} />
                    <YAxis/>
                    <Tooltip />
                    <Legend />
                    <Bar dataKey={array.note} fill="#ffff"/>
                </BarChart>
            </div>
        </>
    )
}
export default Widget1;

