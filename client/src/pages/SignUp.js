import React from 'react'

export default function SignUp() {
    return (
        <div className="h-screen flex flex-col justify-center items-center">
        <h1 className="lg:text-2xl md:text-xl sm:text-l text-md font-black mb-14">SIGN UP TO GIFTIFY</h1>
          <form className="w-1/3 bg-green-50 shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
  <label className="text-left block text-gray-700 text-md font-bold mb-2" for="fullname">
    Fullname
  </label>
  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="fullname" type="text" placeholder="Fullname" />
</div>
<div className="mb-4">
  <label className="text-left block text-gray-700 text-md font-bold mb-2" for="email">
    Email
  </label>
  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Email" />
</div>
<div className="mb-6">
  <label class="text-left block text-gray-700 text-md font-bold mb-2" for="password">
    Password
  </label>
  <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />

</div>
<div className="flex items-center justify-between">
  <button className="w-full bg-green-400 hover:bg-green-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
    Sign Up
  </button>
</div>
</form>
    </div>
    )
}
