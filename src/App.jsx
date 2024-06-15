import React from 'react';
import { useManageHeaderState, SetHeader, Header } from './components/Header';
import { Summary, EditSummary, useSummaryManage } from './components/Summary';
import { useManageEducationState, Education, EditEducation } from './components/Education';
import { useManageExperienceState, EditExperience, Experience } from './components/Experience';
import { useManageSkill, EditSkill, Skill } from './components/Skills';

import { useManageProjectState, EditProject, Project } from './components/Projects';
import { useManageHobby, EditHobby, Hobbies } from './components/Hobbies';

import { DownloadPdf } from './components/DownloadCV';


import './App.css';
import './index.css';

function App() {
  const {
    name,
    title,
    address,
    tel,
    email,
    handleName,
    handleTel,
    handleTitle,
    handleAddress,
    handleEmail,
    reloadHeader,
    handleHeaderReset,
  } = useManageHeaderState();

  const { summary, handleSummary, resetSummary, handleDelete } = useSummaryManage();

  const {
    education,
    eduLevel,
    department,
    date,
    handleEducation,
    handleEduLevel,
    handleDepartment,
    handleDate,
  } = useManageEducationState();

  const {
    titleExperience,
    company,
    dateExperience,
    description,
    handleTitleExperience,
    handleCompany,
    handleDateExperience,
    handleDescription,
  } = useManageExperienceState();

  const { skills, handleSkill } = useManageSkill();

  const {
    project, 
    handleProjectName,
    handleProjectDescription
  } = useManageProjectState()


  const {
    hobbies, 
    handleHobby
  } = useManageHobby();
  return (
    <div className="app-face">
      <div className="input-cv">
        <SetHeader
          handleName={handleName}
          handleTitle={handleTitle}
          handleAddress={handleAddress}
          handleEmail={handleEmail}
          handleTel={handleTel}
          handleHeaderReset={handleHeaderReset}
          reloadHeader={reloadHeader}
        />
        <EditSummary handleSummary={handleSummary} resetSummary={resetSummary} handleDelete={handleDelete} />
        <EditEducation
          handleEducation={handleEducation}
          handleEduLevel={handleEduLevel}
          handleDepartment={handleDepartment}
          handleDate={handleDate}
        />
        <EditExperience
          handleTitleExperience={handleTitleExperience}
          handleCompany={handleCompany}
          handleDateExperience={handleDateExperience}
          handleDescription={handleDescription}
        />
        <EditSkill handleSkill={handleSkill} />
        <EditProject handleProjectName={handleProjectName} handleProjectDescription={handleProjectDescription}/>
        <EditHobby handleHobby={handleHobby} />
      </div>
      <div id='content' className="output-cv">
        <Header
          name={name}
          title={title}
          phone={tel}
          email={email}
          address={address}
        />
        <div style={{ display: 'flex' }}>
          <div
            style={{
              maxWidth: '50%',
              borderRight: '2px solid #242424af',
              padding: '24px',
            }}
          >
            <h2>Summary</h2>
            <Summary summary={summary} />
            <h2>Education</h2>
            <Education
              education={education}
              eduLevel={eduLevel}
              department={department}
              date={date}
            />
            <h2>Practical experience</h2>
            <Experience
              titleExperience={titleExperience}
              company={company}
              dateExperience={dateExperience}
              description={description}
            />
          </div>
          <div style={{ maxWidth: '50%', padding: '24px', marginTop: '24px' }}>
            <h2>Skills</h2>
            <Skill skills={skills} />
            <h2>Projects</h2>
            <Project project={project}/>
            <h2>Hobbies</h2>
            <Hobbies hobbies={hobbies} />
          </div>
        </div>
      </div>
      <DownloadPdf/>
    </div>
  );
}

export default App;
