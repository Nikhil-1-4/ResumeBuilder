import { Link2 } from 'lucide-react';
//import { createIcons, icons } from 'lucide';
const PragueATSTemplate = ({ resumeInfo }) => {
    return (
        <div className="max-w-3xl mx-auto p-10 bg-white shadow-md rounded-md">
            {/* Header Section */}
            <div className="flex justify-between items-start mb-6">
                <div>
                    <h1 className="text-3xl font-medium text-orange-700">
                        {resumeInfo?.firstName} {resumeInfo?.lastName}
                    </h1>
                    <p className="text-lg text-orange-700 mt-">{resumeInfo?.jobTitle}</p>
                </div>
                <div className="text-left text-orange-700">
                    <p>{resumeInfo?.email} • {resumeInfo?.phone}</p>
                    <p>{resumeInfo?.address}</p>
                </div>
            </div>
            
            {/* Summary Section */}
            <div className="mb-6">
                <p className="text-gray-700 leading-relaxed">{resumeInfo?.summary}</p>
            </div>

            {/* Experience Section */}
            <div className="mb-10">
                <h2 className="text-3xl font-medium text-orange-700 mb-2">Career Experience</h2>
                {resumeInfo?.experience?.map((exp,index) => (
                    <div key={index} className="mb-8 border-b pb-4 border-gray-300">
                        <div className="flex justify-between items-center">
                            <h3 className="text-lg font-semibold text-orange-700">
                                {exp?.companyName}, {exp?.city}, {exp?.state}
                            </h3>
                            <p className="text-orange-700 text-sm font-medium">
                                {exp?.startDate} - {exp?.currentlyWorking ? "Present" : exp?.endDate}
                            </p>
                        </div>
                        <p className="text-lg font-semibold text-orange-700 mt-1">{exp?.title}</p>
                        <ul className="list-disc text-gray-700 text-sm text-left"> 
    {exp?.workSummery?.split("•")?.map((point, index) => (
        <li 
            key={index} 
            className="pl-4 text-gray-700 text-sm leading-relaxed"
            style={{ textIndent: '0', paddingLeft: '1rem' }} // Ensuring left alignment
        >
            {point?.trim()}
        </li>
    ))}
</ul>


                    </div>
                ))}
            </div>

            {/* Education Section */}
            <div className="mb-6">
                <h2 className="text-3xl font-medium text-orange-700 mb-4" >Education</h2>
                {resumeInfo?.education?.map((edu,index) => (
                    <div key={index} className="mb-4">
                        <h3 className="text-lg font-semibold text-orange-700">{edu?.degree} in {edu?.major}</h3>
                        <p className="text-gray-700">
                            {edu?.universityName} , {edu?.startDate} - {edu?.endDate}
                        </p>
                    
                    </div>
                ))}
            </div>

            {/* Skills Section */}
            <div className="mb-6">
                <h2 className="text-3xl font-medium text-orange-700 mb-3">Technical Proficiencies</h2>
                <div>
                    {resumeInfo?.skills?.map((skill, index) => (
                        <div key={skill?.id} className={`py-2 ${index !== resumeInfo?.skills?.length - 1 ? 'border-b border-gray-300' : ''}`}>
                            <p className="text-gray-700 text-md">{skill?.name}</p>
                        </div>
                    ))}
                </div>
            </div>
            
            
            {/* Projects Section */}
            <div className="mb-6">
                <h2 className="text-3xl font-medium text-orange-700 mb-3">Projects</h2>
                {resumeInfo?.projects?.map((project,index) => (
                    <div key={index} className="mb-6 border-b pb-4 border-gray-300">
                        <h3 className="text-lg font-semibold text-orange-700">{project?.name}</h3>
                        <a href={project?.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-1 py-1 mt-1 text-xs font-medium text-gray-700 border border-gray-400 rounded-md hover:bg-gray-100">
                            Show project
                            
                            <Link2 size={16} strokeWidth={2.5} className="ml-2" />
                        </a>
                        <p className="text-gray-700 mt-2">{project?.description}</p>
                    </div>
                ))}
            </div>
            {/* Publications Section */}
            <div className="mb-6">
                <h2 className="text-3xl font-medium text-orange-700 mb-3">Publications</h2>
                {resumeInfo?.publications?.map((pub,index) => (
                    <div key={index} className="mb-6 border-b pb-4 border-gray-300">
                        <h3 className="text-lg font-semibold text-orange-700">{pub?.title}</h3>
                        <p className="text-sm text-gray-600">{pub?.publisher}</p>
                        {/* <p className="text-gray-500 text-sm">Published on {pub?.publicationDate}</p> */}
                        <a href={pub?.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-1 py-1 mt-1 text-xs font-medium text-gray-700 border border-gray-400 rounded-md hover:bg-gray-100">
                            Show publication
                            <Link2 size={16} strokeWidth={2.5} className="ml-2" />
                        </a>
                    </div>
                ))}
            </div>
        
            <div className="mb-6">
                <h2 className="text-3xl font-medium text-orange-700 mb-3">Licenses & Certifications</h2>
                {resumeInfo?.certifications?.map((cert,index) => (
                    <div key={index} className="mb-6 border-b pb-4 border-gray-300">
        
                        
                        <p className="text-gray-500 text-sm">{cert?.certificateTitle}</p>
                        <p className="text-gray-500 text-sm">{cert?.description}</p>
                    
                    </div>
                ))}
            </div>
            {/* Recommendations Section */}
            <div className="mb-6">
                <h2 className="text-3xl font-medium text-orange-700 mb-3">Recommendations</h2>
                {resumeInfo?.recommendations?.map((rec,index) => (
                    <div key={index} className="mb-6 border-b pb-4 border-gray-300">
                        <h3 className="text-lg font-semibold text-orange-700">{rec?.name}</h3>
                        <p className="text-sm text-gray-600">{rec?.title}</p>
                        <p className="text-gray-500 text-sm">{rec?.relationship}</p>
                        <p className="text-gray-700 mt-2">{rec?.recommendation}</p>
                    </div>
                ))}
            </div>

            {/* languages Section */}
            <div className="mb-6">
                <h2 className="text-3xl font-medium text-orange-700 mb-3">Languages</h2>
                <div>
                    {resumeInfo?.languages?.map((language, index) => (
                        <div key={index} className={`py-2 ${index !== resumeInfo?.languages?.length - 1 ? 'border-b border-gray-300' : ''}`}>
                            <h3 className="text-lg font-semibold text-orange-700">{language?.name}</h3>
                            <p className="text-gray-700 text-md">{language?.proficiency}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PragueATSTemplate;
