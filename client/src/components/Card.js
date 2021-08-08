import React from 'react'

export default function Card() {
    return (
        <div>
  <div className="container mx-auto mt-12 p-9 bg-white max-w-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300">
    <img className="rounded-xl" src="https://images.unsplash.com/photo-1547517023-7ca0c162f816" alt="" />
    <div className="flex justify-between items-center">
      <div>
        <h1 className="mt-5 text-2xl font-semibold">Aloe Cactus</h1>
        <span className="mt-2 flex">
         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            location
        </span>
        
      </div>
      <div>
        <button className="text-white text-md font-semibold bg-green-400 py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110 ">Request </button>
      </div>
    </div>
    <p className="mt-5 text-gray-700 tracking-wide">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, labore. Ea debitis beatae sequi deleniti.</p>
  </div>
</div>
        
    )
}
