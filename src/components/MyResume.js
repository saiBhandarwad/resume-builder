import React from 'react'
import { useSelector } from 'react-redux'
import Template1 from './resume templates/Template1'
import Template2 from './resume templates/Template2'


export default function MyResume() {
    const template = useSelector(state => state.counter.template)
    const templateId = localStorage.getItem('templateId')
    return (
        <>
            {templateId ? null : <h1 className='w-4/5 mx-auto font-bold text-3xl pt-4' >your cv will appear here please choose template</h1>}
            <div className="w-[80%] mx-auto mt-5 max-md:w-full ">
                <h1 className='font-bold text-base max-[350px]:text-sm flex justify-center py-2 sm:text-3xl'>your cv will looks like this</h1>
                {template === 1 || templateId === '1' ? <Template1 /> : null}
                {template === 2 || templateId === '2' ? <Template2 /> : null}
            </div>
        </>
    )
}
