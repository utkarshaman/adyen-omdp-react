import React, { useState } from "react";
import { Fragment } from "react";
import "./SearchBar.css";

let baseURL="https://www.omdbapi.com/";
let apikey="faf5451a"; 

let previousSearch="";

function SearchBar(movieObject) {
    const [searchText,setSearchText]= useState('');
    
    const setValueChange=(event)=>{
        setSearchText(event.target.value);
    }

    const handleSearchClick =(event) =>{
        if(previousSearch!==searchText){
            fetchMovies().then(movies=>{
                console.log(movies);
                movieObject.setMovieList(movies.Search);
                movieObject.setSearchTextReturn(searchText);
                movieObject.setTotalCount(movies.totalResults);
                previousSearch=searchText;
            });
        }
    }

    const onKeyPress =(event)=>{
        if(event.key === 'Enter'){
            handleSearchClick();
        }
    }

    async function fetchMovies(){
        let finalUrl=baseURL+"?s="+ searchText +"&apikey="+apikey;
        const response= await fetch(finalUrl);
        return response.json()
    }
    return (
        <Fragment>
            <div className="searchAndImage">
                <div className="omdbLogo">OMDB</div>
                <input type="text" value={searchText} placeholder="Search movie title here..." onChange={setValueChange} className="searchInputText" onKeyPress={onKeyPress}></input>
                {/* <img src={SearchIcon} alt="searchIcon" className="searchIcon"></img> */}
                <button className="searchButton" onClick={handleSearchClick}>Search</button>
            </div>
        </Fragment>
    );
}

export default SearchBar;