import React, { useState } from 'react';

function Template6({ resumeInfo }) {
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
    <div className="p-8 max-w-3xl mx-auto bg-white shadow-lg rounded-lg">
      {/* Header */}
      <div className="text-center border-b pb-4">
        <h2 className="text-2xl font-bold" style={{ color: resumeInfo?.themeColor }}>
          {resumeInfo?.firstName} {resumeInfo?.lastName}
        </h2>
        <h3 className="text-lg font-medium">{resumeInfo?.jobTitle}</h3>
        <p className="text-sm text-gray-600">{resumeInfo?.address}</p>
        <div className="flex justify-center space-x-4 text-sm mt-2" style={{ color: resumeInfo?.themeColor }}>
          <span>{resumeInfo?.phone}</span>
          <span>{resumeInfo?.email}</span>
        </div>
      </div>

      {/* Sections */}
      {visibleSections.summary && (
        <Section title="Summary" color={resumeInfo?.themeColor} toggle={() => toggleSection('summary')}>
          <p className="text-sm">{resumeInfo?.summary}</p>
        </Section>
      )}

      {visibleSections.education && (
        <Section title="Education" color={resumeInfo?.themeColor} toggle={() => toggleSection('education')}>
          {resumeInfo?.education.map((edu, index) => (
            <div key={index} className="mb-4">
              <h3 className="font-bold">{edu.universityName}</h3>
              <p className="text-sm">{edu.degree} in {edu.major} ({edu.startDate} - {edu.endDate})</p>
              <p className="text-xs text-gray-600">{edu.description}</p>
            </div>
          ))}
        </Section>
      )}

      {visibleSections.experience && (
        <Section title="Experience" color={resumeInfo?.themeColor} toggle={() => toggleSection('experience')}>
          {resumeInfo?.experience.map((exp, index) => (
            <div key={index} className="mb-4">
              <h3 className="font-bold">{exp.title}</h3>
              <p className="text-sm">{exp.companyName}, {exp.city} ({exp.startDate} - {exp.currentlyWorking ? 'Present' : exp.endDate})</p>
              <p className="text-xs text-gray-600">{exp.workSummery}</p>
            </div>
          ))}
        </Section>
      )}

      {visibleSections.skills && (
        <Section title="Skills" color={resumeInfo?.themeColor} toggle={() => toggleSection('skills')}>
          <div className="flex flex-wrap gap-2">
            {resumeInfo?.skills.map((skill, index) => (
              <span key={index} className="bg-gray-200 px-3 py-1 text-xs rounded-full">
                {skill.name}
              </span>
            ))}
          </div>
        </Section>
      )}

      {visibleSections.certificates && (
        <Section title="Certificates" color={resumeInfo?.themeColor} toggle={() => toggleSection('certificates')}>
          {resumeInfo?.certificates.map((cert, index) => (
            <p key={index} className="text-sm">{cert.name} - {cert.provider} ({cert.date})</p>
          ))}
        </Section>
      )}

      {visibleSections.projects && (
        <Section title="Projects" color={resumeInfo?.themeColor} toggle={() => toggleSection('projects')}>
          {resumeInfo?.projects.map((proj, index) => (
            <div key={index} className="mb-2">
              <h3 className="font-bold text-sm">{proj.name}</h3>
              <p className="text-xs text-gray-600">{proj.description}</p>
            </div>
          ))}
        </Section>
      )}

      {visibleSections.achievements && (
        <Section title="Achievements" color={resumeInfo?.themeColor} toggle={() => toggleSection('achievements')}>
          {resumeInfo?.achievementsAndExtracurricular.map((ach, index) => (
            <p key={index} className="text-sm">{ach.title} - {ach.description}</p>
          ))}
        </Section>
      )}
    </div>
  );
}

const Section = ({ title, color, children, toggle }) => (
  <div className="mt-6 border-b pb-4">
    <div className="flex justify-between items-center">
      <h2 className="text-lg font-bold" style={{ color }}>{title}</h2>
      <button onClick={toggle} className="text-xs underline text-gray-500">
        Hide
      </button>
    </div>
    {children}
  </div>
);

export default Template6;
