import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar2() {
    
  const location = useLocation()
  useEffect(()=>{
    if(window.innerWidth < '640px'){
      const home = document.getElementById('home')
      const templates = document.getElementById('templates')
      const myresume = document.getElementById('myresume')
      const workshop = document.getElementById('workshop')
  
      home.classList.remove('bg-blue-400')
      templates.classList.remove('bg-blue-400')
      myresume.classList.remove('bg-blue-400')
      workshop.classList.remove('bg-blue-400')

      if(location.pathname!='/'){
        const id = location.pathname.split('/')[1].toLowerCase()
        document.getElementById(id).classList.add('bg-blue-400')
      }else{
          document.getElementById('home').classList.add('bg-blue-400')
      }
    }else{
      const homelg = document.getElementById('homelg')
      const templateslg = document.getElementById('templateslg')
      const myresumelg = document.getElementById('myresumelg')
      const workshoplg = document.getElementById('workshoplg')
      
      homelg.classList.remove('bg-blue-400')
      templateslg.classList.remove('bg-blue-400')
      myresumelg.classList.remove('bg-blue-400')
      workshoplg.classList.remove('bg-blue-400')

      if(location.pathname!='/'){
        const id = location.pathname.split('/')[1].toLowerCase().concat('lg')
        console.log(id);
        document.getElementById(id).classList.add('bg-blue-400')
      }else{
          document.getElementById('homelg').classList.add('bg-blue-400')
      }
    }
   

    
  },[location.pathname])


    const handleNav = () =>{
       const toggler = document.getElementById('toggler')
       const menu = document.getElementById('menu')
       if(toggler.classList.contains('fa-xmark')){
            toggler.classList.remove('fa-xmark')
            toggler.classList.add('fa-bars')
            menu.classList.add('-right-40')
            menu.classList.remove('right-0')
        }else{
            toggler.classList.add('fa-xmark')
            toggler.classList.remove('fa-bars')
            menu.classList.add('right-0')
            menu.classList.remove('-right-40')
       }
    }
  return (
    <>
      <nav>
        <ul className='flex justify-between bg-slate-700 py-4 px-4 '>
            
            <span className=' text-white text-[150%] tracking-tighter font-medium text-3xl '>build<span className='text-blue-500'>resume.</span> </span>
         
            <div className='flex text-white text-sm max-sm:hidden'>
                <Link className='px-3 cursor-pointer py-2 rounded-sm hover:bg-blue-400 mx-2'  to="/" id='homelg' >HOME</Link>
                <Link className='px-3 cursor-pointer py-2 rounded-sm  hover:bg-blue-400 mx-2' to="/templates" id='templateslg' >TEMPLATES</Link>
                <Link className='px-3 cursor-pointer py-2 rounded-sm  hover:bg-blue-400 mx-2' to="/workshop" id='workshoplg' >WORKSHOP</Link>
                <Link className='px-3 cursor-pointer py-2 rounded-sm  hover:bg-blue-400 mx-2' to="/myResume" id='myresumelg' >MY CV</Link>
            </div>

            <div className='sm:hidden text-white text-2xl pt-1'>
                <i className="fa-solid fa-bars cursor-pointer" onClick={handleNav} id='toggler'></i>
            </div>
        </ul>

        {/* showing menu on clicking bars */}
        <div className='flex flex-col justify-around text-white bg-slate-900 float-right w-[150px] h-[250px] -right-40 ease-in-out duration-500 absolute sm:hidden z-10 top-12' id='menu'>
                <Link className='px-4 cursor-pointer hover:text-yellow-200 hover:border-2 rounded-sm mx-4' to="/" id='home' >HOME</Link>
                <Link className='px-3 cursor-pointer hover:text-yellow-200 hover:border-2 rounded-sm mx-4' to="/templates" id='templates'>TEMPLATES</Link>
                <Link className='px-3 cursor-pointer hover:text-yellow-200 hover:border-2 rounded-sm mx-4' to="/workshop" id='workshop'
                >WORKSHOP</Link>
                <Link className='px-4 cursor-pointer hover:text-yellow-200 hover:border-2 rounded-sm mx-4' to="/myResume" id='myresume'>MY CV</Link>
                
        </div>
      </nav>
    </>
  )
}
