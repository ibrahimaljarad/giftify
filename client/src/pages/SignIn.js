import React from 'react'
import { useState } from "react";
import { useHistory } from "react-router-dom";

export default function SignIn({ handleFetch }) {

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const history = useHistory();
  const handlChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handlSingIn = async (e) => {
    e.preventDefault();
    const settings = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    };
    try {
      const fetchResponse = await fetch(
        `http://localhost:3000/sign-in`,
        settings
      );
      const data = await fetchResponse.json();
      handleFetch(data);
      history.push("/");
      return data;
    } catch (e) {
      return e;
    }
  };

    return (
        <div className="h-screen flex flex-col justify-center items-center">
            <h1 className="lg:text-2xl md:text-xl sm:text-l text-md font-black mb-14">WELCOME BACK!</h1>
              <form className="w-1/3 bg-green-50 shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handlSingIn}>
    <div className="mb-4">
      <label className="text-left block text-gray-700 text-md font-bold mb-2" for="email">
        Email
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Email" value={user.email}  onChange={handlChange}/>
    </div>
    <div className="mb-6">
      <label class="text-left block text-gray-700 text-md font-bold mb-2" for="password">
        Password
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"  value={user.password} onChange={handlChange}/>

    </div>
    <div className="flex items-center justify-between">
      <button className="w-full bg-green-400 hover:bg-green-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Sign In
      </button>
    </div>
  </form>
</div>
    )
}
