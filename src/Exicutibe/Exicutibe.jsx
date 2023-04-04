import React from 'react';
import EData from '../Component/Data/EData';
const Exicutibe = () => {
    return (
        <div>
            <h1 className="text-center text-4xl font-bold font-serif mt-5">
                EXECUTIVE COUNCIL MEMBER
            </h1>
            <div className='grid lg:grid-cols-3 lg:grid-rows-2 mt-5 md:grid-cols-2 md:grid-rows-3 justify-items-center lg:px-20'>
                {EData.map(data =>
                    <div class="card h-96 w-64 mt-5 ">
                        <img className="card-img-top h-64 img-fluid " src={data.img} alt="Card image cap" />
                        <div class="card-body text-center font-mono font-bl mt-3  ">
                            <h1 className='font-bold text-xl '>{data.name}</h1>
                            <p class="card-text font-semibold text-lg">{data.Pos}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Exicutibe;