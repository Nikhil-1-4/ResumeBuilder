import React, { useEffect, useState } from 'react';
import AddResume from './components/AddResume';
import { useUser } from '@clerk/clerk-react';
import GlobalApi from './../../service/GlobalApi';
import ResumeCardItem from './components/ResumeCardItem';

function Dashboard() {
  const { user } = useUser();
  const [resumeList, setResumeList] = useState([]); // Ensure it's always an array
  const [loading, setLoading] = useState(false); // Track loading state

  useEffect(() => {
    if (user) {
      GetResumesList();
    }
  }, [user]);
  console.log(resumeList);
  /**
   * Used to Get Users Resume List
   */
  const GetResumesList = () => {
    setLoading(true); // Set loading to true before fetching data
    GlobalApi.GetUserResumes(user?.primaryEmailAddress?.emailAddress)
      .then((resp) => {
       console.log(resp.data);
        setResumeList(Array.isArray(resp.data) ? resp.data : []); // Safe check
      })
      .catch((error) => {
        console.error("Error fetching resumes:", error);
        setResumeList([]); // Set to empty array in case of error
      })
      .finally(() => {
        setLoading(false); // Set loading to false when data is fetched or error
      });
  };

  return (
    <div className="p-10 md:px-20 lg:px-32">
      <h2 className="font-bold text-3xl">My Resume</h2>
      <p>Start Creating resume to your next Job role</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 mt-10">
        
        <AddResume/>
        {loading ? (
          // Show loading skeletons while data is being fetched
          [1, 2, 3, 4].map((item, index) => (
            <div
              key={index}
              className="h-[280px] rounded-lg bg-slate-200 animate-pulse"
            ></div>
          ))
        ) : Array.isArray(resumeList) && resumeList.length > 0 ? (
          // Display actual resumes once data is loaded
          resumeList.map((resumes, index) => (
            <ResumeCardItem
              resume={resumes}
              key={index}
            //   refreshData={GetResumesList}
            />
          ))
        ) : (
          // Display message if no resumes are found
          <p>No resumes found. Click "Create" to add a new one!</p>
        )}
      </div>
    </div>
  );
}

export default Dashboard;


