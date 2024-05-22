import React, { useState } from 'react'
import backgroundImage from '../backgroundImage/background.png';
import { Link } from 'react-router-dom'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { useNavigate } from 'react-router-dom';

const BMI = () => {

   const [height, setHeight] = useState();
   const [weight, setWeight] = useState();

   const navigate = useNavigate();

   const handleSubmit = (event) => {
      event.preventDefault();

      const bmi = weight / [(height / 100)^2];
      localStorage.setItem('bmi', bmi);
      navigate('/result');
   };

   return (
      <div className='h-full w-full relative'>
         <img src="./element.png" alt="" className='w-[550px] absolute' />
         <img src="./bottom_element.png" alt="" className='absolute right-0 mt-[590px] w-[550px]' />
         <div className="bg-gray-5 pt-28 pb-12 px-28">
            <h1 className='text-4xl font-bold text-[#0007A8] mb-2'>DIABETES RISK TEST</h1>
            <h3 className='text-1xl font-bold text-[#0007A8]'>GET AN ACCURATE  PREDICTION ONLINE.</h3>
         </div>

         <div className='ml-28'>
            <span className='text-4xl font-bold' >Calculate your BMI </span>
         </div>

         <div className='ml-28 '>
            <form onSubmit={handleSubmit}>
               <div className='flex gap-40'>
                  <div>
                     <h3 className=' mt-10 font-semibold text-2xl text-[#070707]'>How tall is your height?</h3>
                     <div className='flex items-baseline gap-4'>
                        <input value={height} onChange={(e) => setHeight(e.target.value)} type="number" className=" mt-10 bg-gray-50 border-blue-600 border-[2px] text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-600 block w-[200px]  p-4 rounded-lg" placeholder="centimeters" required /> <span className='text-2xl'>cm.</span> <br />
                     </div>
                  </div>
                  <div>
                     <h3 className=' mt-10 font-semibold text-2xl text-[#070707]'>How much do you weigh?</h3>
                     <div className='flex items-baseline gap-4'>
                        <input value={weight} onChange={(e) => setWeight(e.target.value)} type="number" className=" mt-10 bg-gray-50 border-blue-600 border-[2px] text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-600 block w-[200px]  p-4 rounded-lg" placeholder="kilograms" required /> <span className='text-2xl'>kg.</span> <br />
                     </div>
                  </div>
               </div>
               <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 font-large rounded-full inline-flex items-center mt-12">
                  <p>Next</p>
                  <MdOutlineKeyboardArrowRight size={30} />
               </button>
            </form>
         </div>
      </div>
   )
}

export default BMI