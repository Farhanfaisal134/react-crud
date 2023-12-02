import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked");
    axios
      .post("https://653b0edf2e42fd0d54d4a7d1.mockapi.io/crud", {
        name: name,
        email: email,
      })
      .then(() => {
        history("/read");
      });
  }
  return (
    <div className='max-w-4xl mx-auto min-h-screen px-4 lg:px-20'>
      <h1 className='mb-4 text-4xl font-medium text-center'>Create</h1>
      <form className='flex flex-col gap-4'>
        <div className='flex flex-col'>
          <label className='text-2xl mb-2'>Name</label>
          <input className='border  border-gray-500 px-3 py-2 rounded-sm outline-none text-xl'
            onChange={(e) => setName(e.target.value)} />
        </div>
        <div className='flex flex-col'>
          <label className='text-2xl mb-2'>Email</label>
          <input className='border border-gray-500 px-3 py-2 rounded-sm outline-none text-xl'
            onChange={(e) => setEmail(e.target.value)} />
        </div>
        <button type="submit" className="bg-blue-500 text-white text-xl border-none outline-none px-3 py-2 rounded-md shadow-md max-w-fit mx-auto mt-3" onClick={handleSubmit}>Submit</button>
      </form >
    </div >
  )
}

export default Create