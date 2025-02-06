



import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Stepper from "./Stepper";

const TemplateSelection = () => {
  const navigate = useNavigate();
  const { resumeId } = useParams(); // Extract resumeId from URL
  const [selectedTemplate, setSelectedTemplate] = useState(() => {
    return localStorage.getItem("selectedTemplate") || null; // Load from storage
  });

  useEffect(() => {
    if (!resumeId) {
      console.error("Resume ID not found!"); // Debugging if resumeId is missing
    }
  }, [resumeId]);

  const handleTemplateChange = (template) => {
    setSelectedTemplate(template);
    localStorage.setItem("selectedTemplate", template); // Save to storage
  };

  const handleNext = () => {
    if (selectedTemplate && resumeId) {
      navigate(`/cv-details/${resumeId}`); // Navigate to cv-details with the same resumeId
    }
  };

  return (
   <div> 
    <div><Stepper/></div>
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-6 shadow-lg rounded-md w-96 text-center">
        <h2 className="text-xl font-bold mb-4 text-gray-700">Select a Template</h2>

        <button
          className={`w-full px-4 py-2 bg-blue-700 hover:text-black text-white rounded mb-2 ${
            selectedTemplate === "Template 1" ? "ring-2 ring-blue-900" : ""
          }`}
          onClick={() => handleTemplateChange("Template 1")}
        >
          Template 1
        </button>

        <button
          className={`w-full px-4 py-2 bg-blue-700 hover:text-black text-white rounded mb-2 ${
            selectedTemplate === "Template 2" ? "ring-2 ring-blue-900" : ""
          }`}
          onClick={() => handleTemplateChange("Template 2")}
        >
          Template 2
        </button>

        <div className="mt-4">
          <h3 className="text-lg font-semibold text-gray-600">
            Selected Template: {selectedTemplate || "None"}
          </h3>
        </div>

        {/* Next Button - Disabled if no template is selected */}
        <button
          className={`mt-4 w-half px-4 py-2 text-white rounded ${
            selectedTemplate
              ? "bg-blue-500 hover:bg-blue-600"
              : "bg-gray-400 cursor-not-allowed"
          }`}
          onClick={handleNext}
          disabled={!selectedTemplate}
        >
          Next
        </button>
      </div>
    </div>
    </div> 
  );
};

export default TemplateSelection;










