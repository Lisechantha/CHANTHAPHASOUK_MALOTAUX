import react from "react";
import Card from './Card';

const Main=()=>{
    return(
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
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </>
    )
}
export default Main; 