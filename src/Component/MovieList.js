import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({movies, searchTitle, searchRating}) =>  {
    
    return (
        <div style={{display:"flex" ,flexWrap:"wrap" , backgroundColor:"black",margin:'70px',justifyContent:'space-evenly' }} > 
            {movies
              .filter((movie)=>
             movie.name.toLowerCase().trim().includes(searchTitle.toLowerCase().trim()) &&
              movie.rating >= searchRating
               
              )
            .map((movie)=> (
                <MovieCard  movie={movie} key={movie.id} />
            ))}
        </div>
    )
}
export default MovieList