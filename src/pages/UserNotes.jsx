// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function UserNotes() {
//   const [notes, setNotes] = useState('');
//   const navigate = useNavigate();

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
//       <div className="bg-white p-6 shadow-lg rounded-md w-full max-w-lg">
//         <h2 className="text-xl font-bold mb-4 text-gray-700">User Notes</h2>

//         <label className="block text-gray-700 mb-2">Write your notes (prompt for AI):</label>
//         <textarea
//           className="w-full p-2 border rounded mb-4"
//           rows="5"
//           placeholder="E.g., I want a modern, professional resume highlighting my skills in software development..."
//           value={notes}
//           onChange={(e) => setNotes(e.target.value)}
//         ></textarea>

//         <h3 className="text-lg font-semibold mb-2">Preview</h3>
//         <div className="border p-4 bg-gray-50 rounded min-h-[100px]">
//           {notes || <span className="text-gray-400">Your notes will appear here...</span>}
//         </div>

//         <button
//           className="mt-4 w-full px-4 py-2 bg-orange-500 hover:text-black text-white rounded"
//           onClick={() => navigate(':resumeId/view')}
//         >
//           Finish & Proceed to Final Preview
//         </button>
//       </div>
//     </div>
//   );
// }

// export default UserNotes;




import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Stepper from "./Stepper";

function UserNotes() {
  const [notes, setNotes] = useState("");
  const [refinement, setRefinement] = useState(0); // Default AI refinement level
  const navigate = useNavigate();
  const { resumeId } = useParams(); // Extract resumeId from URL

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      {/* Stepper Navigation */}
      <div className="py-6 bg-white shadow-md">
        <Stepper />
      </div>

      {/* Main Content */}
      <div className="flex flex-grow items-center justify-center">
        <div className="bg-white p-8 shadow-xl rounded-2xl w-full max-w-2xl text-center transform transition-all duration-300 hover:scale-[1.02]">
          <h2 className="text-2xl font-bold mb-6 text-gray-700">Customize Your Resume</h2>

          {/* Notes Input */}
          <label className="block text-gray-700 mb-2 font-medium">Write Your Notes (Prompt for AI):</label>
          <textarea
            className="w-full p-4 border rounded-xl shadow-sm focus:ring-2 focus:ring-blue-500"
            rows="5"
            placeholder="E.g., I want a modern, professional resume highlighting my skills in software development..."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          ></textarea>

          {/* AI Refinement Scale */}
          <label className="block text-gray-700 mb-2 mt-4 font-medium">AI Refinement Level</label>
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={refinement}
            onChange={(e) => setRefinement(parseFloat(e.target.value))}
            className="w-full cursor-pointer"
          />
          <div className="flex justify-between text-sm text-gray-500">
            <span>Concise </span>
            <span>Generative </span>
          </div>

          {/* Build Resume Button */}
          <button
            className="mt-6 w-full px-6 py-3 bg-blue-900 text-white rounded-lg font-semibold text-lg transition-all duration-200 hover:bg-blue-600"
            onClick={() => navigate(`/dashboard/resume/${resumeId}/edit`)} // Redirect to final preview with autofilled data
          >
            Proceed to CV
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserNotes;


