import React from 'react';
import Events from '../Data/Data';
import './Event.css';
const Event = () => {
    return (
        <div className='mt-3' id="Event">
            <h1 className="text-center text-4xl font-bold font-serif">
                EVENTS
            </h1>
            <div className='grid lg:grid-cols-3  lg:grid-rows-2  lg:gap-4 lg:m-10 justify-items-center md:grid-cols-2 md:grid-rows-3 md:gap-3 md:m-5 '>
                {Events.map(data => (
                    <div class="card  w-80   mt-4" >
                        <div className='grid justify-items-center'>
                            <img class="card-img-top h-20 w-40 img-fluid mt-5 " src={data.img} alt="Card image cap" />
                        </div>
                        <div class="card-body grid justify-items-start">
                            <h5 class="card-title font-bold text-xl">{data.name}</h5>
                            <p class="card-text text-lg font-semibold">{data.Rule}</p>
                            <p class="card-text text-lg font-semibold">Reg fee: {data.Fee}</p>
                            <a href="#" class="btn btn-primary mt-4">Registration Now</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Event;