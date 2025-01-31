import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { ResumeInfoContext } from '@/context/ResumeInfoContext';
import { Rocket } from 'lucide-react';
import React, { useContext, useEffect, useState } from 'react';

function ExtraAchive() {
  const [loading, setLoading] = useState(false);
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const [achievementsList, setAchievementsList] = useState([
    {
      description: '',
    },
  ]);

  useEffect(() => {
    if (resumeInfo?.extraAchievements) {
      setAchievementsList(resumeInfo.extraAchievements);
    }
  }, [resumeInfo]);

  const handleChange = (event, index) => {
    const newEntries = [...achievementsList];
    newEntries[index].description = event.target.value;
    setAchievementsList(newEntries);
  };

  const addNewAchievement = () => {
    setAchievementsList([...achievementsList, { description: '' }]);
  };

  const removeAchievement = () => {
    if (achievementsList.length > 1) {
      setAchievementsList((prev) => prev.slice(0, -1));
    }
  };

  const onSave = () => {
    setLoading(true);
    setTimeout(() => {
      console.log('Saved extra achievements:', achievementsList);
      setLoading(false);
    }, 1000);
  };

  useEffect(() => {
    setResumeInfo((prev) => ({
      ...prev,
      extraAchievements: achievementsList,
    }));
  }, [achievementsList]);

  return (
    <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10">
      <h2 className="font-bold text-lg">Extra Achievements</h2>
      <p>Add details about your additional achievements</p>
      <div className='m-2 flex justify-end'>
        <Button variant='outline' className='border-primary flex'> <Rocket/> Generate Using AI</Button>
      </div>
      <div>
        {achievementsList.map((item, index) => (
          <div key={index} className="grid grid-cols-2 gap-3 border p-3 my-5 rounded-lg">
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
          <Button variant="outline" onClick={addNewAchievement} className="text-primary">
            + Add More Achievements
          </Button>
          <Button variant="outline" onClick={removeAchievement} className="text-primary">
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

export default ExtraAchive;
