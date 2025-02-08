// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function JDdetails() {
//   const [jobDescription, setJobDescription] = useState('');
//   const navigate = useNavigate();

//   const handleFileUpload = async (event) => {
//     const file = event.target.files[0];

//     if (file) {
//       const reader = new FileReader();
//       reader.onload = () => setJobDescription(reader.result);
//       reader.readAsText(file);
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
//       <div className="bg-white p-6 shadow-lg rounded-md w-full max-w-lg">
//         <h2 className="text-xl font-bold mb-4 text-gray-700">Job Description</h2>

//         <label className="block text-gray-700 mb-2">Upload JD File:</label>
//         <input type="file" accept=".pdf,.docx,.txt" onChange={handleFileUpload} className="w-full mb-4 p-2 border rounded" />

//         <textarea
//           className="w-full p-2 border rounded"
//           rows="5"
//           placeholder="Or manually type the job description here..."
//           value={jobDescription}
//           onChange={(e) => setJobDescription(e.target.value)}
//         ></textarea>

//         <button
//           className="mt-4 w-full px-4 py-2 bg-orange-500 hover:text-black text-white rounded"
//           onClick={() => navigate('/user-notes')}
//         >
//           Next( Customise with AI )
//         </button>
//       </div>
//     </div>
//   );
// }

// export default JDdetails;





import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Stepper from "./Stepper";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

function JDdetails() {
  const [jobDescription, setJobDescription] = useState("");
  const [fileUploaded, setFileUploaded] = useState(false);
  const navigate = useNavigate();
  const { resumeId } = useParams(); // Extract resumeId from the URL

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setJobDescription(reader.result.trim()); // Store file text
        setFileUploaded(true);
      };
      reader.readAsText(file);
    }
  };

  const handleTextChange = (e) => {
    setJobDescription(e.target.value);
    setFileUploaded(false); // If user starts typing, ignore file upload
  };

  const isNextDisabled = jobDescription.trim().length === 0;

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 px-4">
      {/* Stepper Navigation */}
      <div className="py-6 bg-white shadow-md">
        <Stepper />
      </div>

      {/* Main Content */}
      <div className="flex flex-grow items-center justify-center">
        <Card className="w-full max-w-2xl shadow-xl">
          <CardHeader>
            <CardTitle className="text-center text-2xl font-bold text-gray-700">
              Upload or Enter Job Description
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* File Upload Input */}
            <div>
              <Label htmlFor="jd-upload" className="text-gray-700 font-medium">
                Upload JD (PDF, DOCX, TXT)
              </Label>
              <div className="flex items-center gap-3 border border-gray-300 rounded-lg overflow-hidden bg-gray-100 px-3 py-2 mt-2">
                <label className="bg-blue-600 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-blue-900">
                  Choose File
                  <Input
                    id="jd-upload"
                    type="file"
                    accept=".pdf,.docx,.txt"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </label>
                <span className="text-gray-700 text-sm truncate">
                  {fileUploaded ? "File Uploaded!" : "No file selected"}
                </span>
              </div>
            </div>

            {/* OR Separator */}
            <div className="relative my-4">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative px-3 bg-white text-gray-500 text-center">OR</div>
            </div>

            {/* Manual Entry */}
            <div>
              <Label htmlFor="job-description" className="text-gray-700 font-medium">
                Enter Job Description
              </Label>
              <Textarea
                id="job-description"
                className="mt-2 border-gray-300 rounded-lg"
                rows="5"
                placeholder="Type the job description here..."
                value={fileUploaded ? "" : jobDescription}
                onChange={handleTextChange}
              />
            </div>

            {/* Next Button */}
            <Button
              className="w-full text-lg bg-blue-600 hover:bg-blue-900"
              disabled={isNextDisabled}
              onClick={() => navigate(`/user-notes/${resumeId}`)}
            >
              Next (Customize with AI)
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default JDdetails;




