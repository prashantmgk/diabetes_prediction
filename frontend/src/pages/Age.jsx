import React, { useState } from 'react'
import backgroundImage from '../backgroundImage/background.png';
import { Link, useNavigate } from 'react-router-dom'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'

const Age = () => {

   const [age, setAge] = useState();

   const navigate = useNavigate();

   const handleSubmit = (event) => {
      event.preventDefault();
      localStorage.setItem('age', age);
      navigate('/bmi');
   };

   return (
      
      <div className='h-full w-full relative'>
         <img src="./element.png" alt="" className='w-[550px] absolute' />
         <img src="./bottom_element.png" alt="" className='absolute right-0 mt-[590px] w-[550px]' />
         <div className="bg-gray-5 pt-28 pb-16 px-28">
            <h1 className='text-4xl font-bold text-[#0007A8] mb-2'>DIABETES RISK TEST</h1>
            <h3 className='text-1xl font-bold text-[#0007A8]'>GET AN ACCURATE  PREDICTION ONLINE.</h3>
         </div>
         <div className='w-full h-24 bg-blue-700 text-white flex items-center justify-between px-24'>
            <h1 className='text-[25px] font-mono'>What is your age? Please enter your age.</h1>
            <div className='w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-[40px]'>
               <p className='font-bold'>6</p>
            </div>
         </div>
         <div className='ml-28'>
            <h3 className=' mt-10 font-semibold text-2xl text-[#070707]'>Your Age.</h3>
            <form onSubmit={handleSubmit}>
               <input value={age} onChange={(e) => setAge(e.target.value)} type="number" className=" mt-10 bg-gray-50 border-blue-600 border-[2px] text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-600 block w-[200px]  p-4 rounded-lg" required placeholder="Enter Pregnanices" />
               <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 font-large rounded-full inline-flex items-center mt-12">
                  <p>Next</p>
                  <MdOutlineKeyboardArrowRight size={30}/>
               </button>
            </form>
         </div>
      </div>
   )
}

export default Age