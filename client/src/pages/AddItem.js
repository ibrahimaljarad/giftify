import React from 'react';
import Dropzone from 'react-dropzone';
import ImgDropzone from '../components/ImgDropzone';


export default function AddItem() {
    return (
        <div className="h-screen flex flex-col justify-center items-center">
        <h1 className="lg:text-2xl md:text-xl sm:text-l text-md font-black mb-14">ADD YOUR DONATION</h1>
          <form style={{backgroundColor:'#FCD299'}} className="w-1/3 shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
  <label className="text-left block text-gray-700 text-md font-bold mb-2" for="title">
    Title
  </label>
  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" placeholder="Title" />
</div>
<div className="mb-4">
<label className="text-left block text-gray-700 text-md font-bold mb-2" for="description">Description</label>
<textarea id="about" name="about" rows="3" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Desscription"></textarea>

</div>
<div className="mb-4">
  <label className="text-left block text-gray-700 text-md font-bold mb-2" for="location">
    Location
  </label>
  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="loaction" type="text" placeholder="Loaction" />
</div>
<div className="mb-4">
    <label className="text-left block text-gray-700 text-md font-bold mb-2" id="drapzone">Upload Image</label>
    <ImgDropzone />
</div>
                  
<div className="flex items-center justify-between">
  <button style={{backgroundColor:'#FF4500'}} className="w-full hover:bg-green-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
    Submit
  </button>
</div>
</form>
    </div>

       
    )
}
