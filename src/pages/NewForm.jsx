import React, { useState } from "react";

const NewForm = () => {
  const [formData, setFormData] = useState({
    personalInfo: { name: "", contact: "", jobRole: "", location: "" },
    summary: "",
    experience: [],
    education: [],
    skills: { technical: "", soft: "" },
    licenses: [],
    projects: [],
    publications: [],
    recommendations: [],
    extracurriculars: [],
    volunteering: [],
    awards: [],
    hobbies: "",
    profileLinks: "",
  });

  const handleChange = (section, field, value) => {
    setFormData((prev) => ({
      ...prev,
      [section]: field ? { ...prev[section], [field]: value } : value,
    }));
  };

  const handleListChange = (section, index, field, value) => {
    const updatedList = [...formData[section]];
    updatedList[index][field] = value;
    setFormData((prev) => ({ ...prev, [section]: updatedList }));
  };

  const addItem = (section, item) => {
    setFormData((prev) => ({ ...prev, [section]: [...prev[section], item] }));
  };

  const removeItem = (section, index) => {
    setFormData((prev) => ({
      ...prev,
      [section]: prev[section].filter((_, i) => i !== index),
    }));
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 p-6">
      <div className="w-3/4 bg-white p-6 shadow-lg rounded-md overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4 text-gray-700">Resume Form</h2>

        {/* Personal Information */}
        <section>
          <h3 className="text-lg font-semibold">Personal Information</h3>
          {["name", "contact", "jobRole", "location"].map((field) => (
            <input
              key={field}
              type="text"
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              value={formData.personalInfo[field]}
              onChange={(e) => handleChange("personalInfo", field, e.target.value)}
              className="w-full p-2 border rounded my-2"
            />
          ))}
        </section>

        {/* Summary */}
        <section>
          <h3 className="text-lg font-semibold">Summary</h3>
          <textarea
            placeholder="Enter summary..."
            value={formData.summary}
            onChange={(e) => handleChange("summary", null, e.target.value)}
            className="w-full p-2 border rounded my-2"
          ></textarea>
        </section>

        {/* Experience */}
        <section>
          <h3 className="text-lg font-semibold">Experience</h3>
          {formData.experience.map((exp, index) => (
            <div key={index} className="border p-3 my-2 rounded">
              <input
                type="text"
                placeholder="Job Title"
                value={exp.jobTitle}
                onChange={(e) => handleListChange("experience", index, "jobTitle", e.target.value)}
                className="w-full p-2 border rounded my-1"
              />
              <input
                type="text"
                placeholder="Organization"
                value={exp.organization}
                onChange={(e) => handleListChange("experience", index, "organization", e.target.value)}
                className="w-full p-2 border rounded my-1"
              />
              <button onClick={() => removeItem("experience", index)} className="bg-red-500 text-white px-2 py-1 rounded">
                Remove
              </button>
            </div>
          ))}
          <button onClick={() => addItem("experience", { jobTitle: "", organization: "" })} className="bg-blue-500 text-white px-3 py-1 rounded mt-2">
            Add Experience
          </button>
        </section>

        {/* Education */}
        <section>
          <h3 className="text-lg font-semibold">Education</h3>
          {formData.education.map((edu, index) => (
            <div key={index} className="border p-3 my-2 rounded">
              <input
                type="text"
                placeholder="Degree"
                value={edu.degree}
                onChange={(e) => handleListChange("education", index, "degree", e.target.value)}
                className="w-full p-2 border rounded my-1"
              />
              <input
                type="text"
                placeholder="Institution"
                value={edu.institution}
                onChange={(e) => handleListChange("education", index, "institution", e.target.value)}
                className="w-full p-2 border rounded my-1"
              />
              <button onClick={() => removeItem("education", index)} className="bg-red-500 text-white px-2 py-1 rounded">
                Remove
              </button>
            </div>
          ))}
          <button onClick={() => addItem("education", { degree: "", institution: "" })} className="bg-blue-500 text-white px-3 py-1 rounded mt-2">
            Add Education
          </button>
        </section>

        {/* Skills */}
        <section>
          <h3 className="text-lg font-semibold">Skills</h3>
          {["technical", "soft"].map((type) => (
            <input
              key={type}
              type="text"
              placeholder={`${type.charAt(0).toUpperCase() + type.slice(1)} Skills`}
              value={formData.skills[type]}
              onChange={(e) => handleChange("skills", type, e.target.value)}
              className="w-full p-2 border rounded my-2"
            />
          ))}
        </section>

        {/* Hobbies */}
        <section>
          <h3 className="text-lg font-semibold">Hobbies</h3>
          <input
            type="text"
            placeholder="Hobbies"
            value={formData.hobbies}
            onChange={(e) => handleChange("hobbies", null, e.target.value)}
            className="w-full p-2 border rounded my-2"
          />
        </section>

        {/* Profile Links */}
        <section>
          <h3 className="text-lg font-semibold">Profile Links</h3>
          <input
            type="text"
            placeholder="LinkedIn, GitHub, Portfolio, etc."
            value={formData.profileLinks}
            onChange={(e) => handleChange("profileLinks", null, e.target.value)}
            className="w-full p-2 border rounded my-2"
          />
        </section>

        {/* Additional Sections (Same Pattern) */}
        {["licenses", "projects", "publications", "recommendations", "extracurriculars", "volunteering", "awards"].map((section) => (
          <section key={section}>
            <h3 className="text-lg font-semibold">{section.charAt(0).toUpperCase() + section.slice(1)}</h3>
            {formData[section].map((item, index) => (
              <div key={index} className="border p-3 my-2 rounded">
                <input
                  type="text"
                  placeholder={section.slice(0, -1)}
                  value={item}
                  onChange={(e) => handleListChange(section, index, "title", e.target.value)}
                  className="w-full p-2 border rounded my-1"
                />
                <button onClick={() => removeItem(section, index)} className="bg-red-500 text-white px-2 py-1 rounded">
                  Remove
                </button>
              </div>
            ))}
            <button onClick={() => addItem(section, "")} className="bg-blue-500 text-white px-3 py-1 rounded mt-2">
              Add {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          </section>
        ))}
      </div>
    </div>
  );
};

export default NewForm;
