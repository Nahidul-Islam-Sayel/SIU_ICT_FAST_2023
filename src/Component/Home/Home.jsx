import React from 'react';
import About from '../About/About';
import bg from '../Image/Bgphoto.jpg';
import Nevbar from '../Nevbar/Nevbar';
import './Home.css';
const Home = () => {
    return (
        <div>
            <Nevbar />
            <img src={bg} className='img-fluid' alt="" srcset="" />
            <About />
        </div>
    );
};

export default Home;