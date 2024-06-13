import { useState } from "react";

export function useManageEducationState() {
  const [education, setEducation] = useState("Harvard University");
  const [eduLevel, setEduLevel] = useState("Bachelor Degree");
  const [department, setDepartment] = useState("Computer Science");
  const [date, setDate] = useState("2012-04-92");

  function handleEducation(e) {
    setEducation(e.target.value);
  }

  function handleEduLevel(e) {
    setEduLevel(e.target.value);
  }

  function handleDate(e) {
    setDate(e.target.value);
  }
  function handleDepartment(e) {
    setDepartment(e.target.value);
  }

  return {
    education,
    eduLevel,
    department,
    date,
    handleEducation,
    handleEduLevel,
    handleDepartment,
    handleDate,
  };
}

export function Education({ education, eduLevel, department, date }) {
  return (
    <div>
      <p>{education}</p>
      <p>{department}</p>
      <p>
        {eduLevel} <span>{date}</span>
      </p>
    </div>
  );
}

export function EditEducation({
  handleEducation,
  handleEduLevel,
  handleDepartment,
  handleDate,
}) {
  return (
    <div className="education-input common-flex">
      <div>
        <label>Education</label>
        <input type="text" onChange={handleEducation} />
      </div>

      <div>
        <label>Education Level</label>
        <input type="text" onChange={handleEduLevel} />
      </div>

      <div>
        <label>Department</label>
        <input type="text" onChange={handleDepartment} />
      </div>

      <div>
        <label>Date</label>
        <input type="text" onChange={handleDate} />
      </div>
    </div>
  );
}
