import React,{useState,useEffect} from 'react';
import './listing.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ListingDisplay from './listingDisplay';


const baseUrl = process.env.REACT_APP_API_URL

const Listing = () => {

    let params = useParams();
    const [restList,setRestList] = useState();

    //console.log(params.mealId);
    let mealId = params.mealId;

    useEffect(() => {
        axios.get(`${baseUrl}/restaurant?mealtype_id=${mealId}`)
        .then((res) => {
            setRestList(res.data)
        })
    },[])

    return(
        <>
            <div className="row">
                <div id="mainListing">
                    <div id="filter">

                    </div>
                    <ListingDisplay  listData={restList}/>
                </div>
                
            </div>
        </>
    )
}


export default Listing
