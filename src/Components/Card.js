import react from "react";

const Card=()=>{
    return (
        <>
            <div className="movie">
                <img src="poster.jpg" className="poster"></img>
                <div className="movie-details">
                    <div className="box">
                        <h4 className="title">Titre</h4>
                        <h4 className="rating">9.7</h4>
                    </div>
                    <div className="overview">
                        <h1>Aperçu</h1>
                        Lorem ipsum dolor sit amet
                    </div>
                </div>
            </div>
        </>
    )
}
export default Card;