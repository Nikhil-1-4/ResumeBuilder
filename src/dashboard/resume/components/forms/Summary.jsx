// import { Button } from '@/components/ui/button'
// import { Textarea } from '@/components/ui/textarea'
// import { ResumeInfoContext } from '@/context/ResumeInfoContext'
// import { Rocket } from 'lucide-react'
// import React, { useContext, useEffect, useState } from 'react'

// function Summary() {
//     const{resumeInfo, setResumeInfo} = useContext(ResumeInfoContext)
//     const [summary, setSummary]=useState()
//     useEffect(()=>{
//         summary&&setResumeInfo({
//             ...resumeInfo,summary:summary
//         })
//     },[summary])
//     const onSave =(e)=>{
//         e.preventDefault();
//     }
//     return (
//     <div>
//        <div className='p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10'>
//         <h2 className='font-bold text-lg'>Summary/Objective</h2>
//         <p>Summarize Yourself</p> 

//         <form className='mt-7' onSubmit={onSave}>
//             <div className='flex justify-between'>
//                 <label>Add Summary</label>
//                 <Button variant='outline' className='border-primary flex'> <Rocket/> Generate Using AI</Button>
//             </div>
//             <Textarea className='mt-5' required
//             onChange={(e)=>setSummary(e.target.value)}
//             />
//             <div className='mt-2 flex justify-end'>
//                 <Button type='submit'>Save</Button>
//             </div>
//         </form>
//         </div>
//     </div>
//   )
// }

// export default Summary



import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { ResumeInfoContext } from '@/context/ResumeInfoContext';
import { Rocket } from 'lucide-react';
import React, { useContext, useEffect, useState } from 'react';

function Summary() {
    const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);

    // Initialize summary with existing data or empty string
    const [summary, setSummary] = useState(resumeInfo?.summary || '');

    // Update global resumeInfo as the user types
    useEffect(() => {
        setResumeInfo(prevState => ({
            ...prevState,
            summary: summary
        }));
    }, [summary, setResumeInfo]);

    const onSave = (e) => {
        e.preventDefault();
    };

    return (
        <div className='p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10'>
            <h2 className='font-bold text-lg'>Summary/Objective</h2>
            <p>Summarize Yourself</p> 

            <form className='mt-7' onSubmit={onSave}>
                <div className='flex justify-between'>
                    <label>Add Summary</label>
                    <Button variant='outline' className='border-primary flex'> 
                        <Rocket /> Generate Using AI
                    </Button>
                </div>
                <Textarea 
                    className='mt-5' 
                    required
                    value={summary} // Auto-fills existing summary
                    onChange={(e) => setSummary(e.target.value)}
                />
                <div className='mt-2 flex justify-end'>
                    <Button type='submit'>Save</Button>
                </div>
            </form>
        </div>
    );
}

export default Summary;
