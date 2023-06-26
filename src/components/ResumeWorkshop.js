import React, { useState } from 'react'
import Template1 from './resume templates/Template1'
import Template2 from './resume templates/Template2'

import { useDispatch,useSelector } from 'react-redux'
import { firstName, middleName, lastName, city, state, country, phone, email, objective, skills,deleteSkill,project,deleteProject,achievement,deleteAchievement,experience,deleteExperience,education,deleteEducation} from '../features/counter/counterSlice'

export default function ResumeWorkshop() {
    const templateId = localStorage.getItem("templateId")
    const dispatch = useDispatch()
    const template = useSelector((state)=>state.counter.template)
    const skillFromStore = useSelector((state)=>state.counter.skills)
    const projectFromStore = useSelector((state)=>state.counter.project)
    const achievementsFromStore = useSelector((state)=>state.counter.achievements)
    const experiencesFromStore = useSelector((state)=>state.counter.experiences)
    const educationFromStore = useSelector((state)=>state.counter.education)
    const [name, setName] = useState('')
    const [fatherName, setFatherName] = useState('')
    const [sirName, setSirName] = useState('')
    const [City, setCity] = useState('')
    const [State, setState] = useState('')
    const [Country, setCountry] = useState('')
    const [Phone, setPhone] = useState('')
    const [Email, setEmail] = useState('')
    const [Objective, setObjective] = useState('')
    const [Skills, setSkills] = useState('')
    const [Title, setTitle] = useState('')
    const [Description, setDescription] = useState('')
    const [AchTitle, setAchTitle] = useState('')
    const [AchDescription, setAchDescription] = useState('')
    const [ExpTitle, setExpTitle] = useState('')
    const [ExpDescription, setExpDescription] = useState('')
    const [Year,setYear] = useState('')
    const [University,setUniversity] = useState('')
    const [Degree,setDegree] = useState('')
    const [Marks,setMarks] = useState('')

    const handleclick = () => {
        if(Title){dispatch(project({id:projectFromStore.length, title:Title, description:Description}))}        
    }
    const addExperiecnce = () => {
        const isHidden = document.getElementById('experience').classList.contains('hidden')
        if(isHidden){
            document.getElementById('experience').classList.remove('hidden')
        }else{
            if(ExpTitle){dispatch(experience({id:experiencesFromStore.length, title:ExpTitle, description:ExpDescription}))}
        }
    }
    const hideExperience = () => {
        document.getElementById('experience').classList.add('hidden')
    }
    const addObjective = () => {
        dispatch(objective(Objective))
        document.getElementById('objective').classList.remove('hidden')
    }
    const deleteObjective = () => {
        document.getElementById('objective').classList.add('hidden')
    }
    const addAchievement = () => {
        const isHidden= document.getElementById('achievment').classList.contains('hidden')
        
        if(isHidden){
            document.getElementById('achievment').classList.remove('hidden')
        }else{
            if(AchTitle){dispatch(achievement({id:achievementsFromStore.length, title:AchTitle, description:AchDescription}))}
        }
    }
    const hideAchievement = () => {
        document.getElementById('achievment').classList.add('hidden')
    }
    const deleteAchievementsFromStore = (id) => {
        dispatch(deleteAchievement(id));
    }
    const deleteExperienceFromStore = (id) => {
        dispatch(deleteExperience(id));
    }
    const deleteSkillFromStore = (id) => {
        dispatch(deleteSkill(id));
    }
    const deleteProjectFromStore = (id) => {
        dispatch(deleteProject(id));
    }
    const deleteEducationFromStore = (id) => {
        dispatch(deleteEducation(id));
    }
    const addSkill = (elem) => {
       setSkills(elem)
    }
       
    const handleSkill = () =>{
        if(Skills){
            dispatch(skills(Skills))
        }
    }
    
    const handleAbout = () =>{
        dispatch(firstName(name))
        dispatch(middleName(fatherName))
        dispatch(lastName(sirName))
        dispatch(state(State))
        dispatch(city(City))
        dispatch(country(Country))
        dispatch(phone(Phone))
        dispatch(email(Email))
    }
    const handleEducation = () =>{
        if(University){dispatch(education({id:educationFromStore.length, university:University, year:Year, degree:Degree, marks:Marks}))}
    }

    return (
        <>
        <div className='flex w-full min-h-[calc(100vh-4rem)] max-md:block max-md:w-[100vw]'>
        <div className='w-2/4 px-8 pt-4 max-md:w-full'>
        { /* About Section  */ }
                <h1 className='text-white bg-slate-900 py-1 pl-4 flex justify-between'><span>About Section</span>
                <i className="fa-solid fa-plus py-1 pr-2 cursor-pointer" onClick={handleAbout}></i></h1>
                <div className="  border-2 pt-4 pb-2">

                    <div className=" mt-2 mx-2 flex flex-col">
                        <label htmlFor="name">First Name</label>
                        <input type="text" id='name' className='border-black border-[1px] focus:outline-none pl-2 py-1' onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className=" mt-2 mx-2 flex flex-col">
                        <label htmlFor="name">Middle Name</label>
                        <input type="text" id='name' className='border-black border-[1px] focus:outline-none pl-2 py-1' onChange={(e) => setFatherName(e.target.value)} />
                    </div>
                    <div className=" mt-2 mx-2 flex flex-col">
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" id='lastName' className='border-black border-[1px] focus:outline-none pl-2 py-1' onChange={(e) => setSirName(e.target.value)} />
                    </div>
                    <div className=" mt-2 mx-2 flex flex-col">
                        <label htmlFor="name">City</label>
                        <input type="text" id='name' className='border-black border-[1px] focus:outline-none pl-2 py-1' onChange={(e) => setCity(e.target.value)} />
                    </div>
                    <div className=" mt-2 mx-2 flex flex-col">
                        <label htmlFor="lastName">State</label>
                        <input type="text" id='lastName' className='border-black border-[1px] focus:outline-none pl-2 py-1' onChange={(e) => setState(e.target.value)} />
                    </div>
                    <div className=" mt-2 mx-2 flex flex-col">
                        <label htmlFor="lastName">Country</label>
                        <input type="text" id='lastName' className='border-black border-[1px] focus:outline-none pl-2 py-1' onChange={(e) => setCountry(e.target.value)} />
                    </div>
                    <div className=" mt-2 mx-2 flex flex-col">
                        <label htmlFor="lastName">Phone</label>
                        <input type="text" id='lastName' className='border-black border-[1px] focus:outline-none pl-2 py-1' onChange={(e) => setPhone(e.target.value)} />
                    </div>
                    <div className=" mt-2 mx-2 flex flex-col">
                        <label htmlFor="lastName">Email</label>
                        <input type="text" id='lastName' className='border-black border-[1px] focus:outline-none pl-2 py-1' onChange={(e) => setEmail(e.target.value)} />
                    </div>

                </div>
   {/*Education section */}             
                <h1 className='text-white bg-slate-900 mt-8 py-1 pl-4 flex justify-between'><span>Education</span> <i className="fa-solid fa-plus py-1 pr-2 cursor-pointer" onClick={handleEducation}></i></h1>
                
                <div className="  border-2 pt-4 pb-2">
                    <div className=" mt-2 mx-2 flex flex-col">
                        <input type="text" className='border-black border-[1px] focus:outline-none my-1 pl-2 py-1' onChange={(e) => setUniversity(e.target.value)} placeholder='University or College Name' />
                        <input type="text" className='border-black border-[1px] focus:outline-none my-1 pl-2 py-1' onChange={(e) => setDegree(e.target.value)} placeholder='Degree Name' />
                        <input type="text" className='border-black border-[1px] focus:outline-none my-1 pl-2 py-1' onChange={(e) => setMarks(e.target.value)} placeholder='Enter Marks Here' />
                        <input type="text" className='border-black border-[1px] focus:outline-none my-1 pl-2 py-1' onChange={(e) => setYear(e.target.value)} placeholder='Enter Year' />
                    </div>
                    {educationFromStore.length===0?<h1 className='font-bold py-4 px-2'>Your Educations will appear here</h1>:educationFromStore.map((elem,index)=><div className=" mt-2 mx-2 flex w-full" key={elem.id}>
                    <div className='w-[80%] border-black border-[1px] pl-2 py-1' >{elem.university}</div>
                    <i className="fa-solid fa-xmark cursor-pointer text-white bg-black px-2 pt-2" onClick={()=>deleteEducationFromStore(index)}></i>
                    </div>)}
                </div>
        {/*Objective section */}
                <h1 className='text-white bg-slate-900 mt-8 py-1 pl-4 flex justify-between'><span>Objective</span>
                <span>
                    <i className="fa-solid fa-plus py-1 pr-2 cursor-pointer" onClick={addObjective}></i>
                    <i className="fa-solid fa-xmark px-2 py-1 cursor-pointer" onClick={deleteObjective}></i>
                </span>
            </h1>
            <div className="  border-2 pt-4 pb-2">
                <div className=" mt-2 mx-2 flex flex-col">

                    <input type="text" id='lastName' className='border-black border-[1px] focus:outline-none pl-2 py-1' onChange={(e) => setObjective(e.target.value)} />
                </div>
            </div>
{/*Experiences section start */}
            <h1 className='text-white bg-slate-900 mt-8 py-1 pl-4 flex justify-between'><span>Experiences</span>
                    <span>
                        <i className="fa-solid fa-plus py-1 pr-2 cursor-pointer" onClick={addExperiecnce}></i>
                        <i className="fa-solid fa-xmark px-2 py-1 cursor-pointer" onClick={hideExperience}></i>
                    </span>
                </h1>
                <div className="  border-2 pt-4 pb-2">
                <div className=" mt-2 mx-2 flex flex-col mb-8">
                    <label htmlFor="">Title</label>
                    <input type="text" id='lastName' className='border-black border-[1px] focus:outline-none my-1 pl-2 py-1' onChange={(e) => setExpTitle(e.target.value)} placeholder='Write Your Projects Title Here' />
                    <label htmlFor="">Description</label>
                    <input type="text" id='lastName' className='border-black border-[1px] focus:outline-none my-1 pl-2 py-1' onChange={(e) => setExpDescription(e.target.value)} placeholder='Write Your Projects Description Here' />
                </div> 
                
                
                {experiencesFromStore.length===0?<h1 className='font-bold py-4 px-2'>Your Experiences will appear here</h1>:experiencesFromStore.map((elem,index)=><div className=" mt-2 mx-2 flex w-full" key={elem.id}>
                <div className='w-[80%] border-black border-[1px] pl-2 py-1' >{elem.title}</div>
                <i className="fa-solid fa-xmark cursor-pointer text-white bg-black px-2 pt-2" onClick={()=>deleteExperienceFromStore(index)}></i>
                </div>)}
            </div>

{/* Achievements */}
            <h1 className='text-white bg-slate-900 mt-8 py-1 pl-4 flex justify-between'><span>Achievements</span>
                    <span>
                        <i className="fa-solid fa-plus py-1 pr-2 cursor-pointer" onClick={addAchievement}></i>
                        <i className="fa-solid fa-xmark px-2 py-1 cursor-pointer" onClick={hideAchievement}></i>
                    </span>
                </h1>
                {/** */}
                <div className="  border-2 pt-4 pb-2">
                    <div className=" mt-2 mx-2 flex flex-col mb-8">
                        <label htmlFor="">Title</label>
                        <input type="text" id='lastName' className='border-black border-[1px] focus:outline-none my-1 pl-2 py-1' onChange={(e) => setAchTitle(e.target.value)} placeholder='Write Your Projects Title Here' />
                        <label htmlFor="">Description</label>
                        <input type="text" id='lastName' className='border-black border-[1px] focus:outline-none my-1 pl-2 py-1' onChange={(e) => setAchDescription(e.target.value)} placeholder='Write Your Projects Description Here' />
                    </div> 
                    
                    
                    {achievementsFromStore.length===0?<h1 className='font-bold py-4 px-2'>Your Achievements will appear here</h1>:achievementsFromStore.map((elem,index)=><div className=" mt-2 mx-2 flex w-full" key={elem.id}>
                    <div className='w-[80%] border-black border-[1px] pl-2 py-1' >{elem.title}</div>
                    <i className="fa-solid fa-xmark cursor-pointer text-white bg-black px-2 pt-2" onClick={()=>deleteAchievementsFromStore(index)}></i>
                    </div>)}
                </div>
                {/** */}
                
{/* skills section start */}
                <h1 className='text-white bg-slate-900 mt-8 py-1 pl-4 '>Skills</h1>
                <div className="border-2 pt-4 pb-2 w-[100%]" id='skills'>
                    <div className=" mt-2 mx-2 flex w-full">
                        <input type="text" id='lastName' className='w-[80%] border-black border-[1px] focus:outline-none my-1 pl-2 py-1' onChange={(e) => addSkill(e.target.value)} placeholder='Write Your Skills Here' /> <i className="fa-solid fa-plus cursor-pointer my-1 px-2 pt-2  border-[2px] border-black text-white bg-black" onClick={() => handleSkill()}></i>
                       
                    </div>
                    
                    
                    {skillFromStore.map((elem,id)=><div className=" mt-2 mx-2 flex w-full" key={id}>
                    <div className='w-[80%] border-black border-[1px] pl-2 py-1' >{elem}</div>
                    <i className="fa-solid fa-xmark cursor-pointer text-white bg-black px-2 pt-2" onClick={()=>deleteSkillFromStore(id)}></i>
                    </div>)}  
                </div>
{/*projects section start */}
                <h1 className='text-white bg-slate-900 mt-8 py-1 pl-4 flex justify-between'><span>Projects</span> <i className="fa-solid fa-plus py-1 pr-2 cursor-pointer" onClick={handleclick}></i></h1>
                <div className="  border-2 pt-4 pb-2">
                    <div className=" mt-2 mx-2 flex flex-col mb-8">
                        <label htmlFor="">Title</label>
                        <input type="text" id='lastName' className='border-black border-[1px] focus:outline-none my-1 pl-2 py-1' onChange={(e) => setTitle(e.target.value)} placeholder='Write Your Projects Title Here' />
                        <label htmlFor="">Description</label>
                        <input type="text" id='lastName' className='border-black border-[1px] focus:outline-none my-1 pl-2 py-1' onChange={(e) => setDescription(e.target.value)} placeholder='Write Your Projects Description Here' />
                    </div> 
                    
                    
                    {projectFromStore.length===0?<h1 className='font-bold py-4 px-2'>Your Projects will appear here</h1>:projectFromStore.map((elem,index)=><div className=" mt-2 mx-2 flex w-full" key={elem.id}>
                    <div className='w-[80%] border-black border-[1px] pl-2 py-1' >{elem.title}</div>
                    <i className="fa-solid fa-xmark cursor-pointer text-white bg-black px-2 pt-2" onClick={()=>deleteProjectFromStore(index)}></i>
                    </div>)}
                </div>


                <div className="flex justify-center mt-8">
                <button className='bg-blue-500 text-white font-semibold rounded-md px-4 py-2 my-4' onClick={() => handleclick()}>Save Changes</button>
                </div>
            </div>
            <div className="w-2/4 border-2 border-r-0 mt-5 max-md:w-full">
                {template===1 || templateId==='1' ? <Template1 />:null}
                {template===2 || templateId==='2' ? <Template2 />:null}
            </div>
        </div>
        </>
    )
}
