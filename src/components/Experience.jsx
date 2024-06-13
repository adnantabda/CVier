import { useState } from "react";

export function useManageExperienceState() {
  const initDescription =
    " Developed and maintained backend services using Java and Spring BootIntegrated third-party APIs, improving system interoperability and functionality.";

  const [titleExperience, setTitle] = useState("Senior Software Engineer");
  const [company, setCompany] = useState(
    "Innovative Solutions LLC, San Francisco, CA"
  );
  const [dateExperience, setDate] = useState("June 2014 - Dec 2017");

  const [description, setDescription] = useState(initDescription);

  function handleTitleExperience(e) {
    setTitle(e.target.value);
  }
  function handleCompany(e) {
    setCompany(e.target.value);
  }
  function handleDateExperience(e) {
    setDate(e.target.value);
  }
  function handleDescription(e) {
    setDescription(e.target.value);
  }

  return {
    titleExperience,
    company,
    dateExperience,
    description,
    handleTitleExperience,
    handleCompany,
    handleDateExperience,
    handleDescription,
  };
}

export function Experience({
  titleExperience,
  company,
  dateExperience,
  description,
}) {
  return (
    <div>
      <h3>{titleExperience}</h3>
      <div style={{ paddingLeft: "12px" }}>
        <p>{company}</p>
        <p>{dateExperience}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export function EditExperience({
  handleTitleExperience,
  handleDateExperience,
  handleCompany,
  handleDescription,
}) {
  return (
    <div className="experience-input common-flex">
      <div >
        <label>Title</label>

        <input type="text" onChange={handleTitleExperience} />
      </div>

      <div>
        <label>Company Name</label>
        <input type="text" onChange={handleCompany} />
      </div>

      <div>
        <label>Date</label>

        <input type="text" onChange={handleDateExperience} />
      </div>

      <div>
        <label>Description</label>
        <input type="text" onChange={handleDescription} />
      </div>
    </div>
  );
}
