import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import Home from './Home/Home';
import Listing from './Listing/listingLogic';
import Details from './Details/detailsLogic';
import PlaceOrder from './Order/PlaceOrder';


const Routing = () => {
    return(
        <>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<Main/>}>
                        <Route index element={<Home/>}/>
                        <Route path="listing/:mealId" element={<Listing/>}/>
                        <Route path="details" element={<Details/>}/>
                        <Route path="placeOrder/:restName" element={<PlaceOrder/>}/>
                    </Route>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </>
    )
}

export default Routing;