import React, { useState, useEffect } from 'react';
import FormSection from '../../components/FormSection';
import ResumePreview from '../../components/ResumePreview';
import { ResumeInfoContext } from '@/context/ResumeInfoContext';
import dummy from '@/dummy/dummy';
import dummy2 from '@/dummy/dummy2';

function EditResume() {
  const [resumeInfo, setResumeInfo] = useState();
  const [mode, setMode] = useState('manual'); // 'manual' or 'upload'
  const [parsedData, setParsedData] = useState(null);

  useEffect(() => {
    setResumeInfo(dummy2); // Initial dummy data
  }, []);

  // Handle file upload and parse data
  const handleFileUpload = async (event) => {
    const files = event.target.files;
    if (files.length === 2) {
      const cvFile = files[0];
      const jdFile = files[1];

      // Dummy logic to simulate parsing
      const parsedCV = await parseFile(cvFile);
      const parsedJD = await parseFile(jdFile);

      // Combine parsed data
      const autoFilledData = {
        ...parsedCV,
        jobDescription: parsedJD,
      };
      setParsedData(autoFilledData);
      setResumeInfo(autoFilledData); // Auto-fill the form
    } else {
      alert('Please upload both CV and JD files!');
    }
  };

  // Dummy function to simulate file parsing
  const parseFile = (file) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = () => {
        resolve({ content: reader.result }); // Simulated parsed JSON
      };
      reader.readAsText(file);
    });
  };

  return (
    <ResumeInfoContext.Provider value={{ resumeInfo, setResumeInfo }}>
      <div className="p-10 space-y-5">
        {/* User Mode Selection */}
        <div className="space-x-4">
          <button
            className={`px-4 py-2 rounded ${mode === 'manual' ? 'bg-orange-500 text-white' : 'bg-gray-300'}`}
            onClick={() => setMode('manual')}
          >
            Fill Form Manually
          </button>
          <button
            className={`px-4 py-2 rounded ${mode === 'upload' ? 'bg-orange-500 text-white' : 'bg-gray-300'}`}
            onClick={() => setMode('upload')}
          >
            Upload CV and JD
          </button>
        </div>

        {/* Conditional Rendering Based on Mode */}
        {mode === 'manual' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <FormSection />
            <ResumePreview />
          </div>
        ) : (
          <div className="space-y-4">
            <p className="text-gray-700">Upload your CV and Job Description (JD):</p>
            <input
              type="file"
              accept=".pdf,.docx,.json"
              multiple
              onChange={handleFileUpload}
              className="block w-full px-4 py-2 border rounded"
            />
            {parsedData && (
              <div className="text-green-600">
                <p>Files uploaded successfully!</p>
                <p>Auto-filled data is available. Switch to "Fill Form Manually" to edit it.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </ResumeInfoContext.Provider>
  );
}

export default EditResume;
