import React,{useEffect, useState} from 'react';
import axios from 'axios';
import DisplayOrder from './DisplayOrder';

const baseUrl = process.env.REACT_APP_POST_API_URL;

const ViewOrder = () => {
    const [orders,setOrder] = useState();

    useEffect(() => {
        axios.get(`${baseUrl}/orders`).then((res) => {setOrder(res.data)})
    })

    return(
        <>
            <DisplayOrder orderData={orders}/>
        </>
    )
}

export default ViewOrder;