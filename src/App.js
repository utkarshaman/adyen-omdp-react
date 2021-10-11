import logo from './logo.svg';
import './App.css';
import SearchBar from "./Components/SearchBar"
import MovieCard from "./Components/MovieCard"
import { useState } from 'react';
import Pagination from './Components/Pagination';

function App() {
  const [movieList, setMovieList]= useState([]);
  const [searchTextReturn,setSearchTextReturn] =useState("");
  const [totalCount,setTotalCount] = useState("");

  return (
    <div className="App">
      <div className="headerSearchBar">
        <SearchBar setMovieList={setMovieList} setSearchTextReturn={setSearchTextReturn} setTotalCount={setTotalCount}></SearchBar>
      </div>
      {movieList?.length>0?<div className="headerText">Total "{totalCount}" items found with movie name "{searchTextReturn}" in it</div>:null}
      {movieList?.length>0?<MovieCard movieList={movieList}></MovieCard>:null}
      {movieList?.length>0?<Pagination movieList={movieList} setMovieList={setMovieList} searchTextReturn={searchTextReturn}></Pagination>:null}

    </div>
  );
}

export default App;
