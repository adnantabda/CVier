import { useState } from 'react';

export function useManageSkill() {
  const [skills, setSkill] = useState(['Python', 'JavaScript', 'Database', 'UI/UX Design', 'SEO']);

  function handleSkill(e) {
    setSkill(e.target.value.split(',')); 

}

  return {
    skills,
    handleSkill,
  };
}

export function Skill({ skills }) {
  return (
    <ul>
      {skills.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>
  );
}

export function EditSkill({ handleSkill }) {
  return (
    <div className='skill-input common-flex'>
<label>Skills</label>
        <input type="text" onChange={handleSkill} placeholder="Enter skills separated by commas" />
    </div>

    
  );
}
