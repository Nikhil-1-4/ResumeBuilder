import React, { useState } from 'react';

function Template5({ resumeInfo }) {
  // State for section visibility toggles
  const [showSummary, setShowSummary] = useState(true);
  const [showEducation, setShowEducation] = useState(true);
  const [showExperience, setShowExperience] = useState(true);
  const [showSkills, setShowSkills] = useState(true);
  const [showCertificates, setShowCertificates] = useState(true);
  const [showProjects, setShowProjects] = useState(true);
  const [showAchievements, setShowAchievements] = useState(true);

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
        <h2 className="text-center text-sm font-medium">{resumeInfo?.jobTitle}</h2>
        <h2 className="text-center font-normal text-xs">{resumeInfo?.address}</h2>
        <div className="flex justify-between">
          <h2 className="font-normal text-xs" style={{ color: resumeInfo?.themeColor }}>
            {resumeInfo?.phone}
          </h2>
          <h2 className="font-normal text-xs" style={{ color: resumeInfo?.themeColor }}>
            {resumeInfo?.email}
          </h2>
        </div>
        <hr className="border-[1.5px] my-2" style={{ borderColor: resumeInfo?.themeColor }} />
      </div>

      {/* Summary Section */}
      {showSummary && (
        <div className="my-4">
          <h2 className="text-center font-bold text-sm mb-2" style={{ color: resumeInfo?.themeColor }}>
            Summary
          </h2>
          <hr style={{ borderColor: resumeInfo?.themeColor }} />
          <p className="text-xs mt-2">{resumeInfo?.summary}</p>
        </div>
      )}
      <button onClick={() => setShowSummary(!showSummary)} className="text-xs underline">
        {showSummary ? 'Remove Summary' : 'Add Summary'}
      </button>

      {/* Education Section */}
      {showEducation && (
        <div className="my-6">
          <h2 className="text-center font-bold text-sm mb-2" style={{ color: resumeInfo?.themeColor }}>
            Education
          </h2>
          <hr style={{ borderColor: resumeInfo?.themeColor }} />
          {resumeInfo?.education.map((education, index) => (
            <div key={index} className="my-5">
              <h2 className="text-sm font-bold" style={{ color: resumeInfo?.themeColor }}>
                {education.universityName}
              </h2>
              <h2 className="text-xs flex justify-between">
                {education?.degree} in {education?.major}
                <span>{education?.startDate} - {education?.endDate}</span>
              </h2>
              <p className="text-xs my-2">{education?.description}</p>
            </div>
          ))}
        </div>
      )}
      <button onClick={() => setShowEducation(!showEducation)} className="text-xs underline">
        {showEducation ? 'Remove Education' : 'Add Education'}
      </button>

      {/* Work Experience Section */}
      {showExperience && (
        <div className="my-6">
          <h2 className="text-center font-bold text-sm mb-2" style={{ color: resumeInfo?.themeColor }}>
            Work Experience
          </h2>
          <hr style={{ borderColor: resumeInfo?.themeColor }} />
          {resumeInfo?.experience?.map((experience, index) => (
            <div key={index} className="my-5">
              <h2 className="text-sm font-bold" style={{ color: resumeInfo?.themeColor }}>
                {experience?.title}
              </h2>
              <h2 className="text-xs flex justify-between">
                {experience?.companyName}, {experience?.city}, {experience?.state}
                <span>{experience?.startDate} To {experience?.currentlyWorking ? 'Present' : experience.endDate}</span>
              </h2>
              <div className="text-xs my-2" dangerouslySetInnerHTML={{ __html: experience?.workSummery }} />
            </div>
          ))}
        </div>
      )}
      <button onClick={() => setShowExperience(!showExperience)} className="text-xs underline">
        {showExperience ? 'Remove Experience' : 'Add Experience'}
      </button>

      {/* Skills Section */}
      {showSkills && (
        <div className="my-6">
          <h2 className="text-center font-bold text-sm mb-2" style={{ color: resumeInfo?.themeColor }}>
            Skills
          </h2>
          <hr style={{ borderColor: resumeInfo?.themeColor }} />
          <div className="grid grid-cols-2 gap-3 my-4">
            {resumeInfo?.skills.map((skill, index) => (
              <div key={index} className="flex items-center">
                <h2 className="text-sm font-medium" style={{ color: resumeInfo?.themeColor }}>
                  {skill.name}
                </h2>
              </div>
            ))}
          </div>
        </div>
      )}
      <button onClick={() => setShowSkills(!showSkills)} className="text-xs underline">
        {showSkills ? 'Remove Skills' : 'Add Skills'}
      </button>

      {/* Certificates Section */}
      {showCertificates && (
        <div className="my-6">
          <h2 className="text-center font-bold text-sm mb-2" style={{ color: resumeInfo?.themeColor }}>
            Certificates
          </h2>
          <hr style={{ borderColor: resumeInfo?.themeColor }} />
          {resumeInfo?.certificates?.map((certificate, index) => (
            <div key={index} className="my-2 text-xs">
              {certificate.name} - {certificate.provider} ({certificate.date})
            </div>
          ))}
        </div>
      )}
      <button onClick={() => setShowCertificates(!showCertificates)} className="text-xs underline">
        {showCertificates ? 'Remove Certificates' : 'Add Certificates'}
      </button>

      {/* Projects Section */}
      {showProjects && (
        <div className="my-6">
          <h2 className="text-center font-bold text-sm mb-2" style={{ color: resumeInfo?.themeColor }}>
            Projects
          </h2>
          <hr style={{ borderColor: resumeInfo?.themeColor }} />
          {resumeInfo?.projects?.map((project, index) => (
            <div key={index} className="my-2 text-xs">
              <strong>{project.name}</strong> - {project.description}
            </div>
          ))}
        </div>
      )}
      <button onClick={() => setShowProjects(!showProjects)} className="text-xs underline">
        {showProjects ? 'Remove Projects' : 'Add Projects'}
      </button>

      {/* Achievements & Extracurricular Section */}
      {showAchievements && (
        <div className="my-6">
          <h2 className="text-center font-bold text-sm mb-2" style={{ color: resumeInfo?.themeColor }}>
            Achievements & Extracurricular
          </h2>
          <hr style={{ borderColor: resumeInfo?.themeColor }} />
          {resumeInfo?.achievementsAndExtracurricular?.map((achievement, index) => (
            <div key={index} className="my-2 text-xs">
              <strong>{achievement.title}</strong> - {achievement.description}
            </div>
          ))}
        </div>
      )}
      <button onClick={() => setShowAchievements(!showAchievements)} className="text-xs underline">
        {showAchievements ? 'Remove Achievements' : 'Add Achievements'}
      </button>
    </div>
  );
}

export default Template5;
