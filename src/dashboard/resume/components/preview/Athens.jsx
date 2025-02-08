import React, { useState } from "react";


function Athens ({resumeInfo}) {
  // Ensure that resumeInfo exists and fallback values are provided if any key is missing
  const [themeColor, setThemeColor] = useState(resumeInfo?.themeColor || "#007bff");

  // Helper function to safely access resumeInfo properties
  // const getData = (data, defaultValue = []) => (Array.isArray(data) ? data : defaultValue);
  console.log(resumeInfo);
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-12 border border-gray-300 relative font-sans">
      {/* Color Picker Section (Bottom Left Corner) */}
      <div className="absolute bottom-6 left-6 flex space-x-2">
        {["#007bff", "#FFA500", "#6c757d", "#28a745", "#dc3545"].map((color) => (
          <button
            key={color}
            className="w-6 h-6 rounded-full border border-gray-300"
            style={{ backgroundColor: color }}
            onClick={() => setThemeColor(color)}
          />
        ))}
      </div>

      {/* Header Section */}
      <div className="flex flex-col pb-4">
        {/* Name */}
        <div>
          <h1 className="text-4xl font-bold" style={{ color: themeColor }}>
            {resumeInfo?.firstName} {resumeInfo?.lastName}
          </h1>
        </div>

        {/* Job Title and Contact Info (Email, Phone) */}
        <div className="flex justify-between items-center">
          <h2 className="text-xl text-gray-600" style={{ color: themeColor }} >{resumeInfo?.jobTitle}</h2>
          <div className="flex items-center space-x-4 text-gray-600">
            <a href={`mailto:${resumeInfo?.email}`} className="text-blue-500">
              {resumeInfo?.email}
            </a>
            <span style={{ color: themeColor }}>{resumeInfo?.phone}</span>
          </div>
        </div>

        {/* Address */}
        <div className="text-right text-gray-600 mt-2" style={{ color: themeColor }}>
          <span>{resumeInfo?.address}</span>
        </div>
      </div>

      {/* Summary Section */}
      <div className="mt-6">
        <p className="text-gray-700 leading-relaxed">{resumeInfo?.summary}</p>
      </div>

      {/* Professional Experience Section */}
      <div className="mt-6">
        <h3 className="text-2xl font-semibold mb-2" style={{ color: themeColor }}>
          Professional Experience
        </h3>
        {resumeInfo?.experience?.map((exp,index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between">
              <h4 className="text-lg font-semibold text-gray-800" style={{ color: themeColor }}>
                {exp?.companyName}, {exp?.city}, {exp?.state}
              </h4>
              <p className="text-gray-600 italic" style={{ color: themeColor }}>
                {exp?.startDate} {exp?.currentlyWorking ? " - Present" : ` - ${exp?.endDate}`}
              </p>
            </div>
            <p className="text-gray-800 font-medium" style={{ color: themeColor }}>{exp?.title}</p>
            <p className="text-gray-700 mt-1">{exp?.workSummery}</p>
          </div>
        ))}
      </div>

      {/* Education Section */}
      <div className="mt-6">
        <h3 className="text-2xl font-semibold mb-2" style={{ color: themeColor }}>
          Education
        </h3>
        {resumeInfo?.education?.map((edu,index) => (
          <div key={index} className="mb-2">
            <p className="text-gray-800 font-semibold" style={{ color: themeColor }}>{edu?.degree} in {edu?.major}</p>
            <div className="flex justify-between text-gray-600 italic">
              <p>{edu?.universityName}</p>
              {/* <p>{edu?.startDate} - {edu?.endDate}</p> */}
            </div>
            <p className="text-gray-700 mt-1">{edu?.description}</p>
          </div>
        ))}
      </div>

      {/* Areas of Expertise Section */}
      <div className="mt-6">
        <h3 className="text-2xl font-semibold mb-2" style={{ color: themeColor }}>
          Areas of Expertise
        </h3>
        <div className="grid grid-cols-2 gap-4 text-gray-700">
          <ul className="list-disc list-inside">
            {resumeInfo?.skills?.map((skill,index) => (
              <li key={index}>{skill?.name}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Certifications Section */}
      <div className="mt-6">
  <h3 className="text-2xl font-semibold mb-2" style={{ color: themeColor }}>
    Certifications
  </h3>
  {resumeInfo?.certifications?.map((cert,index) => (
    <div key={index} className="mb-2">
      <p className="text-gray-800 font-semibold">{cert.certificateTitle}</p> {/* Use the 'name' field */}
    </div>
  ))}
      </div>
      {/* Projects Section */}
<div className="mt-6">
  <h3 className="text-2xl font-semibold mb-2" style={{ color: themeColor }}>
    Projects
  </h3>
  {resumeInfo?.projects?.map((project, index) => (
    <div key={index} className="mb-4">
      <p className="text-gray-800 font-semibold">{project?.title}</p>
      <p className="text-gray-700">{project?.description}</p>
      {project?.technologies?.length > 0 && (
        <p className="text-gray-600">Technologies: {project?.technologies?.join(", ")}</p>
      )}
      {project?.link && (
        <p>
          <a href={project.link} className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
            {project.link}
          </a>
        </p>
      )}
    </div>
  ))}
</div>

{/*Publications Section */}
<div className="mt-6">
  <h3 className="text-2xl font-semibold mb-2" style={{ color: themeColor }}>
    Publications
  </h3>
  {resumeInfo?.publications?.map((publication) => (
    <div key={publication?.id} className="mb-4">
      <p className="text-gray-800 font-semibold">{publication?.title}</p>
      <p className="text-gray-700">{publication?.publisher}</p>
      {publication?.url && (
        <p>
          <a href={publication.url} className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
            {publication.url}
          </a>
        </p>
      )}
    </div>
  ))}
</div> 

      {/* Recommendations Section */}
       <div className="mt-6">
        <h3 className="text-2xl font-semibold mb-2" style={{ color: themeColor }}>
          Recommendations
        </h3>
        {resumeInfo?.recommendations.map((recommendation) => (
          <div key={recommendation?.id} className="mb-4">
            <p className="text-gray-800 font-semibold">{recommendation?.name}</p>
            <p className="text-gray-600 italic">{recommendation?.relationship}</p>
            <p className="text-gray-700">{recommendation?.recommendation}</p>
          </div>
        ))}
      </div>

      {/* Languages Section */}
      {/* <div className="mt-6">
        <h3 className="text-2xl font-semibold mb-2" style={{ color: themeColor }}>
          Languages
        </h3>
        {resumeInfo?.languages.map((language) => (
          <div key={language?.id} className="mb-2">
            <p className="text-gray-800">{language?.name} {language?.proficiency}</p>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Athens;

















