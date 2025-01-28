import { ResumeInfoContext } from '@/context/ResumeInfoContext';
import React, { useContext, useState } from 'react';
import Template1 from './preview/Template1';
import Template2 from './preview/Template2';
import Template3 from './preview/Template3';
function ResumePreview() {
  const { resumeInfo } = useContext(ResumeInfoContext);
  const [selectedTemplate, setSelectedTemplate] = useState('Template1');

  // Map to store available templates (all set to Template1 for now)
  const templates = {
    Template1: <Template1 resumeInfo={resumeInfo} />,
    Template2: <Template2 resumeInfo={resumeInfo} />,
    Template3: <Template3 resumeInfo={resumeInfo} />,
  };

  return (
    <div>
      {/* Dropdown for selecting template */}
      <div className="mb-4">
        <label htmlFor="template-select" className=" text-gray-700 font-medium mb-2">
          Select Template:
        </label>
        <select
          id="template-select"
          className="p-2 border rounded-md shadow-sm"
          value={selectedTemplate}
          onChange={(e) => setSelectedTemplate(e.target.value)}
        >
          <option value="Template1">Template 1</option>
          <option value="Template2">Template 2</option>
          <option value="Template3">Template 3</option>
        </select>
      </div>

      {/* Resume Preview */}
      <div
        className="shadow-lg h-full p-14 border-t-[20px]"
        style={{
          borderColor: resumeInfo?.themeColor,
        }}
      >
        {/* Dynamically render the selected template */}
        {templates[selectedTemplate]}
      </div>
    </div>
  );
}

export default ResumePreview;
