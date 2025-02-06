import React, { useState } from 'react';

function Template7({ resumeInfo }) {
  const sections = {
    summary: true,
    education: true,
    experience: true,
    skills: true,
    certificates: true,
    projects: true,
    achievements: true,
  };

  const [visibleSections, setVisibleSections] = useState(sections);

  const toggleSection = (section) => {
    setVisibleSections((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div className="max-w-5xl mx-auto p-8 bg-white shadow-xl rounded-lg grid grid-cols-3 gap-6">
      {/* Left Column */}
      <div className="col-span-1 bg-gray-100 p-6 rounded-lg">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold" style={{ color: resumeInfo?.themeColor }}>
            {resumeInfo?.firstName} {resumeInfo?.lastName}
          </h2>
          <h3 className="text-lg font-medium text-gray-700">{resumeInfo?.jobTitle}</h3>
        </div>
        <div className="text-sm text-gray-600">
          <p>{resumeInfo?.address}</p>
          <p>{resumeInfo?.phone}</p>
          <p>{resumeInfo?.email}</p>
        </div>
        {visibleSections.skills && (
          <Section title="Skills" color={resumeInfo?.themeColor} toggle={() => toggleSection('skills')}>
            <div className="flex flex-wrap gap-2">
              {resumeInfo?.skills.map((skill, index) => (
                <span key={index} className="bg-gray-300 px-3 py-1 text-xs rounded-full">
                  {skill.name}
                </span>
              ))}
            </div>
          </Section>
        )}
      </div>

      {/* Right Column */}
      <div className="col-span-2">
        {visibleSections.summary && (
          <Section title="Summary" color={resumeInfo?.themeColor} toggle={() => toggleSection('summary')}>
            <p className="text-sm text-gray-700">{resumeInfo?.summary}</p>
          </Section>
        )}
        {visibleSections.experience && (
          <Section title="Experience" color={resumeInfo?.themeColor} toggle={() => toggleSection('experience')}>
            {resumeInfo?.experience.map((exp, index) => (
              <div key={index} className="mb-4">
                <h3 className="font-bold text-gray-800">{exp.title}</h3>
                <p className="text-sm text-gray-600">{exp.companyName}, {exp.city} ({exp.startDate} - {exp.currentlyWorking ? 'Present' : exp.endDate})</p>
              </div>
            ))}
          </Section>
        )}
        {visibleSections.education && (
          <Section title="Education" color={resumeInfo?.themeColor} toggle={() => toggleSection('education')}>
            {resumeInfo?.education.map((edu, index) => (
              <div key={index} className="mb-4">
                <h3 className="font-bold text-gray-800">{edu.universityName}</h3>
                <p className="text-sm text-gray-600">{edu.degree} in {edu.major} ({edu.startDate} - {edu.endDate})</p>
              </div>
            ))}
          </Section>
        )}
        {visibleSections.projects && (
          <Section title="Projects" color={resumeInfo?.themeColor} toggle={() => toggleSection('projects')}>
            {resumeInfo?.projects.map((proj, index) => (
              <div key={index} className="mb-2">
                <h3 className="font-bold text-gray-800">{proj.name}</h3>
                <p className="text-sm text-gray-600">{proj.description}</p>
              </div>
            ))}
          </Section>
        )}
      </div>
    </div>
  );
}

const Section = ({ title, color, children, toggle }) => (
  <div className="mt-6 border-b pb-4">
    <div className="flex justify-between items-center">
      <h2 className="text-xl font-bold" style={{ color }}>{title}</h2>
      <button onClick={toggle} className="text-xs underline text-gray-500">
        Hide
      </button>
    </div>
    {children}
  </div>
);

export default Template7;
