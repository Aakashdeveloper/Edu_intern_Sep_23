import React,{useState,useEffect} from 'react';
import {useParams,useSearchParams,useNavigate,Link, Navigate} from 'react-router-dom';
import axios from 'axios';
import './details.css';
import Header from '../Header';


const baseUrl = process.env.REACT_APP_API_URL

const Details = () => {

    let navigate = useNavigate();
    let [searchParams] = useSearchParams();
    let [restDetails,setrestDetails] = useState();
    let [mealId] = useState(sessionStorage.getItem('mealId'));

    let restId = searchParams.getAll('restId');

    const restDetail = async() => {
        const rdata = await axios.get(`${baseUrl}/details/${restId}`);
        setrestDetails(rdata.data[0])
    }

    useEffect(() => {
        restDetail()
    },[]);

    const proceed = () => {
        navigate(`/placeOrder/${restDetails.restaurant_name}`)
    }

    const renderDetails = () => {
        if(restDetails){
            return(
                <>
                  <Header/>
                   <div className='tileImage'>
                    <div className='imageClass'>
                        <img src={restDetails.restaurant_thumb}
                        alt={restDetails.restaurant_name}/>
                    </div>
                    </div>
                    <div className='tileContent'>
                        <div className='content'>
                            <h1>{restDetails.restaurant_name}</h1>
                            <span id="cfeedback">231 Customers Rating Average</span>
                            <h3>Old Price <del>Rs. 450</del></h3>
                            <h3>Offer Price Rs. {restDetails.cost}</h3>
                            <h3>Best Taste of Fresh Chai with Samosa At your Door or DineIn</h3>
                                <div>
                                    <div className="icons">
                                        <img src="https://i.ibb.co/wJvrhYg/veg.png" alt=""/>
                                    </div>
                                    <div className="icons">
                                        <img src="https://i.ibb.co/mD3jpgc/sentizied.png" alt=""/>
                                    </div>
                                </div>
                        </div>
                        <hr/>
                        <div className="col-md-12">
                            <Link className='btn btn-danger'
                            to={`/listing/${mealId}`}>
                                Back
                            </Link> &nbsp;&nbsp;
                            <button className="btn btn-success"
                            onClick={proceed}>
                                Proceed
                            </button>
                        </div>
                    </div> 
                </>
            )
        }
    }
 
    return(
        <>
            <div className="main">
                {renderDetails()}
            </div>
        </>
    )
}


export default Details;