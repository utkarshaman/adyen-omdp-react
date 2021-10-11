import React, { useState } from "react";
import { Fragment } from "react";
import "./MovieCard.css"
import CardDetails from "./CardDetails";

function MovieCard({movieList}){
    return (
        <Fragment>
            <div className="movieList">
                {movieList.map(item=>{
                    return <CardDetails item={item} key={item.imdbID}></CardDetails>
                })}
            </div>
        </Fragment>
    );
}

export default MovieCard;