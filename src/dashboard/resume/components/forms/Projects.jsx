import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ResumeInfoContext } from '@/context/ResumeInfoContext';
import { Rocket } from 'lucide-react';
import React, { useContext, useEffect, useState } from 'react';

function Projects() {
  const [loading, setLoading] = useState(false);
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const [projectList, setProjectList] = useState([
    {
      projectTitle: '',
      skillsUsed: '',
      description: '',
      link: '',
    },
  ]);

  useEffect(() => {
    if (resumeInfo?.projects) {
      setProjectList(resumeInfo.projects);
    }
  }, [resumeInfo]);

  const handleChange = (event, index) => {
    const newEntries = [...projectList];
    const { name, value } = event.target;
    newEntries[index][name] = value;
    setProjectList(newEntries);
  };

  const addNewProject = () => {
    setProjectList([
      ...projectList,
      {
        projectTitle: '',
        skillsUsed: '',
        description: '',
        link: '',
      },
    ]);
  };

  const removeProject = () => {
    if (projectList.length > 1) {
      setProjectList((prev) => prev.slice(0, -1));
    }
  };

  const onSave = () => {
    setLoading(true);
    // Simulate saving or connect with an API
    setTimeout(() => {
      console.log('Saved projects:', projectList);
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    setResumeInfo((prev) => ({
      ...prev,
      projects: projectList,
    }));
  }, [projectList]);

  return (
    <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10">
      <h2 className="font-bold text-lg">Projects</h2>
      <p>Add details about your projects</p>
      <div className=' m-2 flex justify-end'>
                {/* <label>Add Summary</label> */}
                <Button variant='outline' className='border-primary flex'> <Rocket/> Generate Using AI</Button>
        </div>
      <div>
        {projectList.map((item, index) => (
          <div key={index} className="grid grid-cols-2 gap-3 border p-3 my-5 rounded-lg">
            <div className="col-span-2">
              <label>Project Title</label>
              <Input
                name="projectTitle"
                value={item.projectTitle}
                onChange={(e) => handleChange(e, index)}
              />
            </div>
            <div className="col-span-2">
              <label>Skills Used</label>
              <Input
                name="skillsUsed"
                value={item.skillsUsed}
                onChange={(e) => handleChange(e, index)}
              />
            </div>
            <div className="col-span-2">
              <label>Project Description</label>
              <Textarea
                name="description"
                value={item.description}
                onChange={(e) => handleChange(e, index)}
              />
            </div>
            <div className="col-span-2">
              <label>Link</label>
              <Input
                name="link"
                value={item.link}
                onChange={(e) => handleChange(e, index)}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between">
        <div className="flex gap-2">
          <Button variant="outline" onClick={addNewProject} className="text-primary">
            + Add More Projects
          </Button>
          <Button variant="outline" onClick={removeProject} className="text-primary">
            - Remove
          </Button>
        </div>
        <Button disabled={loading} onClick={onSave}>
          Save
        </Button>
      </div>
    </div>
  );
}

export default Projects;
