



// import React, { useState, useEffect } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import Stepper from "./Stepper";

// const TemplateSelection = () => {
//   const navigate = useNavigate();
//   const { resumeId } = useParams(); // Extract resumeId from URL
//   const [selectedTemplate, setSelectedTemplate] = useState(() => {
//     return localStorage.getItem("selectedTemplate") || null; // Load from storage
//   });

//   useEffect(() => {
//     if (!resumeId) {
//       console.error("Resume ID not found!"); // Debugging if resumeId is missing
//     }
//   }, [resumeId]);

//   const handleTemplateChange = (template) => {
//     setSelectedTemplate(template);
//     localStorage.setItem("selectedTemplate", template); // Save to storage
//   };

//   const handleNext = () => {
//     if (selectedTemplate && resumeId) {
//       navigate(`/cv-details/${resumeId}`); // Navigate to cv-details with the same resumeId
//     }
//   };

//   return (
//    <div> 
//     <div><Stepper/></div>
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
//       <div className="bg-white p-6 shadow-lg rounded-md w-96 text-center">
//         <h2 className="text-xl font-bold mb-4 text-gray-700">Select a Template</h2>

//         <button
//           className={`w-full px-4 py-2 bg-blue-700 hover:text-black text-white rounded mb-2 ${
//             selectedTemplate === "Template 1" ? "ring-2 ring-blue-900" : ""
//           }`}
//           onClick={() => handleTemplateChange("Template 1")}
//         >
//           Template 1
//         </button>

//         <button
//           className={`w-full px-4 py-2 bg-blue-700 hover:text-black text-white rounded mb-2 ${
//             selectedTemplate === "Template 2" ? "ring-2 ring-blue-900" : ""
//           }`}
//           onClick={() => handleTemplateChange("Template 2")}
//         >
//           Template 2
//         </button>

//         <div className="mt-4">
//           <h3 className="text-lg font-semibold text-gray-600">
//             Selected Template: {selectedTemplate || "None"}
//           </h3>
//         </div>

//         {/* Next Button - Disabled if no template is selected */}
//         <button
//           className={`mt-4 w-half px-4 py-2 text-white rounded ${
//             selectedTemplate
//               ? "bg-blue-500 hover:bg-blue-700 ring-2 ring-blue-900"
//               : "bg-gray-400 cursor-not-allowed"
//           }`}
//           onClick={handleNext}
//           disabled={!selectedTemplate}
//         >
//           Next
//         </button>
//       </div>
//     </div>
//     </div> 
//   );
// };

// export default TemplateSelection;



import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Stepper from "./Stepper";

const TemplateSelection = () => {
  const navigate = useNavigate();
  const { resumeId } = useParams(); // Extract resumeId from URL

  const [resumeType, setResumeType] = useState(() => localStorage.getItem("resumeType") || null);
  const [selectedTemplate, setSelectedTemplate] = useState(() => localStorage.getItem("selectedTemplate") || null);

  useEffect(() => {
    if (!resumeId) console.error("Resume ID not found!"); // Debugging if resumeId is missing
  }, [resumeId]);

  const handleResumeTypeChange = (type) => {
    setResumeType(type);
    localStorage.setItem("resumeType", type);
    setSelectedTemplate(null); // Reset template selection when type changes
  };

  const handleTemplateChange = (template) => {
    setSelectedTemplate(template);
    localStorage.setItem("selectedTemplate", template);
  };

  const handleNext = () => {
    if (selectedTemplate && resumeId) {
      navigate(`/cv-details/${resumeId}`);
    }
  };

  return (
    <div>
      <Stepper/>
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      
      

      {/* Selection Container */}
      <div className="bg-white p-8 shadow-lg rounded-lg w-full max-w-lg text-center">
        <h2 className="text-2xl font-bold mb-4 text-gray-700">Select Resume Type</h2>

        {/* Resume Type Selection */}
        <div className="flex gap-4 justify-center">
          {["Normal", "Marketing"].map((type) => (
            <button
              key={type}
              className={`px-5 py-3 text-lg font-medium rounded-md transition-all duration-300 ${
                resumeType === type
                  ? "bg-blue-600 text-white shadow-lg ring-2 ring-blue-800"
                  : "bg-gray-300 text-gray-700 hover:bg-gray-400"
              }`}
              onClick={() => handleResumeTypeChange(type)}
            >
              {type} Resume
            </button>
          ))}
        </div>

        {/* Template Selection */}
        {resumeType && (
          <>
            <h2 className="text-2xl font-bold mt-6 mb-4 text-gray-700">Select a Template</h2>

            {/* Template Grid */}
            <div className="grid grid-cols-2 gap-4">
              {["Template 1", "Template 2", "Template 3", "Template 4", "Template 5"].map((template) => (
                <button
                  key={template}
                  className={`w-full py-3 font-semibold rounded-lg transition-all duration-300 ${
                    selectedTemplate === template
                      ? "bg-blue-700 text-white shadow-md ring-2 ring-blue-900"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                  onClick={() => handleTemplateChange(template)}
                >
                  {template}
                </button>
              ))}
            </div>

            {/* Selected Template */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-600">
                Selected Template:{" "}
                <span className="text-blue-700">{selectedTemplate || "None"}</span>
              </h3>
            </div>

            {/* Next Button */}
            <button
              className={`mt-6 w-full py-3 font-bold rounded-lg transition-all duration-300 ${
                selectedTemplate
                  ? "bg-blue-600 text-white hover:bg-blue-700 shadow-md"
                  : "bg-gray-400 text-gray-700 cursor-not-allowed"
              }`}
              onClick={handleNext}
              disabled={!selectedTemplate}
            >
              Next (CV Data)
            </button>
          </>
        )}
      </div>
    </div>
    </div>
  );
};

export default TemplateSelection;
