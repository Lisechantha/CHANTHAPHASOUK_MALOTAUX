import react from "react";


const Card=(movie)=>{
    // console.log(movie.info);
    let img_path="https://image.tmdb.org/t/p/w500";
    return (
        <>
            <div className="movie">
                <img src={img_path+movie.info.poster_path} className="poster"></img> 
                <div className="movie-details">
                    <div className="box">
                        <h4 className="title">{movie.info.title}</h4>
                        <h4 className="rating">{movie.info.vote_average}</h4>
                    </div>
                    <div className="overview">
                        <h1>Aperçu</h1>
                        {movie.info.overwiew}
                    </div>
                </div>
            </div>
        </>
    )
}
export default Card;
