import React, { useState } from 'react'
import PersonalInfo from './forms/PersonalInfo'
import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight, LayoutGrid } from 'lucide-react'
import Summary from './forms/Summary'
import Experience from './forms/Experience'
import Education from './forms/Education'
import Skills from './forms/Skills'
import Projects from './forms/Projects'
import Certificates from './forms/Certificates'
import ExtraAchive from './forms/ExtraAchive'
import View from '@/my-resume/[resumId]/view'
import { Navigate, useParams } from 'react-router-dom'
import Publications from './forms/Publications'
import Recommendations from './forms/Recommendations'
function FormSection() {
    const {resumeId}= useParams()
    const [activeFormIndex, setActiveFormIndex] = useState(1)
    const [enableNext, setEnableNext]=useState(false)
    return (
    <div>
        <div className='flex justify-between items-center'>
            <Button variant='outline' size='sm' className='flex gap-2'> <LayoutGrid/> Theme</Button>
            <div className='flex gap-2'>
                {activeFormIndex>1 && <Button size='sm' onClick={()=>setActiveFormIndex(activeFormIndex-1)}> <ArrowLeft/> </Button>}
                <Button disabled={!enableNext} className="flex gap-2" size='sm' onClick={()=>setActiveFormIndex(activeFormIndex+1)}>Next <ArrowRight/> </Button>
            </div>
        </div>
       {/* Personal Detail  */}
       {activeFormIndex==1? 
       <PersonalInfo enabledNext={(v)=>setEnableNext(v)}/>
        : activeFormIndex==2?
        <Summary enabledNext={(v)=>setEnableNext(v)}/>:
        activeFormIndex==3?
          <Experience />  
        : activeFormIndex==4?
            <Education/>
        : activeFormIndex==5?
            <Skills/>  
        : activeFormIndex==6?
            <Projects/>   
        : activeFormIndex==7?
            <Certificates/>  
        : activeFormIndex==8?
            <ExtraAchive/> 
        : activeFormIndex==9?
            <Publications/>
        : activeFormIndex==10?
            <Recommendations/>          
        : activeFormIndex==11?
            <Navigate  to={'/my-resume/'+resumeId+"/view"}/>
          :null}
       {/* Summary */}
       {/* Experience */}
       {/* Education */}
       {/* Skills */}
       {/* Projects */}
       {/* Certificates */}
       {/* ExtraCurricular */}
    </div>
  )
}

export default FormSection