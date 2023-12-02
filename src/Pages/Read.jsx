import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Read = () => {
  const [data, setData] = useState([]);
  const [input, setInput] = useState('')

  function getData() {
    axios
      .get("https://653b0edf2e42fd0d54d4a7d1.mockapi.io/crud")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  }
  const handleDelete = (id) => {
    axios
      .delete(`https://653b0edf2e42fd0d54d4a7d1.mockapi.io/crud/${id}`)
      .then(() => {
        getData();
      });
  }
  const setToLocalStorage = (id, name, email) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
  }
  const inputHandler = (e) => {
    setInput(e.target.value.toLowerCase())
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className='max-w-5xl mx-auto '>
      <h1 className='text-4xl font-medium text-center mb-4'>Read Data</h1>
      <div className='flex flex-col justify-center items-center gap-2 my-2 '>
        <label className='text-3xl font-medium'>Seach_Item</label>
        <input className='border border-gray-500 px-3 py-2 rounded-sm outline-none text-xl w-[50%]'
          onChange={inputHandler} />
      </div>
      <div className='flex flex-col w-full gap-4 py-4'>
        {data.filter((ele) => {
          if (ele === '') {
            return ele
          } else {
            return (ele.name.toLowerCase().includes(input) ||
              (ele.email.toLowerCase().includes(input))
            )
          }
        }).map((item) => (
          <div className='grid md:grid-cols-5 gap-3 items-center md:text-left justify-center text-center px-4 py-3 border border-b-black w-full'>
            <span className='text-2xl capitalize font-medium'>{item.id}</span>
            <h1 className='text-2xl capitalize'>{item.name}</h1>
            <h2 className=' md:col-span-2 text-2xl'>{item.email}</h2>
            <div className='flex gap-1 items-center w-full'>
              <Link to="/update">  <button className='bg-green-300 px-3 py-2 rounded-sm text-gray-400'
                onClick={() =>
                  setToLocalStorage(
                    item.id,
                    item.name,
                    item.email
                  )}>
                Edit</button></Link>
              <button className='bg-red-400 px-3 py-2 rounded-sm text-white-400' onClick={() => handleDelete(item.id)}>Del</button>
              <Link to='/'>
                <button type="submit" className="bg-blue-500 text-white text-xl border-none outline-none px-3 py-2 rounded-md shadow-md mx-auto">Create</button></Link>
            </div>
          </div>
        ))
        }
      </div>
    </div >
  )
}

export default Read