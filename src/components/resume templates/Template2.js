import React, { useRef } from 'react'
import { useReactToPrint } from 'react-to-print'
import {useSelector} from 'react-redux'



const Template2 = () => {
    const firstName = useSelector((state)=>state.counter.firstName)
    const middleName = useSelector((state)=>state.counter.middleName)
    const lastName = useSelector((state)=>state.counter.lastName)
    const city = useSelector((state)=>state.counter.city)
    const state = useSelector((state)=>state.counter.state)
    const country = useSelector((state)=>state.counter.country)
    const phone = useSelector((state)=>state.counter.phone)
    const email = useSelector((state)=>state.counter.email)
    const objective = useSelector((state)=>state.counter.objective)
    const achievements = useSelector((state)=>state.counter.achievements)
    const experiences = useSelector((state)=>state.counter.experiences)
    const skills = useSelector((state)=>state.counter.skills)
    const project = useSelector((state)=>state.counter.project)
    const education = useSelector((state)=>state.counter.education)

    const componentRef = useRef()
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
        documentTitle: 'my cv'
    })
    const handleOpacity = () =>{
        document.getElementById('divcontents').classList.remove('opacity-0')
        setTimeout(() => {
            document.getElementById('divcontents').classList.add('opacity-0')
        }, 1000);
    }
    return (
        <>
        <div className=" min-h-[100vh] m-auto px-4 pt-1 sm:hidden" id='divcontentstoshow'>
        <div className="w-[90%] border-2 pb-1 mx-auto h-full ">
            <div className="flex justify-center content-center pt-2 pb-2 h-1/5 bg-slate-800 text-white">
                <div>
                    <div className='flex justify-center font-semibold text-[10px] space-y-2'>{firstName} {middleName} {lastName}</div>
                    <div className='font-medium text-[8px] flex justify-center'>{city} {state} {country}</div>
                    <div className='font-medium text-[8px] space-y-2'>{phone} {phone ? "|" : null} {email}</div>
                </div>

            </div>
            {/* Education section */}
            <div className='pt-1 px-2'>
                <span className=' font-semibold text-[10px]'>Education</span>
                <hr className='text-black border-1 border-black' />

                {education.map((elem, index) => <div className="" key={index}>
                    <div className="flex pt-1 justify-between text-[8px]">
                        <li className='font-semibold'>{elem.university}</li>
                        <li className='list-none font-semibold'>{elem.year}</li>
                    </div>

                    <li className='ml-6 list-none text-[7px]'>{elem.degree}</li>
                    <li className='ml-6 list-none text-[7px]'>{elem.marks}</li>
                </div>)}
            </div>
            {/* skills section */}
            <div className='px-2 pt-1'>
                <span className=' font-semibold text-[10px]'>Skills</span>
                <hr className='pb-1 text-black border-1 border-black' />
                {skills.map((elem, id) => <li className='text-[7px]' key={id}>{elem}</li>)}
            </div>
            {/* Objective section */}
            <div className='px-2 ' id='objective'>
                <span className=' font-semibold text-[10px]'>Objective</span>
                <hr className=' text-black border-1 border-black' />
                <span className="text-[7px]">
                    {objective}
                </span>
            </div>

            {/* Achievments section */}
            <div className='px-2 ' id='achievment'>
                <span className=' font-semibold text-[10px]'>Achievments</span>
                <hr className=' text-black border-1 border-black' />
                <span className="">
                    {achievements.map((elem) => <div className='' key={elem.id}>
                        <li className='font-semibold text-[8px] py-1'>{elem.title}</li>
                        <div className="pl-6 text-[7px]">{elem.description}</div>
                    </div>)}
                </span>
            </div>
            {/* experience section */}
            <div className='px-2' id='experience'>
                <span className=' font-semibold text-[10px]'>Experiences</span>
                <hr className=' text-black border-1 border-black' />
                <span className="">
                    {experiences.map((elem) => <div className='' key={elem.id}>
                        <li className='font-semibold text-[8px]'>{elem.title}</li>
                        <div className="pl-6 text-[7px]">{elem.description}</div>
                    </div>)}
                </span>
            </div>
            {/* Projects section */}
            <div className=''>
                <span className='font-semibold text-[10px] px-2'>Projects</span>
                <hr className=' text-black border-1 border-black' />

                {project.map((elem) => <div className='pl-2' key={elem.id}>
                    <li className='font-semibold text-[8px]'>{elem.title}</li>
                    <div className="pl-6 text-[7px]">{elem.description}</div>
                </div>
                )}


            </div>
        </div>
    </div>
{/** */}
            <div ref={componentRef} className=" min-h-[100vh] m-auto pt-4 opacity-0 sm:opacity-100" id='divcontents'>
                <div className="w-[90%] border-2 pb-4 mx-auto h-full ">
                    <div className="flex justify-center content-center pt-16 pb-8 h-1/5 bg-slate-800 text-white">
                        <div>
                            <div className='flex justify-center font-semibold text-3xl pb-2'>{firstName} {middleName} {lastName}</div>
                            <div className='font-medium text-base flex justify-center'>{city} {state} {country}</div>
                            <div className='font-medium text-base pt-2 '>{phone} {phone?" | ":null} {email}</div>
                        </div>
                        
                    </div>
    {/* Education section */}          
                        <div className='pt-4 px-4'>
                            <span className=' font-semibold text-lg'>Education</span>
                            <hr className='text-black border-1 border-black'/>
                            
                            {education.map((elem,index)=><div className="" key={index}>
                            <div className="flex pt-2 justify-between">
                                <li className='font-semibold'>{elem.university}</li>
                                <li className='list-none font-semibold'>{elem.year}</li>
                            </div>
                            
                            <li className='ml-6 list-none'>{elem.degree}</li>
                            <li className='ml-6 list-none'>{elem.marks}</li>
                            </div>)}
                        </div>
    {/* skills section */}
                <div className='px-4 pt-4'>
                        <span className=' font-semibold text-lg'>Skills</span>
                        <hr className='pb-2 text-black border-1 border-black'/>
                       {skills.map((elem,id)=><li key={id}>{elem}</li>)}
                </div>
    {/* Objective section */}
                <div className='px-4 pt-4' id='objective'>
                    <span className=' font-semibold text-lg'>Objective</span>
                    <hr className=' text-black border-1 border-black'/>
                    <span className="">
                    {objective} 
                    </span>
                </div>

    {/* Achievments section */}
                <div className='px-4 pt-4' id='achievment'>
                <span className=' font-semibold text-lg'>Achievments</span>
                <hr className=' text-black border-1 border-black'/>
                <span className="">
                {achievements.map((elem)=><div className='pt-4' key={elem.id}>
                <li className='font-semibold'>{elem.title}</li>
                <div className="pl-6">{elem.description}</div>
            </div>)} 
                </span>
                </div>
    {/* experience section */}
                <div className='px-4 pt-4' id='experience'>
                <span className=' font-semibold text-lg'>Experiencs</span>
                <hr className=' text-black border-1 border-black'/>
                <span className="">
                {experiences.map((elem)=><div className='pt-4' key={elem.id}>
                <li className='font-semibold'>{elem.title}</li>
                <div className="pl-6">{elem.description}</div>
            </div>)} 
                </span>
                </div>
   {/* Projects section */}
                <div className='pt-4 px-4'>
                <span className='font-semibold text-lg px-2'>Projects</span>
                <hr className=' text-black border-1 border-black'/>

                {project.map((elem)=><div className='pt-4' key={elem.id}>
                        <li className='font-semibold'>{elem.title}</li>
                        <div className="pl-6">{elem.description}</div>
                    </div>
                )}
                

                </div>
                </div>
            </div>

            <div className="flex justify-end px-4">
            <i className="fa-sharp fa-solid fa-file-arrow-down fa-beat text-3xl fixed bottom-4 max-sm:bottom-6 cursor-pointer " onMouseDown={handleOpacity} onClick={handlePrint}></i>
            </div>

        </>
    )
}
export default Template2
