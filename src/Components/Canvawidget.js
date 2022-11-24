import react from "react";
import Widget1 from "./Widget1";
import Widget2 from "./Widget2";
import Widget3 from "./Widget3";


const Canvawidget = () => {
    //console.log(movie.info);
    return (
        <>
            <div className="grid text-center">
                <div className="g-col-6"><Widget1 /></div>
                <div className="g-col-6"><Widget2 /></div>

                {/* <div className="g-col-6"><Widget3 /></div>
                <div className="g-col-6"><Widget1 /></div> */}
            </div>
        </>
    )
}
export default Canvawidget;