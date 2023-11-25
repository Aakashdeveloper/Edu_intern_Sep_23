import React, { useState,useEffect } from 'react';
import './QuickSearch.css';
import QuickDisplay  from './QuickDisplay';

const baseUrl = process.env.REACT_APP_API_URL

const QuickSearch = () => {

    const [mealType,setMealType] = useState([]);

    useEffect(() => {
        fetch(`${baseUrl}/quicksearch`,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            setMealType(data)
        })
    },[])

    return(
        <div id="quickSearch">
            <span className="quickHeading">Quick Search</span>
            <span className="quickSubHeading">Find Restaurants By MealType</span>
            <QuickDisplay mealData={mealType}/>
        </div>
    )
}

export default QuickSearch;