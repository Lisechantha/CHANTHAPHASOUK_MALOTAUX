import react, { useEffect, useState } from "react";
import Canvawidget from "./Canvawidget";
import Card from './Card';
import Widget1 from  "./Widget1";
import Widget2 from  "./Widget2";
let API_key = "&api_key=491c441367c3f74fbdc2f5597625c8ec"
let base_url = "https://api.themoviedb.org/3";
let url = base_url + "/discover/movie?sort_by=popularity.desc" + API_key

const Main = () => {
    const [movieData, setData] = useState([]);
    const [url_set, setUrl] = useState(url);

    useEffect(() => {
        fetch(url_set).then(res => res.json()).then(data => {
            //console.log(data.results);
            setData(data.results)
        });
    }, [url_set])
    return (
        <>
            <div className="header">
                <nav>
                    <ul>
                        <li> <a href="#">Home</a></li>
                        <li> <a href="#">Gestion des données</a></li>
                    </ul>
                </nav>
                <form>
                    <div className="search-btn">
                        <input type="text" placeholder="Recherche" className="inputText">
                        </input>
                        <button><i class="fas fa-search"></i></button>
                    </div>
                </form>
            </div>
            <div className="container">
                {
                    (movieData.length == 0) ? <p className="notfound">Not Found</p> : movieData.map((res, pos) => {
                        return (
                            <><Card info={res} key={pos} /></>

                        )
                    })
                }
            </div>
            {/* <div className="container2">
                {
                    <><Canvawidget /></>
                }
            </div> */}
               <div className="container3">
                {
                    (movieData.length == 0) ? <p className="notfound">Not Found</p> : movieData.map((res, pos) => {
                        return (
                            <><Widget1 info={res} key={pos} /></>

                        )
                    })
                }
            </div>

        </>
    )
}
export default Main; 