import { useState } from 'react';

export function useManageHobby() {
  const [hobbies, setHobbies] = useState(['One Piece (Anime)', 'Reading Docs', 'Swimming', 'Traveling', 'Arts']);

  function handleHobby(e) {
    setHobbies(e.target.value.split(',')); // Assuming you want to update skills from a comma-separated input
  }

  return {
    hobbies,
    handleHobby,
  };
}

export function Hobbies({ hobbies }) {
  return (
    <ul>
      {hobbies.map((hobby, index) => (
        <li key={index}>{hobby}</li>
      ))}
    </ul>
  );
}

export function EditHobby({ handleHobby }) {
  return (
    <div className='hobby-input common-flex'>
        <label>Enter Hobbies</label>

        <input type="text" onChange={handleHobby} placeholder="Enter Hobbies separated by commas" />
    </div>
    
  );
}
