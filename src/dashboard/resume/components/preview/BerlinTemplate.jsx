import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
const BerlinTemplate = ({resumeInfo}) => {
    return (
    <div className="max-w-4xl mx-auto p-8 bg-gray-100 min-h-screen flex justify-center">
    <div className="bg-white shadow-lg p-8 rounded-lg w-full">

      <div>
        <h1 className="text-4xl font-bold text-left">{resumeInfo?.firstName}</h1>
        <h1 className="text-4xl font-bold text-left">{resumeInfo?.lastName}</h1>
        <p className="text-gray-600 text-lg text-left">{resumeInfo?.jobTitle}</p>
      </div>
      
      <Separator className="my-4 border-gray-300" />

      {/* Main Layout */}
      <div className="grid grid-cols-3 gap-6 relative">
        
        {/* Left Section */}
        <div className="col-span-1 border-r pr-6">
          <h2 className="font-semibold text-lg">DETAILS</h2>
          <div className="w-6 border-b-4 border-black my-2"></div>
          <p><strong>Address</strong> </p>
          <p className="mb-2">{resumeInfo?.address}</p>
          <p><strong>Phone</strong> </p>
          <p className="mb-2">{resumeInfo?.phone}</p>
          <p><strong>Email</strong> </p>
          <p className="mb-2">{resumeInfo?.email}</p>

          
          <h2 className="font-semibold text-lg mt-4">SKILLS</h2>
          <div className="w-6 border-b-4 border-black my-2"></div>
          {resumeInfo?.skills.map((skill, index) => (
            <div key={index} className="mb-2">
            <p className="font-semibold mb-1">{skill?.name}</p>
            <Progress value={skill?.rating} className="h-2.5" />
          </div>
          ))}
        
        <h2 className="font-semibold text-lg mt-4">LANGUAGES</h2>
            <div className="w-6 border-b-4 border-black my-2"></div>
            {resumeInfo?.languages.map((language, index) => (
             <div key={index} className="mb-2">
             <p className="font-semibold mb-1">{language.name}</p>
             <Progress value={language.rating} className="h-2.5 bg-gray-300" />
           </div>
            ))}
            </div>

        {/* Right Section */}
        <div className="col-span-2 pl-6">
          <h2 className="font-semibold text-lg">PROFILE</h2>
          <div className="w-6 border-b-4 border-black my-2"></div>
          <p className="text-gray-700 mb-4">{resumeInfo.summary}</p>
          
          <Separator className="my-4 border-gray-300" />
          
          <h2 className="font-semibold text-lg">EMPLOYMENT HISTORY</h2>
          <div className="w-6 border-b-4 border-black my-2"></div>
          {resumeInfo?.experience.map((job, index) => (
            <div key={index} className="mt-4">
              <h3 className="font-semibold text-md">{job.title}, {job.companyName} <span className="text-gray-500 float-right">{job.city}, {job.state}</span></h3>
              <p className="text-gray-500">{job.startDate} - {job.currentlyWorking ? 'Present' : job.endDate}</p>
                  <p>{job.workSummery}</p>
            </div>
          ))}
          
          <Separator className="my-4 border-gray-300" />
          <h2 className="text-lg font-semibold">EDUCATION</h2>
          <div className="w-6 border-b-4 border-black my-2"></div>
               {resumeInfo?.education.map((edu, index) => (
                <div key={index} className="mb-4">
                    <h3 className="font-semibold">{edu?.degree} of {edu?.major}, {edu?.universityName}</h3>
                    <p className="text-gray-500">{edu.startDate} - {edu.endDate}</p>
                </div>
              ))}
               <Separator className="my-4 border-gray-300" />
               <h2 className="font-semibold text-lg">PROJECTS</h2>
            <div className="w-6 border-b-4 border-black my-2"></div>
            {resumeInfo?.projects.map((project, index) => (
              <div key={index} className="mb-4">
                <h3 className="font-semibold">{project?.title}</h3>
                <p>{project?.description}</p>
                <p className="text-sm"><strong>Technologies:</strong> {project?.technologies?.join(", ")}</p>
                <a href={project?.link} className="text-blue-500" target="_blank" rel="noopener noreferrer">View Project</a>
              </div>
            ))}
             <Separator className="my-4 border-gray-300" />
            <h2 className="font-semibold text-lg">PUBLICATIONS</h2>
            <div className="w-6 border-b-4 border-black my-2"></div>
            {resumeInfo?.publications.map((pub, index) => (
              <div key={index} className="mb-4">
                <h3 className="font-semibold">{pub?.title}</h3>
                <p>{pub?.publication}, {pub?.year} - <a href={pub?.url} className="text-blue-500">View Publication</a></p>
              </div>
            ))}
             <Separator className="my-4 border-gray-300" />
            <h2 className="font-semibold text-lg">CERTIFICATIONS</h2>
            <div className="w-6 border-b-4 border-black my-2"></div>
            {resumeInfo?.certifications?.map((cert, index) => (
              <div key={index} className="mb-4">
                <h3 className="font-semibold">{cert?.certificatetitle}</h3>
                <p>{cert?.description}</p>
              </div>
            ))}
            <Separator className="my-4 border-gray-300" />
             <h2 className="font-semibold text-lg">RECOMMENDATIONS</h2>
            <div className="w-6 border-b-4 border-black my-2"></div>
            {resumeInfo?.recommendations?.map((rec, index) => (
              <div key={index} className="mb-4">
                <h3 className="font-semibold">{rec?.name}</h3>
                <p className="text-sm text-gray-600">{rec?.relationship}</p>
                <p className="italic">"{rec?.recommendation}"</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  </div>
    );
};

export default BerlinTemplate