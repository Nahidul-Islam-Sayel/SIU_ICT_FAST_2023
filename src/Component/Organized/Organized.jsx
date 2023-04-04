import React from 'react';
import SIuCampus from '../Image/SIUCAMPUS.jpeg';
import './Organized.css';
const Organized = () => {
    return (
        <div className='text-center text-cyan-500 '>
            <div className='flex justify-center '>
                <img src={SIuCampus} className="img-fluid md:h-96 md:w-2/3" alt="" />
            </div>
            <br /> <br />
            <h1 className='font-bold text-black text-3xl font-mono'>Organized By</h1>  <br />
            <h1 className='font-bold text-4xl font-mono'>DEPARTMENT OF COMPUTER SCIENCE AND ENGINEERING (CSE), <br /> SIU</h1>

            <button class="text-2xl mt-3 bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-3 px-4 ">
                Visit
            </button>
        </div>
    );
};

export default Organized;