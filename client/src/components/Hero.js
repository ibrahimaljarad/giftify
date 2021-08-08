import React from 'react';
import {Link} from 'react-router-dom';
import donations from '../assets/donations.jpg'

export default function Hero() {
    return (
        <div className="mx-24 min-h-screen max-w-screen flex justify-center justify-between items-center">
            <div className="text-left mx-12">
               <h2 className="font-black text-4xl mt-5"> 
                   We Make A Living
               </h2>
               <h3 className="font-semibold text-2xl mt-5"> 
                   By What We Get ...
               </h3>
               <h2 className="font-black text-3xl mt-5"> 
                    We Make A Life
               </h2>
               <h3 className="font-semibold text-2xl mt-5"> 
                   By What We Give ...
               </h3>
               <Link to="/add-item">
                 <button style={{backgroundColor:'#FF4500'}} className="mt-10 font-bold  text-white text-lg py-4 px-6 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110">
                    Donate Now
                  </button>
                </Link>
            </div>
            <div className="w-1/3 md:w-3/5">
                 
                 <img alt="gift" src={donations} className="object-fill" /> 
                
            </div>
       
        </div>
    )
}
