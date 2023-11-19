import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import Home from './Home/Home';


const Routing = () => {
    return(
        <>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<Main/>}>
                        <Route index element={<Home/>}/>
                    </Route>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </>
    )
}

export default Routing;