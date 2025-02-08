// import React, { useState } from 'react'
// import PersonalInfo from './forms/PersonalInfo'
// import { Button } from '@/components/ui/button'
// import { ArrowLeft, ArrowRight, LayoutGrid } from 'lucide-react'
// import Summary from './forms/Summary'
// import Experience from './forms/Experience'
// import Education from './forms/Education'
// import Skills from './forms/Skills'
// import Projects from './forms/Projects'
// import Certificates from './forms/Certificates'
// import ExtraAchive from './forms/ExtraAchive'
// import View from '@/my-resume/[resumId]/view'
// import { Navigate, useParams } from 'react-router-dom'
// import Publications from './forms/Publications'
// import Recommendations from './forms/Recommendations'
// function FormSection() {
//     const {resumeId}= useParams()
//     const [activeFormIndex, setActiveFormIndex] = useState(1)
//     const [enableNext, setEnableNext]=useState(false)
//     return (
//     <div>
//         <div className='flex justify-between items-center'>
//             <Button variant='outline' size='sm' className='flex gap-2'> <LayoutGrid/> Theme</Button>
//             <div className='flex gap-2'>
//                 {activeFormIndex>1 && <Button size='sm' onClick={()=>setActiveFormIndex(activeFormIndex-1)}> <ArrowLeft/> </Button>}
//                 <Button disabled={!enableNext} className="flex gap-2" size='sm' onClick={()=>setActiveFormIndex(activeFormIndex+1)}>Next <ArrowRight/> </Button>
//             </div>
//         </div>
//        {/* Personal Detail  */}
//        {activeFormIndex==1? 
//        <PersonalInfo enabledNext={(v)=>setEnableNext(v)}/>
//         : activeFormIndex==2?
//         <Summary enabledNext={(v)=>setEnableNext(v)}/>:
//         activeFormIndex==3?
//           <Experience />  
//         : activeFormIndex==4?
//             <Education/>
//         : activeFormIndex==5?
//             <Skills/>  
//         : activeFormIndex==6?
//             <Projects/>   
//         : activeFormIndex==7?
//             <Certificates/>  
//         : activeFormIndex==8?
//             <ExtraAchive/> 
//         : activeFormIndex==9?
//             <Publications/>
//         : activeFormIndex==10?
//             <Recommendations/>          
//         : activeFormIndex==11?
//             <Navigate  to={'/my-resume/'+resumeId+"/view"}/>
//           :null}
//        {/* Summary */}
//        {/* Experience */}
//        {/* Education */}
//        {/* Skills */}
//        {/* Projects */}
//        {/* Certificates */}
//        {/* ExtraCurricular */}
//     </div>
//   )
// }

// export default FormSection






import React, { useState } from "react";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { LayoutGrid, ChevronDown, ChevronUp } from "lucide-react";
import PersonalInfo from "./forms/PersonalInfo";
import Summary from "./forms/Summary";
import Experience from "./forms/Experience";
import Education from "./forms/Education";
import Skills from "./forms/Skills";
import Projects from "./forms/Projects";
import Certificates from "./forms/Certificates";
import ExtraAchive from "./forms/ExtraAchive";
import Publications from "./forms/Publications";
import Recommendations from "./forms/Recommendations";
import { useParams, Navigate } from "react-router-dom";

function FormSection() {
  const { resumeId } = useParams();
  const sections = [
    { id: 1, title: "Personal Info", component: <PersonalInfo /> },
    { id: 2, title: "Summary", component: <Summary /> },
    { id: 3, title: "Experience", component: <Experience /> },
    { id: 4, title: "Education", component: <Education /> },
    { id: 5, title: "Skills", component: <Skills /> },
    { id: 6, title: "Projects", component: <Projects /> },
    { id: 7, title: "Certificates", component: <Certificates /> },
    { id: 8, title: "Achievements", component: <ExtraAchive /> },
    { id: 9, title: "Publications", component: <Publications /> },
    { id: 10, title: "Recommendations", component: <Recommendations /> },
  ];

  const [openSections, setOpenSections] = useState({ 1: true }); // Personal Info open by default

  const toggleSection = (id) => {
    setOpenSections((prev) => ({
      ...prev,
      [id]: !prev[id], // Toggle section open/close
    }));
  };

  
  
  

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {/* Theme Button
      <div className="flex justify-between items-center mb-4">
        <Button variant="outline" size="sm" className="flex gap-2">
          <LayoutGrid /> Theme
        </Button>
      </div> */}

      {/* Collapsible Sections */}
      {sections.map(({ id, title, component }) => (
        <Collapsible key={id} open={openSections[id]} className="border border-gray-300 rounded-lg">
          <CollapsibleTrigger
            onClick={() => toggleSection(id)}
            className="w-full flex justify-between items-center px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg text-left font-medium cursor-pointer"
          >
            {title}
            {openSections[id] ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </CollapsibleTrigger>
          <CollapsibleContent className="p-4">{component}</CollapsibleContent>
        </Collapsible>
      ))}
    </div>
  );
}

export default FormSection;
