import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


const LoginPage = () => {

   const navigate = useNavigate();
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')


   const signupHandler = async (e) => {
      e.preventDefault()

      const response = await axios.post('http://127.0.0.1:8000/api/login/', {
         email,
         password
      })
      console.log(response) 

      if (response.status === 200) {
         console.log('success')
         navigate('/pregnancyform');
      }

   }

   return (
      <div className="bg-gray-5 mt-40 mx-20">
         <div className='flex justify-center flex-col items-center'>
            <h1 className='text-3xl font-bold text-[#0007A8] mb-2 text-center'>Log in to your Account!</h1>
            <form onSubmit={signupHandler} action="submit" className='w-[400px] mt-16'>
               <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-600 block w-full  p-4 rounded-full" required placeholder="Email"/>
               <br />
               <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-600 block w-full  p-4 rounded-full" required placeholder="Password"/>
               <div className='mt-8 float-right'>
                  <span>No account created yet? </span>
                  <Link to="/signup" className='text-blue-600'>Sign up here</Link>
               </div>
               <br />
               <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-20 font-large rounded-full ml-28 mt-5">
                  Log in
               </button>
            </form>
         </div>
      </div>
   )
}

export default LoginPage