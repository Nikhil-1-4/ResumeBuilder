// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Textarea } from '@/components/ui/textarea';
// import { ResumeInfoContext } from '@/context/ResumeInfoContext';
// import {  Rocket } from 'lucide-react';
// import React, { useContext, useEffect, useState } from 'react';

// function Certificates() {
//   const [loading, setLoading] = useState(false);
//   const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
//   const [certificateList, setCertificateList] = useState([
//     {
//       certificateTitle: '',
//       description: '',
//     },
//   ]);

//   useEffect(() => {
//     if (resumeInfo?.certificates) {
//       setCertificateList(resumeInfo.certificates);
//     }
//   }, [resumeInfo]);

//   const handleChange = (event, index) => {
//     const newEntries = [...certificateList];
//     const { name, value } = event.target;
//     newEntries[index][name] = value;
//     setCertificateList(newEntries);
//   };

//   const addNewCertificate = () => {
//     setCertificateList([
//       ...certificateList,
//       {
//         certificateTitle: '',
//         description: '',
//       },
//     ]);
//   };

//   const removeCertificate = () => {
//     if (certificateList.length > 1) {
//       setCertificateList((prev) => prev.slice(0, -1));
//     }
//   };

//   const onSave = () => {
//     setLoading(true);
//     // Simulate saving or connect with an API
//     setTimeout(() => {
//       console.log('Saved certificates:', certificateList);
//       setLoading(false);
//     }, 1000);
//   };

//   useEffect(() => {
//     setResumeInfo((prev) => ({
//       ...prev,
//       certificates: certificateList,
//     }));
//   }, [certificateList]);

//   return (
//     <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10">
//       <h2 className="font-bold text-lg">Certificates</h2>
//       <p>Add details about your certifications</p>
//       <div className='m-2 flex justify-end'>
//         <Button variant='outline' className='border-primary flex'> <Rocket/> Generate Using AI</Button>
//       </div>
//       <div>
//         {certificateList.map((item, index) => (
//           <div key={index} className="grid grid-cols-2 gap-3 border p-3 my-5 rounded-lg">
//             <div className="col-span-2">
//               <label>Certificate Title</label>
//               <Input
//                 name="certificateTitle"
//                 value={item.certificateTitle}
//                 onChange={(e) => handleChange(e, index)}
//               />
//             </div>
//             <div className="col-span-2">
//               <label>Description</label>
//               <Textarea
//                 name="description"
//                 value={item.description}
//                 onChange={(e) => handleChange(e, index)}
//               />
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="flex justify-between">
//         <div className="flex gap-2">
//           <Button variant="outline" onClick={addNewCertificate} className="text-primary">
//             + Add More Certificates
//           </Button>
//           <Button variant="outline" onClick={removeCertificate} className="text-primary">
//             - Remove
//           </Button>
//         </div>
//         <Button disabled={loading} onClick={onSave}>
//           Save
//         </Button>
//       </div>
//     </div>
//   );
// }

// export default Certificates;

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ResumeInfoContext } from '@/context/ResumeInfoContext';
import { Rocket } from 'lucide-react';
import React, { useContext, useEffect, useState } from 'react';

function Certificates() {
  const [loading, setLoading] = useState(false);
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  
  // Initialize state properly
  const [certificateList, setCertificateList] = useState(() => 
    resumeInfo?.certificates?.length > 0 
      ? resumeInfo.certificates 
      : [{ certificateTitle: '', description: '' }]
  );

  useEffect(() => {
    if (resumeInfo?.certificates && resumeInfo.certificates !== certificateList) {
      setCertificateList(resumeInfo.certificates);
    }
  }, [resumeInfo]); // Avoid infinite loop

  const handleChange = (event, index) => {
    const { name, value } = event.target;
    setCertificateList((prevList) => 
      prevList.map((item, i) => (i === index ? { ...item, [name]: value } : item))
    );
  };

  const addNewCertificate = () => {
    setCertificateList((prevList) => [
      ...prevList,
      { certificateTitle: '', description: '' }
    ]);
  };

  const removeCertificate = () => {
    if (certificateList.length > 1) {
      setCertificateList((prevList) => prevList.slice(0, -1));
    }
  };

  const onSave = () => {
    setLoading(true);
    setTimeout(() => {
      console.log('Saved certificates:', certificateList);
      setLoading(false);
    }, 1000);
  };

  // ✅ Use a deep comparison to prevent unnecessary re-renders
  useEffect(() => {
    setResumeInfo((prev) => {
      if (JSON.stringify(prev.certificates) !== JSON.stringify(certificateList)) {
        return { ...prev, certificates: certificateList };
      }
      return prev;
    });
  }, [certificateList, setResumeInfo]);

  return (
    <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10">
      <h2 className="font-bold text-lg">Certificates</h2>
      <p>Add details about your certifications</p>
      <div className='m-2 flex justify-end'>
        <Button variant='outline' className='border-primary flex'>
          <Rocket /> Generate Using AI
        </Button>
      </div>
      <div>
        {certificateList.map((item, index) => (
          <div key={index} className="grid grid-cols-2 gap-3 border p-3 my-5 rounded-lg">
            <div className="col-span-2">
              <label>Certificate Title</label>
              <Input
                name="certificateTitle"
                value={item.certificateTitle}
                onChange={(e) => handleChange(e, index)}
              />
            </div>
            <div className="col-span-2">
              <label>Description</label>
              <Textarea
                name="description"
                value={item.description}
                onChange={(e) => handleChange(e, index)}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between">
        <div className="flex gap-2">
          <Button variant="outline" onClick={addNewCertificate} className="text-primary">
            + Add More Certificates
          </Button>
          <Button variant="outline" onClick={removeCertificate} className="text-primary">
            - Remove
          </Button>
        </div>
        <Button disabled={loading} onClick={onSave}>
          {loading ? "Saving..." : "Save"}
        </Button>
      </div>
    </div>
  );
}

export default Certificates;

