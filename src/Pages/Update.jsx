import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Update = () => {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
  }, []);
  const handleUpdate = (e) => {
    e.preventDefault();
    console.log("Id...", id);
    axios
      .put(`https://653b0edf2e42fd0d54d4a7d1.mockapi.io/crud/${id}`, {
        name: name,
        email: email,
      })
      .then(() => {
        navigate("/read");
      });
  }
  return (
    <div className='max-w-4xl mx-auto min-h-screen px-4 lg:px-20'>
      <h1 className='mb-4 text-4xl font-medium text-center'>Update</h1>
      <form className='flex flex-col gap-4'>
        <div className='flex flex-col'>
          <label className='text-2xl mb-2'>Name</label>
          <input className='border  border-gray-500 px-3 py-2 rounded-sm outline-none text-xl'
            value={name}
            onChange={(e) => setName(e.target.value)} />
        </div>
        <div className='flex flex-col'>
          <label className='text-2xl mb-2'>Email</label>
          <input className='border border-gray-500 px-3 py-2 rounded-sm outline-none text-xl'
            value={email}
            onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className='flex gap-2 max-w-fit'>
          <button type="submit" className="bg-blue-500 text-white text-xl border-none outline-none 
        px-3 py-2 rounded-md shadow-md max-w-fit mx-auto mt-3" onClick={handleUpdate}>Update</button>
          <Link to="/read">
            <button className="bg-green-500 text-white text-xl border-none outline-none 
        px-3 py-2 rounded-md shadow-md max-w-fit mx-auto mt-3"> Back </button>
          </Link>
        </div>
      </form >
    </div >
  )
}

export default Update