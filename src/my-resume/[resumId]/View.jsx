import Header from '@/components/custom/Header';
import { Button } from '@/components/ui/button';
import { ResumeInfoContext } from '@/context/ResumeInfoContext';
import ResumePreview from '@/dashboard/resume/components/ResumePreview';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import dummy from '@/dummy/dummy';

function View() {
    const [resumeInfo, setResumeInfo] = useState();
    const { resumeId } = useParams();

    useEffect(() => {
        GetResumeInfo();
    }, []);

    const GetResumeInfo = () => {
        // Using dummy data directly
        setResumeInfo(dummy);
        console.log('Dummy data loaded:', dummy);
    };

    const HandleDownload = () => {
        window.print();
    };

    return (
        <ResumeInfoContext.Provider value={{ resumeInfo, setResumeInfo }}>
            <div id="no-print">
                <Header />
                <div className="my-10 mx-10 md:mx-20 lg:mx-36">
                    <h2 className="text-center text-2xl font-medium">
                        Woohoo! Your Resume is ready
                    </h2>
                    <p className="text-center text-gray-600">
                        Now you are ready to download your resume and download most relevant questions on your resume. Good Luck for your Interviews.
                    </p>

                    <div className="flex justify-between px-44 my-10">
                        <Button onClick={HandleDownload}>Download</Button>
                        <Button>Download Questions</Button>
                    </div>
                </div>
            </div>
            <div id="print-area">
                <ResumePreview />
            </div>
        </ResumeInfoContext.Provider>
    );
}

export default View;
