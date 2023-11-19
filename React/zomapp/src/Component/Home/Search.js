import React,{useState,useEffect} from 'react';
import './Search.css';

const baseUrl = process.env.REACT_APP_API_URL

const Search = () => {

    const [title] = useState(' Find Best Place For Food');
    const [location,setLocation] = useState([]);
    const [restaurant,setRestaurant] = useState([]);
    

    useEffect(() => {
        console.log("renderComponent")
        fetch(`${baseUrl}/location`,{method:'GET'})
        .then((res) =>  res.json())
        .then((data) => {
            setLocation(data);
        })
    },[])

    const renderCity = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <option key={item.state_id} value={item.state_id}>
                        {item.state}
                    </option>
                )
            })
        }
    }

    const handleCity = (event) => {
        console.log(event.target.value);
        let stateId = event.target.value;
        fetch(`${baseUrl}/restaurant?stateId=${stateId}`,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            setRestaurant(data)
        })
    }

    const renderRestaurant = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <option key={item.restaurant_id} value={item.restaurant_id}>
                        {item.restaurant_name} | {item.address}
                    </option>
                )
            })
        }
    }
 
    return(
        <div id="search">
           <div className="logo">
               <span>D!</span>
           </div>
           <div id="heading">
              {title}
           </div>
           <div className="dropdown">
                <select onChange={handleCity}>
                   <option>-----SELECT YOUR CITY-----</option>
                    {renderCity(location)}
                </select>
                <select id="restSelect">
                    <option>-----SELECT YOUR RESTAURANTS-----</option>
                    {renderRestaurant(restaurant)}
                </select>
           </div>
        </div>
    )
}

export default Search;