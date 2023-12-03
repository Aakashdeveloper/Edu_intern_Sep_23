import React,{useState,useEffect} from 'react';
import './listing.css';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ListingDisplay from './listingDisplay';
import CuisineFilter from '../filters/cuisineFilter';
import CostFilter from '../filters/costFilter';
import Header from '../Header';


const baseUrl = process.env.REACT_APP_API_URL

const Listing = () => {

    let params = useParams();
    const [restList,setRestList] = useState();

    //console.log(params.mealId);
    let mealId = params.mealId;

    useEffect(() => {
        sessionStorage.setItem('mealId',mealId)
        axios.get(`${baseUrl}/restaurant?mealtype_id=${mealId}`)
        .then((res) => {
            setRestList(res.data)
        })
    },[]);

    const setDataPerFilter = (data) => {
        setRestList(data)
    }

    return(
        <>
            <Header/>
            <div className="row">
                <div id="mainListing">
                    <div id="filter">
                        <CuisineFilter mealId={mealId}
                        restPerCuisine={(data) => {setDataPerFilter(data)}}/>
                        <CostFilter restPerCost={(data) => {setDataPerFilter(data)}}
                         mealId={mealId}/>
                    </div>
                    <ListingDisplay  listData={restList}/>
                </div>
                
            </div>
        </>
    )
}


export default Listing
