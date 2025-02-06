import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ResumeInfoContext } from '@/context/ResumeInfoContext';
import { Rocket } from 'lucide-react';
import React, { useContext, useEffect, useState } from 'react';

function Recommendations() {
  const [loading, setLoading] = useState(false);
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const [recommendationList, setRecommendationList] = useState([
    {
      recommenderName: '',
      link: '',
      description: '',
    },
  ]);

  useEffect(() => {
    if (resumeInfo?.recommendations) {
      setRecommendationList(resumeInfo.recommendations);
    }
  }, [resumeInfo]);

  const handleChange = (event, index) => {
    const newEntries = [...recommendationList];
    const { name, value } = event.target;
    newEntries[index][name] = value;
    setRecommendationList(newEntries);
  };

  const addNewRecommendation = () => {
    setRecommendationList([
      ...recommendationList,
      {
        recommenderName: '',
        link: '',
        description: '',
      },
    ]);
  };

  const removeRecommendation = () => {
    if (recommendationList.length > 1) {
      setRecommendationList((prev) => prev.slice(0, -1));
    }
  };

  const onSave = () => {
    setLoading(true);
    // Simulate saving or connect with an API
    setTimeout(() => {
      console.log('Saved recommendations:', recommendationList);
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    setResumeInfo((prev) => ({
      ...prev,
      recommendations: recommendationList,
    }));
  }, [recommendationList]);

  return (
    <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10">
      <h2 className="font-bold text-lg">Recommendations</h2>
      <p>Add details about your recommendations</p>
      <div className=' m-2 flex justify-end'>
        <Button variant='outline' className='border-primary flex'> 
          <Rocket/> Generate Using AI
        </Button>
      </div>
      <div>
        {recommendationList.map((item, index) => (
          <div key={index} className="grid grid-cols-2 gap-3 border p-3 my-5 rounded-lg">
            <div className="col-span-2">
              <label>Recommender Name</label>
              <Input
                name="recommenderName"
                value={item.recommenderName}
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
          <Button variant="outline" onClick={addNewRecommendation} className="text-primary">
            + Add More Recommendations
          </Button>
          <Button variant="outline" onClick={removeRecommendation} className="text-primary">
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

export default Recommendations;
