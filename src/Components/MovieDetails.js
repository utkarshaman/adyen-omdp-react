import React, { useState } from "react";
import { Fragment } from "react";
import "./MovieDetails.css";
import Tooltip from "./Tooltip";

function MovieDetails({details}){
    console.log({details});
    return (
        <Fragment>
            <div className="movieDetails">
                <div className="ratings">
                    {/* {details.details.Ratings.map(item=>item)} */}
                    {details?.Ratings?.length>0?details.Ratings.map(item=>{
                        return (
                            <div className="ratingValue" key={item.Source}>{item.Source==="Internet Movie Database"?"imdb":item.Source}   {item.Value}</div>
                        );
                    }):null}
                </div>
                <Tooltip content={details.Plot} direction="below">
                    <div className="plot">{details.Plot}</div>
                    
                </Tooltip>
                
                <div className="actors"><span className="actorsSpan">Actors:</span> {details.Actors}</div>
                <div><span className="release">Released: </span>{details.Released}</div>
                <div><span className="director">Director: </span>{details.Director}</div>
                <div><span className="genre">Genre: </span>{details.Genre}</div>
                <div><span className="awards">Awards: </span>{details.Awards}</div>
                <div><span className="language">Languages: </span>{details.Language}</div>
                <div><span className="writer">Writers: </span>{details.Writer}</div>
            </div>
        </Fragment>
    )
}

export default MovieDetails;