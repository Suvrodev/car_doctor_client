import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import Header from '../../Pages/Shared/Header/Header';
import Footer from '../../Pages/Shared/Footer/Footer';

const Main = () => {
    // const navigate=useNavigate()
    // navigate('/home')
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;