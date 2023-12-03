import React from 'react';
import axios from 'axios';

const baseUrl = process.env.REACT_APP_API_URL

const CostFilter = (props) => {

    const handleFilter = (event) => {
        let mealId = props.mealId;
        let cost = (event.target.value).split('-');
        let lcost = cost[0];
        let hcost = cost[1]
        let costUrl = "";
        if(event.target.value === ""){
            costUrl = `${baseUrl}/filter/${mealId}`
        }else{
            costUrl = `${baseUrl}/filter/${mealId}?lcost=${lcost}&hcost=${hcost}`
        }

        axios.get(costUrl)
            .then((res) => {props.restPerCost(res.data)})

    }

    return(
        <>
            <center><h3>Cost Filter</h3></center>
            <div style={{marginLeft:'15%'}} onChange={handleFilter}>
                <label className='radio'>
                    <input type="radio" name="cuisine" value=""/>All
                </label>
                <label className='radio'>
                    <input type="radio" name="cuisine" value="0-300"/>0-300
                </label>
                <label className='radio'>
                    <input type="radio" name="cuisine" value="301-600"/>301-600
                </label>
                <label className='radio'>
                    <input type="radio" name="cuisine" value="601-900"/>601-900
                </label>
                <label className='radio'>
                    <input type="radio" name="cuisine" value="901-1200"/>901-1200
                </label>
                <label className='radio'>
                    <input type="radio" name="cuisine" value="1201-5000"/>1201-5000
                </label>
            </div>
        </>
    )
}

export default CostFilter;