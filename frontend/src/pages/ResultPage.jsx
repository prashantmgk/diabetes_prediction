import React, { useEffect, useState } from 'react'
import backgroundImage from '../backgroundImage/background.png';
import { Link } from 'react-router-dom'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ResultPage = () => {

   const [result, setResult] = useState(true);

   const pregnancy = localStorage.getItem('pregnancy');
   const glucose = localStorage.getItem('glucose');
   const bloodPressure = localStorage.getItem('bloodPresure');
   const skinThickness = localStorage.getItem('skinthickness');
   const insulin = localStorage.getItem('insulin');
   const bmi = localStorage.getItem('bmi');
   const diabetesPedigreeFunction = localStorage.getItem('dbp');
   const age = localStorage.getItem('age');

   useEffect(() => {
      if(pregnancy && glucose && bloodPressure && skinThickness && insulin && bmi && diabetesPedigreeFunction && age) {

         getPrediction();
      }
      else {
         console.log('error')
      }
   }, [])


   async function getPrediction() {
      const response = await axios.post('http://127.0.0.1:8000/api/predict/', {
         pregnancy: pregnancy,
         glucose: glucose,
         bloodPressure: bloodPressure,
         skinThickness: skinThickness,
         insulin: insulin,
         bmi: bmi,
         diabetesPedigreeFunction: diabetesPedigreeFunction,
         age: age
      })

      setResult(response.data.result);
      localStorage.clear();
   }

   // // console.log(pregnancy, glucose, bloodPressure, skinThickness, insulin, bmi, diabetesPedigreeFunction, age);
   // axios.post('http://127.0.0.1:8000/api/predict/', {
   //    pregnancy: pregnancy,
   //    glucose: glucose,
   //    bloodPressure: bloodPressure,
   //    skinThickness: skinThickness,
   //    insulin: insulin,
   //    bmi: bmi,
   //    diabetesPedigreeFunction: diabetesPedigreeFunction,
   //    age: age
   // }).then(response => {
   //    console.log(response.data);
   //    console.log('testing')
   //  })
   //  .catch(error => {
   //    console.log(error);
   //    console.log("error")
   //  });


   return (
      <div className='h-full w-full relative'>
         <img src="./element.png" alt="" className='w-[550px] absolute' />
         <img src="./bottom_element.png" alt="" className='absolute right-0 mt-[590px] w-[550px]' />
         <div className="bg-gray-5 pt-28 pb-10 px-28">
            <h1 className='text-4xl font-bold text-[#0007A8] mb-2'>DIABETES RISK TEST</h1>
            <h3 className='text-1xl font-bold text-[#0007A8]'>GET AN ACCURATE  PREDICTION ONLINE.</h3>
         </div>
         <div className='ml-28'>
            <span className='text-4xl font-medium' >Your Diabetes Prediction is: </span>
            {
               result == "Positive" ? (<span className='text-4xl font-bold text-[#e04646] mb-2 ml-8'>POSITIVE </span>) :
                  (<span className='text-4xl font-bold text-[#00b300] mb-2 ml-8'>NEGATIVE</span>)
            }

         </div>

         {
            result == "Positive" ? (

               <div className="bg-gray-100 rounded-lg shadow overflow-hidden max-w-10xl mx-auto px-24 py-12 mt-10">
                  <h2 className="text-2xl font-bold text-black mb-8">The system has predict a <span className='text-[#e04646]'>POSITIVE</span> result to your diabetes test. Therefore you need follow these advice. </h2>
                  <ul className="mb-8 space-y-4 text-left text-black">
                     <li className="flex items-center space-x-2">
                        <svg className="flex-shrink-0 w-5 h-5 text-black dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                        <span>Work with a healthcare team: It's important to work with a healthcare team, including a doctor and a registered dietitian, to create a treatment plan that's tailored to individual needs.</span>
                     </li>
                     <li className="flex items-center space-x-2">
                        <svg className="flex-shrink-0 w-5 h-5 text-black dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                        <span>Monitor blood sugar levels: People with diabetes should check their blood sugar levels regularly to ensure they stay within a healthy range. This can be done using a glucose meter, which measures blood sugar levels from a small sample of blood.</span>
                     </li>
                     <li className="flex items-center space-x-2">
                        <svg className="flex-shrink-0 w-5 h-5 text-black dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                        <span>Take medication as prescribed: If medication is prescribed, it's important to take it as directed by a healthcare provider to manage blood sugar levels.</span>
                     </li>
                     <li className="flex items-center space-x-2">
                        <svg className="flex-shrink-0 w-5 h-5 text-black dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                        <span>Exercise regularly: Exercise can help improve insulin sensitivity and lower blood sugar levels. Aim for at least 30 minutes of moderate-intensity exercise most days of the week.</span>
                     </li>
                     <li className="flex items-center space-x-2">
                        <svg className="flex-shrink-0 w-5 h-5 text-black dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                        <span>Manage stress: Stress can cause blood sugar levels to rise, so it's important to find ways to manage stress. This can include activities like meditation, yoga, or deep breathing exercises.</span>
                     </li>
                     <li className="flex items-center space-x-2">
                        <svg className="flex-shrink-0 w-5 h-5 text-black dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                        <span>Get regular check-ups: People with diabetes should have regular check-ups with their healthcare team to monitor their blood sugar levels and manage any complications that may arise.</span>
                     </li>
                  </ul>
               </div>


            ) : (

               <div className="bg-gray-100 rounded-lg shadow overflow-hidden max-w-10xl mx-auto px-24 py-12 mt-10">
                  <h2 className="text-2xl font-bold text-black mb-8">Even you have a <span className='text-[#00b300]'>NEGATIVE</span> result to diabetes You should always opt to a healthy lifestyle.</h2>
                  <ul className="mb-8 space-y-4 text-left text-black">
                     <li className="flex items-center space-x-2">
                        <svg className="flex-shrink-0 w-5 h-5 text-black dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                        <span>Eat a healthy diet: Eating a healthy diet that is rich in fruits, vegetables, whole grains, lean proteins, and healthy fats can help you maintain a healthy weight and prevent diabetes. Limit your intake of processed foods, sugary drinks, and high-fat foods.</span>
                     </li>
                     <li className="flex items-center space-x-2">
                        <svg className="flex-shrink-0 w-5 h-5 text-black dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                        <span> Exercise can help you maintain a healthy weight and improve your insulin sensitivity, which can reduce your risk of developing diabetes. Aim for at least 30 minutes of moderate-intensity exercise most days of the week.</span>
                     </li>
                     <li className="flex items-center space-x-2">
                        <svg className="flex-shrink-0 w-5 h-5 text-black dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                        <span> Being overweight or obese can increase your risk of developing diabetes. If you are overweight or obese, losing even a small amount of weight can help reduce your risk.</span>
                     </li>
                     <li className="flex items-center space-x-2">
                        <svg className="flex-shrink-0 w-5 h-5 text-black dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                        <span> Smoking can increase your risk of developing diabetes, as well as other serious health problems. If you smoke, talk to your healthcare provider about ways to quit.</span>
                     </li>
                     <li className="flex items-center space-x-2">
                        <svg className="flex-shrink-0 w-5 h-5 text-black dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                        <span> If you have a family history of diabetes, you may be at a higher risk of developing the disease. Talk to your healthcare provider about ways to reduce your risk..</span>
                     </li>
                     <li className="flex items-center space-x-2">
                        <svg className="flex-shrink-0 w-5 h-5 text-black dark:text-green-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                        <span>Drinking too much alcohol can increase your risk of developing diabetes. If you drink alcohol, do so in moderation.</span>
                     </li>
                  </ul>
               </div>
            )
         }

      </div>
   )
}

export default ResultPage