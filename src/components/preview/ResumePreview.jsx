import React, { forwardRef, useState } from 'react';
import HeaderPreview from './HeaderPreview';
import EducationPreview from './EducationPreview';
import ExperiencePreview from './ExperiencePreview';
import ProjectsPreview from './ProjectsPreview';
import SkillsPreview from './SkillsPreview';
import AchievementsPreview from './AchievementsPreview';
import ObjectivePreview from './ObjectivePreview';
const ResumePreview = forwardRef(({ formData }, ref) => {

  return (
    <div
      ref={ref}
      className="print-container"
      style={{
        width: "100%",
        maxWidth: "210mm",
        margin: "0 auto",
        padding: "0",
        boxSizing: "border-box",
        pageBreakAfter: "avoid"
      }}
    >






      <div className="resume-content resume-preview font-sans text-gray-800 single-page-resume">
        <HeaderPreview header={formData?.header} />
        <ObjectivePreview objective={formData?.objective} />
        <EducationPreview educationList={formData?.education} />
        <ExperiencePreview experienceList={formData?.experience} />
        <ProjectsPreview projectsList={formData?.projects} />
        <SkillsPreview skillsList={formData?.skills} />
        <AchievementsPreview achievements={formData?.achievements} />
      </div>
    </div>
  );
});

ResumePreview.displayName = 'ResumePreview';

export default ResumePreview;