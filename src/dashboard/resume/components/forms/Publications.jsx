import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ResumeInfoContext } from '@/context/ResumeInfoContext';
import { BookOpen, Rocket } from 'lucide-react';
import React, { useContext, useEffect, useState } from 'react';

function Publications() {
  const [loading, setLoading] = useState(false);
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const [publicationList, setPublicationList] = useState([
    {
      title: '',
      description: '',
      link: '',
    },
  ]);

  useEffect(() => {
    if (resumeInfo?.publications) {
      setPublicationList(resumeInfo.publications);
    }
  }, [resumeInfo]);

  const handleChange = (event, index) => {
    const newEntries = [...publicationList];
    const { name, value } = event.target;
    newEntries[index][name] = value;
    setPublicationList(newEntries);
  };

  const addNewPublication = () => {
    setPublicationList([
      ...publicationList,
      {
        title: '',
        description: '',
        link: '',
      },
    ]);
  };

  const removePublication = () => {
    if (publicationList.length > 1) {
      setPublicationList((prev) => prev.slice(0, -1));
    }
  };

  const onSave = () => {
    setLoading(true);
    setTimeout(() => {
      console.log('Saved publications:', publicationList);
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    setResumeInfo((prev) => ({
      ...prev,
      publications: publicationList,
    }));
  }, [publicationList]);

  return (
    <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10">
      <h2 className="font-bold text-lg">Publications</h2>
      <p>Add details about your publications</p>
      <div className='m-2 flex justify-end'>
        <Button variant='outline' className='border-primary flex'> <Rocket/> Generate Using AI</Button>
      </div>
      <div>
        {publicationList.map((item, index) => (
          <div key={index} className="grid grid-cols-2 gap-3 border p-3 my-5 rounded-lg">
            <div className="col-span-2">
              <label>Link</label>
              <Input
                name="link"
                value={item.link}
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
          <Button variant="outline" onClick={addNewPublication} className="text-primary">
            + Add More Publications
          </Button>
          <Button variant="outline" onClick={removePublication} className="text-primary">
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

export default Publications;
