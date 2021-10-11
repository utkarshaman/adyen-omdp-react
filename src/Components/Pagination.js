import React, { Fragment, useEffect, useState } from "react";
import { baseURL} from "../BaseVariables";
import { apikey} from "../BaseVariables"
import "./Pagination.css"

function Pagination({movieList,setMovieList,searchTextReturn}){
    const [pageValue,setPageValue]= useState(1);
    const [previousButtonState, setPreviousButtonState]=useState(false);
    const [nextButtonState,setNextButtonState]=useState(false);
    const [cssPrevious,setCssPrevious]= useState("previousButton");
    const [cssNext,setCssNext]= useState("nextButton");

    const onNextClick =()=>{
        setPageValue(pageValue+1);
        fetchMovies(pageValue+1).then((movies)=>{
            setMovieList(movies.Search);
        })
    }

    const onPreviousClick=()=>{
        setPageValue(pageValue-1);
        fetchMovies(pageValue-1).then((movies)=>{
            setMovieList(movies.Search);
        })
    }

    async function fetchMovies(newPageValue){
        let finalUrl=baseURL+"?s="+ searchTextReturn +"&apikey="+apikey + "&page=" + newPageValue;
        const response= await fetch(finalUrl);
        return response.json();
    }

    useEffect(()=>{
        if(pageValue===1){
            setPreviousButtonState(true);
            setCssPrevious("previousButtonDisabled");
        }else{
            setPreviousButtonState(false);
            setCssPrevious("previousButton");
        }
        if (pageValue===Math.round(movieList.totalResults/10)){
            setNextButtonState(true);
            setCssNext("nextButtonDisabled");
        }else{
            setNextButtonState(false);
            setCssNext("nextButton");
        }
    },[pageValue])

    return (
        <Fragment>
            <div className="pagination">
                <button disabled={previousButtonState} onClick={onPreviousClick} className={cssPrevious}>Previous</button>
                <input type="text" disabled={true} value={pageValue} className="pageValue"></input>
                <button disabled={nextButtonState} onClick={onNextClick} className={cssNext}>Next</button>
            </div>
        </Fragment>
    )
}

export default Pagination;