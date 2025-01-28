
import React from 'react';

function Template1({ resumeInfo }) {
  return (
    <div className="p-6">
      {/* Personal Details Section */}
      <div>
        <h2
          className="font-bold text-xl text-center"
          style={{ color: resumeInfo?.themeColor }}
        >
          {resumeInfo?.firstName} {resumeInfo?.lastName}
        </h2>
        <h2 className="text-center text-sm font-medium">
          {resumeInfo?.jobTitle}
        </h2>
        <h2 className="text-center font-normal text-xs">
          {resumeInfo?.address}
        </h2>
        <div className="flex justify-between">
          <h2
            className="font-normal text-xs"
            style={{ color: resumeInfo?.themeColor }}
          >
            {resumeInfo?.phone}
          </h2>
          <h2
            className="font-normal text-xs"
            style={{ color: resumeInfo?.themeColor }}
          >
            {resumeInfo?.email}
          </h2>
        </div>
        <hr
          className="border-[1.5px] my-2"
          style={{ borderColor: resumeInfo?.themeColor }}
        ></hr>
      </div>

      {/* Summary Section */}
      <div className="my-4">
        <h2
          className="text-center font-bold text-sm mb-2"
          style={{ color: resumeInfo?.themeColor }}
        >
          Summary
        </h2>
        <hr style={{ borderColor: resumeInfo?.themeColor }} />
        <p className="text-xs mt-2">{resumeInfo?.summary}</p>
      </div>

      {/* Education Section */}
      <div className="my-6">
        <h2
          className="text-center font-bold text-sm mb-2"
          style={{ color: resumeInfo?.themeColor }}
        >
          Education
        </h2>
        <hr style={{ borderColor: resumeInfo?.themeColor }} />

        {resumeInfo?.education.map((education, index) => (
          <div key={index} className="my-5">
            <h2
              className="text-sm font-bold"
              style={{ color: resumeInfo?.themeColor }}
            >
              {education.universityName}
            </h2>
            <h2 className="text-xs flex justify-between">
              {education?.degree} in {education?.major}
              <span>
                {education?.startDate} - {education?.endDate}
              </span>
            </h2>
            <p className="text-xs my-2">{education?.description}</p>
          </div>
        ))}
      </div>

      {/* Work Experience Section */}
      <div className="my-6">
        <h2
          className="text-center font-bold text-sm mb-2"
          style={{ color: resumeInfo?.themeColor }}
        >
          Work Experience
        </h2>
        <hr style={{ borderColor: resumeInfo?.themeColor }} />

        {resumeInfo?.experience?.map((experience, index) => (
          <div key={index} className="my-5">
            <h2
              className="text-sm font-bold"
              style={{ color: resumeInfo?.themeColor }}
            >
              {experience?.title}
            </h2>
            <h2 className="text-xs flex justify-between">
              {experience?.companyName}, {experience?.city}, {experience?.state}
              <span>
                {experience?.startDate} To{' '}
                {experience?.currentlyWorking ? 'Present' : experience.endDate}
              </span>
            </h2>
            <div
              className="text-xs my-2"
              dangerouslySetInnerHTML={{ __html: experience?.workSummery }}
            />
          </div>
        ))}
      </div>

      {/* Skills Section */}
      <div className="my-6">
        <h2
          className="text-center font-bold text-sm mb-2"
          style={{ color: resumeInfo?.themeColor }}
        >
          Skills
        </h2>
        <hr style={{ borderColor: resumeInfo?.themeColor }} />

        <div className="grid grid-cols-2 gap-3 my-4">
          {resumeInfo?.skills.map((skill, index) => (
            <div key={index} className="flex items-center">
              <h2
                className="text-sm font-medium"
                style={{ color: resumeInfo?.themeColor }}
              >
                {skill.name}
              </h2>
            </div>
          ))}
        </div>

        <hr style={{ borderColor: resumeInfo?.themeColor }} />
      </div>
    </div>
  );
}

export default Template1;
