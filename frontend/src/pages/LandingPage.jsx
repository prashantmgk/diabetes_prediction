import React from 'react'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-router-dom'

const LandingPage = () => {
   return (
      <div className='bg-gray-5 my-14 mx-28'>
         <div className="mb-14">
            <h1 className='text-4xl font-bold text-[#0007A8] mb-2'>DIABETES RISK TEST</h1>
            <h3 className='text-1xl font-bold text-[#0007A8]'>GET AN ACCURATE  PREDICTION ONLINE.</h3>
         </div>

         <div className='flex flex-initial justify-around'>

            <div className='w-2/5 mt-14'>
               <h4 className='text-2xl font-bold tracking-wider mb-4'>FIND YOUR RISK OF DAIBETES FROM HOME.</h4>
               <p className='text-sm text-justify text-gray-700 font-medium'>
                  Introducing the most advanced online diabetes prediction web application on the market. With our cutting-edge technology and access to large amounts of data on diabetes risk, we are revolutionizing the way diabetes is predicted and managed.
                  <br />
                  <br />
                  Our online diabetes prediction web application is designed to help you identify your risk of developing diabetes and provide personalized recommendations for prevention and management. Our system uses advanced machine learning techniques to analyze your data and make accurate predictions with higher reliability than ever before.
               </p>

               <Link to="/signup" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 font-large rounded-full inline-flex items-center mt-12">
                  <p>TAKE TEST NOW</p>
                  <MdOutlineKeyboardArrowRight size={30}/>
               </Link>

            </div>
            <div className='w-3/5 ml-10'>
               <img src="./stock_iamge.png" className='w-[550px]' />
            </div >
         </div>
      </div>
   )
}



export default LandingPage