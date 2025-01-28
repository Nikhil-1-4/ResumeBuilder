import { Notebook } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'

function ResumeCardItem(resume) {
    console.log(resume)
  return (
    <Link to={'/dashboard/resume/'+resume.resume.data.resumeId+"/edit"}>
        <div className='p-14 bg-secondary border items-center flex justify-center rounded-lg h-[282px] hover:scale-105 transition-all shadow-lg cursor-pointer border-orange-400' onClick={()=>setOpenDialog(true)}>
            <Notebook/>
        </div>
        <h2 className='text-center my-1 border border-double'>{resume.resume.data.title}</h2>
    </Link>
  )
}

export default ResumeCardItem