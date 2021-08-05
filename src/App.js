import React from 'react'
import {useState} from 'react'
import {MoviesData} from "./Data"
import MovieList from "./Component/MovieList"
import  Search  from './Component/Search'
import AddMovie from './Component/AddMovie'
import './App.css';
import './index.css'



 function App() {
   const[movies, setMovies]=useState(MoviesData);
   const [searchTitle, setSearchTitle]=useState('');
   const[searchRating ,setSearchRating]=useState(0);
  
  return (
<>
   
   
    <div className="app" >
    
            <Search setSearchTitle={setSearchTitle} searchRating={searchRating} setSearchRating={setSearchRating} />
           <AddMovie setMovies={setMovies} movies={movies} /> 
           
               <MovieList movies={movies} searchTitle={searchTitle} searchRating={searchRating}  />
     
    </div>
  </>
  )
}

export default App;