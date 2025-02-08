



// import React, { useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import Stepper from "./Stepper";

// function CVDetails() {
//   const navigate = useNavigate();
//   const { resumeId } = useParams(); // Extract resumeId from the URL
//   const [cvFile, setCvFile] = useState(null);

//   const handleFileUpload = (event) => {
//     setCvFile(event.target.files[0]); // Store the selected file
//   };

//   return (
//     <div className="min-h-screen flex flex-col bg-gray-100">
//       {/* Stepper Navigation */}
//       <div className="py-6 bg-white shadow-md">
//         <Stepper />
//       </div>

//       {/* Main Content */}
//       <div className="flex flex-grow items-center justify-center">
//         <div className="bg-white p-8 shadow-xl rounded-2xl w-full max-w-2xl text-center transform transition-all duration-300 hover:scale-[1.02]">
//           <h2 className="text-2xl font-bold mb-6 text-gray-700">
//             How would you like to proceed?
//           </h2>

//           {/* File Upload Input */}
//           <div className="relative border-2 border-dashed border-gray-300 rounded-xl p-5 mb-6 cursor-pointer hover:border-orange-500 transition">
//             <input
//               type="file"
//               accept=".pdf,.doc,.docx"
//               onChange={handleFileUpload}
//               className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
//             />
//             <p className="text-gray-500">
//               {cvFile ? cvFile.name : "Click to upload CV (PDF, DOC, DOCX)"}
//             </p>
//           </div>

//           {/* Upload CV Button */}
//           <button
//             className={`w-full px-6 py-3 rounded-lg font-semibold text-lg transition-all duration-200 ${
//               cvFile
//                 ? "bg-orange-500 text-white hover:bg-orange-600"
//                 : "bg-gray-300 text-gray-500 cursor-not-allowed"
//             }`}
//             onClick={() => navigate(`/jd-details/${resumeId}`)}
//             disabled={!cvFile}
//           >
//             Upload CV
//           </button>

//           {/* OR Separator */}
//           <div className="relative my-6">
//             <div className="absolute inset-0 flex items-center">
//               <div className="w-full border-t border-gray-300"></div>
//             </div>
//             <div className="relative px-3 bg-white text-gray-500">OR</div>
//           </div>

//           {/* Fill Form Manually Button */}
//           <button
//             className="w-full px-6 py-3 bg-gray-500 text-white rounded-lg font-semibold text-lg transition-all duration-200 hover:bg-orange-500"
//             onClick={() => navigate(`/dashboard/resume/${resumeId}/edit`)}
//           >
//             Fill Form Manually
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CVDetails;



// import React, { useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import Stepper from "./Stepper";
// import { Input } from "@/components/ui/input"; // ShadCN Input
// import { Button } from "@/components/ui/button"; // ShadCN Button
// import { Label } from "@/components/ui/label"; // ShadCN Label

// function CVDetails() {
//   const navigate = useNavigate();
//   const { resumeId } = useParams(); // Extract resumeId from the URL
//   const [cvFile, setCvFile] = useState(null);

//   const handleFileUpload = (event) => {
//     setCvFile(event.target.files[0]); // Store the selected file
//   };

//   return (
//     <div className="min-h-screen flex flex-col bg-gray-100">
//       {/* Stepper Navigation */}
//       <div className="py-6 bg-white shadow-md">
//         <Stepper />
//       </div>

//       {/* Main Content */}
//       <div className="flex flex-grow items-center justify-center px-4">
//         <div className="bg-white p-8 shadow-xl rounded-2xl w-full max-w-2xl text-center">
//           <h2 className="text-2xl font-bold mb-6 text-gray-700">
//             How would you like to proceed?
//           </h2>

//           {/* File Upload Input */}
//           <div className="mb-6 text-left">
//             <Label htmlFor="cv-upload" className="block text-gray-700 font-medium mb-2">
//               Upload CV (PDF, TXT, DOCX)
//             </Label>
//             <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden bg-gray-100 px-3 py-2">
//               <label className="bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-blue-900">
//                 Choose File
//                 <input
//                   id="cv-upload"
//                   type="file"
//                   accept=".pdf,.txt,.docx"
//                   onChange={handleFileUpload}
//                   className="hidden"
//                 />
//               </label>
//               <span className="ml-3 text-gray-700 text-sm truncate">
//                 {cvFile ? cvFile.name : "No file selected"}
//               </span>
//             </div>
//           </div>

//           {/* Upload CV Button */}
//           <Button
//             className="w-full text-lg bg-blue-500 hover:bg-blue-800"
//             disabled={!cvFile}
//             onClick={() => navigate(`/jd-details/${resumeId}`)}
//           >
//             Upload CV
//           </Button>

//           {/* OR Separator */}
//           <div className="relative my-6">
//             <div className="absolute inset-0 flex items-center">
//               <div className="w-full border-t border-gray-300"></div>
//             </div>
//             <div className="relative px-3 bg-white text-gray-500">OR</div>
//           </div>

//           {/* Fill Form Manually Button */}
//           <Button
//             variant="secondary"
//             className="w-full text-lg hover:bg-blue-900"
//             onClick={() => navigate(`/dashboard/resume/${resumeId}/edit`)}
//           >
//             Fill Form Manually
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CVDetails;




import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Stepper from "./Stepper";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

function CVDetails() {
  const [cvDetails, setCvDetails] = useState("");
  const [fileUploaded, setFileUploaded] = useState(false);
  const navigate = useNavigate();
  const { resumeId } = useParams(); // Extract resumeId from the URL

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setCvDetails(reader.result.trim()); // Store file text
        setFileUploaded(true);
      };
      reader.readAsText(file);
    }
  };

  const handleTextChange = (e) => {
    setCvDetails(e.target.value);
    setFileUploaded(false); // If user starts typing, ignore file upload
  };

  const isNextDisabled = cvDetails.trim().length === 0;

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
              Upload CV or Fill CV Text
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* File Upload Input */}
            <div>
              <Label htmlFor="jd-upload" className="text-gray-700 font-medium">
                Upload CV (PDF, DOCX, TXT)
              </Label>
              <div className="flex items-center gap-3 border border-gray-300 rounded-lg overflow-hidden bg-gray-100 px-3 py-2 mt-2">
                <label className="bg-blue-600 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-blue-900">
                  Choose File
                  <Input
                    id="cv-upload"
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
              <Label htmlFor="cv-description" className="text-gray-700 font-medium">
                Enter CV Details
              </Label>
              <Textarea
                id="cv-description"
                className="mt-2 border-gray-300 rounded-lg"
                rows="5"
                placeholder="Put CV description here..."
                value={fileUploaded ? "" : cvDetails}
                onChange={handleTextChange}
              />
            </div>

            {/* Next Button */}
            <Button
              className="w-full text-lg bg-blue-600 hover:bg-blue-900"
              disabled={isNextDisabled}
              onClick={() => navigate(`/jd-details/${resumeId}`)}
            >
              Next 
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default CVDetails;



