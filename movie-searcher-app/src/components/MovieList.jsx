import React from 'react'

const MovieList =  (props) =>{
    const FavouriteComponent = props.favouriteComponent
    return (
        <div>
            {props.movies.map((movie, index) => (
                <div className="image-container d-flex justify-content-start m-3">
                    <img src={movie.Poster} alt="movie"/>
                    <div
                        onClick = {() => props.handleFavouritesClick(movie)}
                        className="overlay d-flex align-items-center justify-content-center"
                    >
                        <FavouriteComponent/>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default MovieList