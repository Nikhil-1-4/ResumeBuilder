import React, { useState } from "react";


const TorontoATSTemplate = ({resumeInfo}) => {
  

  const [selectedColor, setSelectedColor] = useState({
    textColor: "text-black",
    bgColor: "bg-black",
  });

  const colors = [
    { name: "Black", textColor: "text-black", bgColor: "bg-black", borderColor: "border-black" },
    { name: "Dark Blue", textColor: "text-blue-900", bgColor: "bg-blue-900", borderColor: "border-blue-900" },
    { name: "Dark Violet", textColor: "text-purple-900", bgColor: "bg-purple-900", borderColor: "border-purple-900" },
    { name: "Midnight Green", textColor: "text-green-900", bgColor: "bg-green-900", borderColor: "border-green-900" },
    { name: "Red", textColor: "text-red-700", bgColor: "bg-red-700", borderColor: "border-red-700" },
  ];

  return (
    <div className="relative flex flex-col items-center min-h-screen bg-gray-300">
      {/* First Page */}
      <div className={`shadow-xl p-8 rounded-lg w-[210mm] h-[297mm] flex flex-col bg-white transition duration-300 ${selectedColor.textColor}`}>
        
        {/* Header Section */}
        <div className="flex gap-6 border-b pb-4">
          <div className="w-1/3">
            <div className="w-28 h-28 bg-gray-300 square-full"></div>
            <p className={`mt-2 font-bold ${selectedColor.textColor}`}>{resumeInfo?.jobTitle}</p>
            <p className={`text-sm ${selectedColor.textColor}`}>{resumeInfo?.email}</p>
            <p className={`text-sm ${selectedColor.textColor}`}>{resumeInfo?.phone}</p>
            <p className={`text-sm mt-3 ${selectedColor.textColor}`}>{resumeInfo?.address}</p>
          </div>

          <div className="w-2/3">
            <h1 className={`text-6xl font-bold ${selectedColor.textColor}`}>{resumeInfo?.firstName} {resumeInfo?.lastName}</h1>
            <div className="mt-2 p-4 bg-gray-200 rounded-xl shadow-md">
              <h2 className={`text-lg font-semibold ${selectedColor.textColor}`}>Profile</h2>
              <p className={`text-sm ${selectedColor.textColor}`}>{resumeInfo?.summary}</p>
            </div>
          </div>
        </div>

        <div className="flex mt-6 gap-6">
          {/* Left Side - Experience */}
          <div className="w-2/3">
            <h2 className={`text-3xl font-semibold ${selectedColor.textColor}`}>Employment History</h2> 
            {resumeInfo?.experience?.map((exp, index) => (
              <div key={index} className="mt-4">
                <h3 className={`text-lg font-semibold text-white px-2 py-1 inline-block ${selectedColor.bgColor}`}>
                  {exp.title} at {exp.companyName}, {exp.city}, {exp.state}
                </h3>
                <p className={`text-lg font-mono ${selectedColor.textColor}`}>
                  {exp.startDate} - {exp.currentlyWorking ? "Present" : exp.endDate}
                </p>
                <ul className={`text-sm mt-2 list-disc pl-5 ${selectedColor.textColor}`}>
                  {exp.workSummery.split('\n').map((point, index) => (
                    <li key={index}>{point.trim()}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          {/* Right Side - Skills & Languages */}
          <div className="w-1/3 flex flex-col gap-6">
            {resumeInfo?.skills?.length > 0 && (
              <div className="bg-gray-200 p-4 rounded-xl shadow-md">
                <h2 className={`text-xl font-semibold border-b pb-1 ${selectedColor.textColor}`}>Skills</h2>
                <ul className={`mt-2 text-sm ${selectedColor.textColor}`}>
                  {resumeInfo?.skills?.map((skill, index) => (
                    <li key={index} className="mt-2 font-medium">{skill.name}</li>
                  ))}
                </ul>
              </div>
            )}
            {resumeInfo?.languages?.length > 0 && (
              <div className="bg-gray-200 p-4 rounded-xl shadow-md">
                <h2 className={`text-xl font-semibold border-b pb-1 ${selectedColor.textColor}`}>Languages</h2>
                <ul className={`mt-2 text-sm ${selectedColor.textColor}`}>
                  {resumeInfo?.languages?.map((lang,index) => (
                    <li key={index} className="mt-2 font-medium">{lang?.name}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Education Section */}
        <div className="mt-6">
          <h2 className={`text-3xl font-semibold ${selectedColor.textColor}`}>Education</h2>
          {resumeInfo?.education?.map((edu,index) => (
            <div key={index} className="mt-4">
              <h3 className={`text-lg font-semibold text-white px-2 py-1 inline-block ${selectedColor.bgColor}`}>
                {edu.degree} in {edu.major}, {edu.universityName}
              </h3>
              <p className={`text-lg font-mono ${selectedColor.textColor}`}>
                {edu.startDate} - {edu.endDate}
              </p>
            </div>
          ))}
        </div>

      </div>

      {/* Second Page (Projects) with Header */}
      {resumeInfo?.project?.length > 0 && (
        <div className={`shadow-xl p-8 rounded-lg w-[210mm] h-[297mm] flex flex-col mt-6 bg-white transition duration-300 ${selectedColor.textColor}`}>
          
          {/* Second Page Header */}
          <div className="flex gap-6 border-b pb-4">
            <div className="w-full">
              <h1 className={`text-4xl font-bold ${selectedColor.textColor}`}>{resumeInfo?.firstName} {resumeInfo?.lastName}</h1>
              <p className={`text-l font-semibold ${selectedColor.textColor}`}>{resumeInfo?.jobTitle}</p>
            </div>
          </div>

          {/* Projects Section */}
          <h2 className={`text-3xl font-semibold mt-6 ${selectedColor.textColor}`}>Projects</h2>
          {resumeInfo?.project?.map((proj, index) => (
            <div key={index} className="mt-4">
              <h3 className={`text-lg font-semibold text-white px-2 py-1 inline-block mr-2 ${selectedColor.bgColor}`}>
                {proj?.name}
              </h3>
              <a href={proj?.link} className="text-blue-500 underline">
                  ProjectLink
                </a>
              <p className={`text-small font-small mr-2 ${selectedColor.textColor}`}>
                 {proj?.description} 
              </p>
            </div>
          ))}
          <h2 className={`text-3xl font-semibold mt-6 ${selectedColor.textColor}`}>Certifications</h2>
          {resumeInfo?.certifications?.map((cer) => (
            <div key={cer.id} className="mt-4">
              <h3 className={`text-lg font-semibold text-white px-2 py-1 inline-block mr-2 ${selectedColor.bgColor}`}>
                {cer.certificateTitle}
              </h3>
              <a href={cer.link} className="text-blue-500 underline">
                  ViewCertificate
                </a>
    
            </div>
            
          ))}
           <h2 className={`text-3xl font-semibold mt-6 ${selectedColor.textColor}`}>Publications</h2>
          {resumeInfo?.publications?.map((pub, index) => (
            <div key={index} className="mt-4">
              <h3 className={`text-lg font-semibold text-white px-2 py-1 inline-block mr-2 ${selectedColor.bgColor}`}>
                {pub.name}
              </h3>
              <a href={pub?.url} className="text-blue-500 underline">
                  ViewPublication
                </a>
    
            </div>
            
          ))}
           <h2 className={`text-3xl font-semibold mt-6 ${selectedColor.textColor}`}>Recommandations</h2>
          {resumeInfo?.recommandations?.map((rec, index) => (
            <div key={index} className="mt-4">
              <h3 className={`text-lg font-semibold text-white px-2 py-1 inline-block mr-2 ${selectedColor.bgColor}`}>
                {rec?.name}
              </h3>
              {/* <p>{rec.email} | {rec.contact}</p> */}
              <p className={`text-small font-small mt-2 mr-2 ${selectedColor.textColor}`}>
                 {rec?.recommandation} 
              </p>
            </div>
          ))}
        </div>
      )}

      {/* Color Selector Buttons */}
      <div className="absolute bottom-[-60px] left-0 flex gap-4">
        {colors.map((color, index) => (
          <button
            key={index}
            className={`w-10 h-10 rounded-full ${color.bgColor} transition duration-300 border-4 ${color.borderColor} hover:bg-white hover:border-4 hover:${color.borderColor}`}
            onClick={() => setSelectedColor({ textColor: color.textColor, bgColor: color.bgColor })}
          ></button>
        ))}
      </div>

    </div>
  );
};

export default TorontoATSTemplate;