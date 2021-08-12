
import React, {useState} from 'react';

export default function Card({gift, userData}) {
const [requestBtnText,setRequestBtnText]=useState('request')

//const [donorInfo, setDonorInfo]=useState({id:null})

// const fetchDonorInfo = async (e) => {
//   console.log(JSON.stringify(gift.UserId))
//   const settings = {
//     method: "GET",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({id:gift.UserId}),
//   };
//   try {
//     const fetchResponse = await fetch(
//       `http://localhost:8000/get-donor-info`,
//       settings
//     );
//     const data = await fetchResponse.json();
//     console.log('data',data);
//     //setDonorInfo(data);
//     return data;
//   } catch (e) {
//     return e;
//   }
// };


  const handleRequest = () => {
    //console.log(donorInfo)
    setRequestBtnText('requested')
    //fetchDonorInfo()
  }
    return (
        <div>
  <div className="container mx-auto mt-12 p-9 bg-white max-w-sm rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition duration-300">
    <div classname="">
    <img className="rounded-xl object-cover h-48 w-full" src={gift.imgUrl} alt="" /></div>
    <div className="flex justify-between items-center">
      <div>
        <h1 className="mt-5 text-left text-2xl font-semibold">{gift.title}</h1>
        <span className="mt-2 flex">
         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            {gift.location}
        </span>
        
      </div>
      <div>
        {userData.firstName && gift.UserId!==userData.userId?
        <button className="text-white text-md font-semibold bg-green-400 py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu hover:scale-110 "
                onClick={handleRequest} >
                    {requestBtnText}
         </button> : 
         <button  className="cursor-not-allowed text-white text-md  bg-green-200 font-semibold  py-2 px-4 rounded-lg shadow-md hover:shadow-lg transition duration-500 transform-gpu" >
          {gift.UserId===userData.userId? "My Donation":"Request"}
         </button>
         
         }
      </div>
    </div>
    <p className="mt-5 text-left text-gray-700 tracking-wide">{gift.description}</p>
  </div>
</div>
        
    )
}
