import React from 'react';
import Dropzone from 'react-dropzone';
import ImgDropzone from '../components/ImgDropzone';
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

export default function AddItem({userData}) {
  const [gift, setGift] = useState({
    title: "",
    imgUrl: "",
    description: "",
    loaction:""
  });
  const [gifts, setGifts] = useState(null);
  const handlChange = (e) => {
    setGift({ ...gift, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    console.log(userData)
    const fetchGifts = async () => {
      const data = await fetch("http://localhost:8000/get-gifts", {
        headers: {
          Authorization: `somesupersecretsecret ${userData.token}`,
        },
        
      });
      const gifts = await data.json();
      
      setGifts(gifts);
    };
    fetchGifts();
   
  }, []);
  const history = useHistory();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    history.push("/");
    const settings = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${userData.token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(gift),
    };
    try {
      const fetchResponse = await fetch(
        `http://localhost:8000/add-gifts`,
        settings
      );
      const data = await fetchResponse.json();
      return data;
    } catch (e) {
      return e;
    }
  };
  

    return (
        <div className="h-screen flex flex-col justify-center items-center">
        <h1 className="lg:text-2xl md:text-xl sm:text-l text-md font-black mb-14">ADD YOUR DONATION</h1>
          <form style={{backgroundColor:'#FCD299'}} className="w-1/3 shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
          <div className="mb-4">
  <label className="text-left block text-gray-700 text-md font-bold mb-2" for="title">
    Title
    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
         id="title"
         name="title" 
         type="text" 
         placeholder="Title" 
         value={gift.title}
         onChange={handlChange}/>
  </label>
  
</div>
<div className="mb-4">
<label className="text-left block text-gray-700 text-md font-bold mb-2" for="description">Description

<textarea rows="3" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Desscription" value={gift.description}
                  id="description"
                  name="description"
                  type="text"
                  onChange={handlChange}></textarea>
</label>


</div>
<div className="mb-4">
  <label className="text-left block text-gray-700 text-md font-bold mb-2" for="location">
    Location
  </label>
  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
         id="location" 
         name="location"
         type="text" 
         placeholder="Location"
         onChange={handlChange} />
</div>
<div className="mb-4">
  <label className="text-left block text-gray-700 text-md font-bold mb-2" for="location">
    image URL
  </label>
  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
         id="loaction" 
         name="imgUrl"
         type="text" 
         placeholder="imgUrl"
         onChange={handlChange} />
</div>
{/* <div className="mb-4">
    <label className="text-left block text-gray-700 text-md font-bold mb-2" id="drapzone">Upload Image</label>
    
</div> */}
                  
<div className="flex items-center justify-between">
  <button style={{backgroundColor:'#FF4500'}} className="w-full hover:bg-green-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
    Submit
  </button>
</div>
</form>
    </div>



       
    )
}
