import React from 'react'
import { Link } from 'react-router-dom'


export default function LandingPage() {
    
    return (
        <>
            <div className='bg-slate-300 h-[calc(100vh-4rem)]'>
                
                <div className='pt-16 text-center '>
                <i className="fa-sharp fa-solid fa-fan fa-spin"></i>
                    <span className="px-2 font-medium animate-pulse">ONLINE RESUME BUILDER</span>
                <i className="fa-sharp fa-solid fa-fan fa-spin"></i>
                </div>

                <div className='max-sm:hidden'>
                    <div className="flex justify-center text-3xl font-bold pt-6">
                        <span className='text-slate-500 tracking-tighter '>build<span className='text-blue-500'>resume&#8217; </span> </span>s Resume Builder helps you
                    </div>
                    <div className="flex justify-center text-3xl font-bold pt-2">
                        get hired at top companies
                    </div>
                </div>
                <div className='sm:hidden text-center pt-8'>
                    <span className='text-slate-500 tracking-tighter text-xl font-bold '>build<span className='text-blue-500'>resume&#8217;s</span> </span>
                    <div className="text-xl font-bold ">
                         Resume Builder helps you 
                    </div>
                    <div className="text-xl font-bold ">
                          get hired at top companies
                    </div>

                </div>


                <div className="flex justify-center pt-6">
                <Link to='/templates'>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded max-sm:text-sm'>Create Resume</button>
                </Link>
                </div>
                
                <div className="flex justify-center pt-6 h-3/5">
                    <img src="https://resumekraft.com/wp-content/uploads/edd/2019/03/professional-resume-template-for-webdesigners-1000x750.jpg" alt="img" className='h-full w-3/4 max-sm:w-full'/>
                </div>


            </div>
        </>
    )
}
