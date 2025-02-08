





import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import React, { useContext, useEffect, useState } from 'react';
import RichTextEditor from '../RichTextEditor';
import { ResumeInfoContext } from '@/context/ResumeInfoContext';
import { Rocket } from 'lucide-react';

const defaultExperience = {
    title: '',
    companyName: '',
    city: '',
    state: '',
    startDate: '',
    endDate: '',
    workSummery: '',
};

function Experience() {
    const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
    const [experienceList, setExperienceList] = useState(resumeInfo?.experience || [defaultExperience]);

    const handleChange = (index, event) => {
        const { name, value } = event.target;
        setExperienceList(prevList =>
            prevList.map((item, i) => (i === index ? { ...item, [name]: value } : item))
        );
    };

    const handleRichTextEditor = (value, index) => {
        setExperienceList(prevList =>
            prevList.map((item, i) => (i === index ? { ...item, workSummery: value } : item))
        );
    };

    const addNewExperience = () => {
        setExperienceList(prevList => [...prevList, { ...defaultExperience }]);
    };

    const removeExperience = () => {
        if (experienceList.length > 1) {
            setExperienceList(prevList => prevList.slice(0, -1));
        }
    };

    const onSave = () => {
        setResumeInfo(prevState => ({
            ...prevState,
            experience: experienceList
        }));
    };

    // Update resumeInfo when experienceList changes, but debounce it to avoid flickering
    useEffect(() => {
        const timer = setTimeout(() => {
            setResumeInfo(prevState => ({
                ...prevState,
                experience: experienceList
            }));
        }, 300); // Debounce time

        return () => clearTimeout(timer);
    }, [experienceList, setResumeInfo]);

    return (
        <div className='p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10'>
            <h2 className='font-bold text-lg'>Work Experience</h2>
            <p>Add Your Previous Job Details</p>
            <div className='m-2 flex justify-end'>
                <Button variant='outline' className='border-primary flex'>
                    <Rocket /> Generate Using AI
                </Button>
            </div>
            <div>
                {experienceList.map((item, index) => (
                    <div key={index} className='grid grid-cols-2 gap-3 border p-3 my-5 rounded-lg'>
                        <div>
                            <label className='text-xs'>Job Role</label>
                            <Input
                                name="title"
                                value={item.title}
                                onChange={(event) => handleChange(index, event)}
                            />
                        </div>
                        <div>
                            <label className='text-xs'>Company Name</label>
                            <Input
                                name="companyName"
                                value={item.companyName}
                                onChange={(event) => handleChange(index, event)}
                            />
                        </div>
                        <div>
                            <label className='text-xs'>City</label>
                            <Input
                                name="city"
                                value={item.city}
                                onChange={(event) => handleChange(index, event)}
                            />
                        </div>
                        <div>
                            <label className='text-xs'>State</label>
                            <Input
                                name="state"
                                value={item.state}
                                onChange={(event) => handleChange(index, event)}
                            />
                        </div>
                        <div>
                            <label className='text-xs'>Start Date</label>
                            <Input
                                type="date"
                                name="startDate"
                                value={item.startDate}
                                onChange={(event) => handleChange(index, event)}
                            />
                        </div>
                        <div>
                            <label className='text-xs'>End Date</label>
                            <Input
                                type="date"
                                name="endDate"
                                value={item.endDate}
                                onChange={(event) => handleChange(index, event)}
                            />
                        </div>
                        {/* <div className='col-span-2'>
                            <label className='text-xs'>Work Summary</label>
                            <RichTextEditor
                                value={item.workSummery}
                                onChange={(event) => handleRichTextEditor(e.target.value, index)}
                            />
                        </div> */}
                        <div className='col-span-2'>
                            <label className='text-xs'>Work Summary</label>
                            <textarea
                                className="w-full p-2 border rounded"
                                value={item.workSummery}
                                onChange={(e) => handleRichTextEditor(e.target.value, index)}
                            />
                        </div>

                    </div>
                ))}
            </div>
            <div className='flex justify-between'>
                <div className='flex gap-2'>
                    <Button variant="outline" onClick={addNewExperience} className="text-primary">
                        + Add More Experience
                    </Button>
                    <Button variant="outline" onClick={removeExperience} className="text-primary">
                        - Remove
                    </Button>
                </div>
                <Button onClick={onSave}>Save</Button>
            </div>
        </div>
    );
}

export default Experience;


