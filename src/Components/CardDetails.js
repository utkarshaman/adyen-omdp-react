import React, { useState } from "react";
import { Fragment } from "react";
import "./CardDetails.css"
import downArrow from "../images/downArrow.png";
import { baseURL} from "../BaseVariables";
import { apikey} from "../BaseVariables"
import MovieDetails from "./MovieDetails";

function CardDetails({item}){
    const onDetailsClick=(event)=>{
        console.log("details");
        fetchMovieDetails().then(itemDetail=>{
            if(detailsButtonPlusMinus==="+"){
                setDetailsButtonPlusMinus("-");
                setDetailsVisible("");
                setDetails(itemDetail);
            }else{
                setDetailsButtonPlusMinus("+");
                setDetailsVisible("detailsVisible");
                setDetails({});
            }
            console.log(itemDetail)
            
        })
    }

    async function fetchMovieDetails(){
        let finalUrl=baseURL+"?i="+ item.imdbID +"&apikey="+apikey;
        const response= await fetch(finalUrl);
        return response.json();
    }

    const [details,setDetails]=useState({});
    const [detailsButtonPlusMinus, setDetailsButtonPlusMinus]=useState('+');
    const [detailsVisible,setDetailsVisible] = useState("detailsVisible");

    return (
        <Fragment>
            <div className="cardDetails">
                <img src={item.Poster} className="posterImage"></img>
                <div className="cardRightSide">
                    <div className="RightTitle">{item.Title}</div>
                    <div onClick={onDetailsClick} className="detailsButton">Details
                        <div className="detailsButtonPlusMinus">{detailsButtonPlusMinus}</div>
                    </div>
                    <div className={detailsVisible}>{details?<MovieDetails details={details}/>:null}</div>
                </div>
                
            </div>
        </Fragment>
    )
}

export default CardDetails;