// import { Link, useLocation } from "react-router-dom";
// import { CheckCircle, Circle } from "lucide-react";

// const steps = [
//   { path: "select-template", label: "Select Template" },
//   { path: "cv-details", label: "CV Details" },
//   { path: "jd-details", label: "Job Description" },
//   { path: "user-notes", label: "User Notes" },
//   { path: "dashboard/resume", label: "Edit Resume" }, // Editing Resume
//   { path: "my-resume", label: "Preview Resume" }, // Viewing Resume
// ];

// function Stepper() {
//   const location = useLocation();
//   const currentPath = location.pathname; // Get the current URL path

//   return (
//     <div className="flex items-center justify-center my-5 space-x-4">
//       {steps.map((step, index) => {
//         const isActive = currentPath.includes(step.path); // Check if step is active
//         const isCompleted = steps.findIndex((s) => currentPath.includes(s.path)) > index;

//         return (
//           <div key={index} className="flex items-center">
//             {index > 0 && <span className="mx-2 text-gray-400">➝</span>}
//             <Link to={`/${currentPath}`} className="flex flex-col items-center">
//               {isCompleted ? (
//                 <CheckCircle className="text-orange-500 w-6 h-6" /> // Completed steps are orange
//               ) : isActive ? (
//                 <CheckCircle className="text-green-500 w-6 h-6" /> // Active step is green
//               ) : (
//                 <Circle className="text-gray-400 w-6 h-6" /> // Inactive step is gray
//               )}
//               <span className={`text-sm ${isActive ? "font-bold text-green-600" : "text-gray-500"}`}>
//                 {step.label}
//               </span>
//             </Link>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// export default Stepper;

import { useLocation } from "react-router-dom";
import { CheckCircle, Circle } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  { path: "/select-template", label: "Select Template" },
  { path: "/cv-details", label: "CV Details" },
  { path: "/jd-details", label: "Job Description" },
  { path: "/user-notes", label: "User Notes" },
//   { path: "/dashboard/resume/:resumeId/edit", label: "Edit Resume" },
//   { path: "/my-resume/:resumeId/view", label: "Preview Resume" },
];

function Stepper() {
  const location = useLocation();
  const currentPath = location.pathname;

  // Extract resumeId if present in the path
  const pathParts = currentPath.split("/");
  const resumeId = pathParts.find((part) => /^[a-f0-9-]{36}$/.test(part));

  // Get the index of the current step
  const activeStepIndex = steps.findIndex((step) => {
    let stepPath = step.path.includes(":resumeId") && resumeId
      ? step.path.replace(":resumeId", resumeId)
      : step.path;
    return currentPath.startsWith(stepPath);
  });

  return (
    <div className="relative flex flex-col items-center my-8">
      {/* Progress Bar */}
      <div className="relative w-full max-w-3xl h-2 bg-gray-300 rounded-full">
        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: `${((activeStepIndex + 1) / steps.length) * 100}%` }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="absolute h-full bg-gradient-to-r from-green-400 to-blue-500 rounded-full"
        />
      </div>

      {/* Step Icons & Labels */}
      <div className="flex justify-between w-full max-w-3xl mt-4">
        {steps.map((step, index) => {
          let stepPath = step.path.includes(":resumeId") && resumeId
            ? step.path.replace(":resumeId", resumeId)
            : step.path;

          const isCompleted = index < activeStepIndex;
          const isActive = index === activeStepIndex;

          return (
            <div key={index} className="relative flex flex-col items-center">
              <motion.div
                whileHover={{ scale: 1.2 }}
                className={`p-3 rounded-full transition-all ${
                  isCompleted
                    ? "bg-green-500 text-white shadow-lg shadow-green-300"
                    : isActive
                    ? "bg-blue-500 text-white shadow-lg shadow-blue-300"
                    : "bg-gray-300 text-gray-600"
                }`}
              >
                {isCompleted ? (
                  <CheckCircle className="w-8 h-8" />
                ) : isActive ? (
                  <CheckCircle className="w-8 h-8 animate-bounce" />
                ) : (
                  <Circle className="w-8 h-8" />
                )}
              </motion.div>
              <span
                className={`mt-2 text-sm transition-all ${
                  isActive ? "font-bold text-blue-600" : "text-gray-500"
                }`}
              >
                {step.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Stepper;


