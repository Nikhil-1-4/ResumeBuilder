import React, { useState } from "react";

const ShanghaiATSTemplate = ({resumeInfo}) => {
  const [themeColor, setThemeColor] = useState("#FFA500"); // Default Theme Color

  // const user = {
  //   firstName: "James",
  //   lastName: "Carter",
  //   address: "525 N Tryon Street, NC 28117",
  //   phone: "(123)-456-7890",
  //   email: "example@gmail.com",
  //   headline: "Experienced Full Stack Developer",
  //   summary:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  //   experience: [
  //     {
  //       id: 1,
  //       title: "Full Stack Developer",
  //       companyName: "Amazon",
  //       city: "New York",
  //       state: "NY",
  //       startDate: "Jan 2021",
  //       endDate: "",
  //       currentlyWorking: true,
  //       workSummery:
  //         "Designed, developed, and maintained full-stack applications using React and Node.js.\n" +
  //         "• Implemented responsive user interfaces with React, ensuring seamless user experiences across various devices and browsers.\n" +
  //         "• Maintaining the React Native in-house organization application.\n" +
  //         "• Created RESTful APIs with Node.js and Express, facilitating data communication between the front-end and back-end systems."
  //     }
  //   ],
  //   education: [
  //     {
  //       degree: "Master",
  //       major: "Computer Science",
  //       universityName: "Western Illinois University",
  //       startDate: "Aug 2018",
  //       endDate: "Dec 2019",
  //       description: "Lorem ipsum dolor sit amet."
  //     }
  //   ],
  //   skills: ["Angular", "React", "MySQL", "React Native"],
  //   certifications: [
  //     { name: "AWS Certified Developer", link: "#" },
  //     { name: "Google UX Design Professional Certificate", link: "#" }
  //   ],
  //   projects: [
  //     "E-commerce Web App using React and Node.js",
  //     "Portfolio Website using Next.js"
  //   ],
  //   publications: [
  //     { name: "Research on Scalable React Applications - Tech Journal 2022", link: "#" }
  //   ],
  //   recommendations: [
  //     "John Doe - Senior Engineer at Google",
  //     "Jane Smith - Team Lead at Amazon"
  //   ],
  //   languages: ["English", "Spanish", "French"]
  // };

  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg p-10 rounded-lg border border-gray-300 text-base space-y-8">
      <div className="p-6 rounded-t-lg flex justify-between items-center" style={{ backgroundColor: themeColor }}>
        <div>
          <h1 className="text-2xl font-bold text-gray-800">{resumeInfo?.firstName} {resumeInfo?.lastName}</h1>
          <h2 className="text-lg font-semibold text-gray-700">{resumeInfo?.jobTitle}</h2>
        </div>
        <div className="text-right text-base font-medium text-gray-900">
          <p>{resumeInfo?.email} • {resumeInfo?.phone}</p>
          <p>{resumeInfo?.address}</p>
        </div>
      </div>
      <div>
        <h2 className="text-lg font-semibold text-gray-800">Summary</h2>
        <p className="text-base text-gray-700">{resumeInfo?.summary}</p>
      </div>
      <div>
        <h2 className="text-lg font-semibold text-gray-800">Education</h2>
        {/* <p className="text-base text-gray-700">{resumeInfo?.education[0].degree} in {resumeInfo?.education[0].major} - {resumeInfo?.education[0].universityName} ({resumeInfo?.education[0].startDate} - {resumeInfo?.education[0].endDate})</p> */}
        {resumeInfo?.education?.map((edu,index) => (
          <div key={index} className="mb-2">
            <p className="text-gray-800 font-semibold" style={{ color: themeColor }}>{edu?.degree} in {edu?.major}</p>
            <div className="flex justify-between text-gray-600 italic">
              <p>{edu?.universityName}</p>
              {/* <p>{edu?.startDate} - {edu?.endDate}</p> */}
            </div>
            <p className="text-gray-700 mt-1">{edu?.description}</p>
          </div>
        ))}
      </div>
      <div>
        <h2 className="text-lg font-semibold text-gray-800">Work Experience</h2>
        {resumeInfo?.experience.map((exp,index) => (
          <div key={index} className="mt-4">
            <h3 className="text-base font-medium text-gray-700">{exp.title} - {exp.companyName}</h3>
            <p className="text-base text-gray-600">{exp.city}, {exp.state} | {exp.startDate} - {exp.currentlyWorking ? "Present" : exp.endDate}</p>
            <p className="text-base text-gray-700 whitespace-pre-line">{exp.workSummery}</p>
          </div>
        ))}
      </div>
      <div>
        <h2 className="text-lg font-semibold text-gray-800">Skills</h2>
        <p className="text-base text-gray-700">{resumeInfo?.skills.join(", ")}</p>
      </div>
      <div>
        <h2 className="text-lg font-semibold text-gray-800">Certifications</h2>
        <ul className="text-base text-gray-700">
          {resumeInfo?.certification?.map((cert, index) => (
            <li key={index}><a href={cert.link} className="text-blue-500 underline">{cert.certificateTitle}</a></li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-lg font-semibold text-gray-800">Projects</h2>
        <p className="text-base text-gray-700">{resumeInfo?.projects?.title?.join(", ")}</p>
      </div>
      <div>
        <h2 className="text-lg font-semibold text-gray-800">Publications</h2>
        <ul className="text-base text-gray-700">
          {resumeInfo?.publications.map((pub, index) => (
            <li key={index}><a href={pub.url} className="text-blue-500 underline">{pub?.title}</a></li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-lg font-semibold text-gray-800">Recommendations</h2>
        <p className="text-base text-gray-700">{resumeInfo?.recommendation?.recommendation?.join(", ")}</p>
      </div>
      <div>
        <h2 className="text-lg font-semibold text-gray-800">Languages</h2>
        <p className="text-base text-gray-700">{resumeInfo?.languages?.join(", ")}</p>
      </div>
    </div>
  );
};

export default ShanghaiATSTemplate;
