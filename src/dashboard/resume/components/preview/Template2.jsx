import React from 'react';

function Template2({ resumeInfo }) {
  return (
    <div className="p-6 bg-white shadow-lg rounded-md">
      {/* Header Section */}
      <div className="text-center mb-6">
        <h1
          className="font-bold text-3xl"
          style={{ color: resumeInfo?.themeColor }}
        >
          {resumeInfo?.firstName} {resumeInfo?.lastName}
        </h1>
        <h2 className="text-xl font-medium text-gray-700">
          {resumeInfo?.jobTitle}
        </h2>
        <p className="text-sm text-gray-500">
          {resumeInfo?.address} | {resumeInfo?.phone} | {resumeInfo?.email}
        </p>
      </div>

      {/* Summary Section */}
      <section className="mb-6">
        <h2
          className="font-bold text-lg mb-2"
          style={{ color: resumeInfo?.themeColor }}
        >
          Summary
        </h2>
        <p className="text-sm text-gray-600">{resumeInfo?.summary}</p>
      </section>

      {/* Experience Section */}
      <section className="mb-6">
        <h2
          className="font-bold text-lg mb-2"
          style={{ color: resumeInfo?.themeColor }}
        >
          Work Experience
        </h2>
        {resumeInfo?.experience?.map((experience, index) => (
          <div key={index} className="mb-4">
            <h3
              className="font-bold text-md"
              style={{ color: resumeInfo?.themeColor }}
            >
              {experience?.title}
            </h3>
            <p className="text-sm text-gray-700">
              {experience?.companyName}, {experience?.city}, {experience?.state}
            </p>
            <p className="text-xs text-gray-500">
              {experience?.startDate} -{' '}
              {experience?.currentlyWorking ? 'Present' : experience.endDate}
            </p>
            <ul className="list-disc list-inside text-sm text-gray-600 mt-2">
              {experience?.workSummery
                ?.split('•')
                ?.filter((item) => item.trim())
                ?.map((item, idx) => (
                  <li key={idx}>{item.trim()}</li>
                ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Education Section */}
      <section className="mb-6">
        <h2
          className="font-bold text-lg mb-2"
          style={{ color: resumeInfo?.themeColor }}
        >
          Education
        </h2>
        {resumeInfo?.education.map((education, index) => (
          <div key={index} className="mb-4">
            <h3
              className="font-bold text-md"
              style={{ color: resumeInfo?.themeColor }}
            >
              {education?.universityName}
            </h3>
            <p className="text-sm text-gray-700">
              {education?.degree} in {education?.major}
            </p>
            <p className="text-xs text-gray-500">
              {education?.startDate} - {education?.endDate}
            </p>
            <p className="text-sm text-gray-600 mt-2">
              {education?.description}
            </p>
          </div>
        ))}
      </section>

      {/* Skills Section */}
      <section>
        <h2
          className="font-bold text-lg mb-2"
          style={{ color: resumeInfo?.themeColor }}
        >
          Skills
        </h2>
        <div className="grid grid-cols-2 gap-2">
          {resumeInfo?.skills.map((skill, index) => (
            <div key={index} className="flex items-center">
              <div
                className="w-full bg-gray-200 rounded-full h-2.5"
                style={{ backgroundColor: resumeInfo?.themeColor + "40" }}
              >
                <div
                  className="h-2.5 rounded-full"
                  style={{
                    width: `${skill.rating}%`,
                    backgroundColor: resumeInfo?.themeColor,
                  }}
                ></div>
              </div>
              <span className="ml-2 text-sm">{skill.name}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Template2;
