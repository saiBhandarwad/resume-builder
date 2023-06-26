import React from 'react'
import template1 from './resume templates/template1.png'
import template2 from './resume templates/template2.png'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { template } from '../features/counter/counterSlice'

export default function Templates() {
   const Navigate = useNavigate()
   const dispatch = useDispatch()
   const handleTemplate = (id) => {
      localStorage.setItem("templateId", id)
      Navigate('/workshop')
      dispatch(template(id))
   }
   return (
      <>
         <h1 className='font-bold text-base max-[350px]:text-sm flex justify-center py-2 sm:text-3xl'>CHOOSE TEMPLATES FROM FOLLOWING</h1>

         <div className="flex w-full justify-around mt-2 h-[50vh] max-sm:block max-sm:h-auto max-sm:px-4">

            <div className='w-1/4 my-1 template_container relative max-sm:w-full max-sm:py-4 border-2 border-black'>
               <img src={template1} className='template_img w-full h-full cursor-pointer ' alt="" srcSet="" />
               <button className='template_btn opacity-0 absolute top-2/4 left-[40%] bg-blue-400 text-white p-2 rounded-md' onClick={() => handleTemplate(1)}>Use Me</button>
            </div>
            <div className='w-1/4 my-1 template_container relative max-sm:w-full max-sm:py-4 border-2 border-black'>
               <img src={template2} className='template_img w-full h-full cursor-pointer ' alt="" srcSet="" />
               <button className='template_btn opacity-0 absolute top-2/4 left-[40%] bg-blue-400 text-white p-2 rounded-md' onClick={() => handleTemplate(2)}>Use Me</button>
            </div>


         </div>



      </>
   )
}
