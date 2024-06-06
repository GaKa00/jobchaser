import React from "react";
import  Job from "../typescript/types"

import Dropdown, { Dropdown2 } from "./Dropdown";

interface JobcardProps {
  jobdata: Job[];
  onSearch: (searchTerm: string) => void;
}

const Jobcard: React.FC<JobcardProps> = ({ jobdata, onSearch }) => {

  const tools = [...new Set(jobdata.flatMap(job => job.tools))];
  const languages = [...new Set(jobdata.flatMap((job) => job.languages))]; 

 
  return (
    <>
      <input
        type="text"
        placeholder="Search jobs"
        onChange={(e) => onSearch(e.target.value)}
        className="search-input"
      />
      <Dropdown title={'Filter by tools'}  tools={tools} />
      <Dropdown2 title={'Filter by languages'}  languages={languages}/>

      {/* <button >Filter by Tools</button>
      <button onClick={() => dispatch(filterByToolsAndLanguages({ tools: ['React'], languages: [] }))}>Filter by Languages</button> */}
      {jobdata.map((job) => (
        <div key={job.id} className="card-container">
          <img className="jobImage" src={job.logo} alt={job.position} />
          <div className="position-container">
            <h3>
              {job.position} at {job.company}
            </h3>
            <div className="info-container">
              <div className="info">
                Role: <br /> {job.role}
              </div>
              <div className="info">
                Level: <br /> {job.level}
              </div>
              <div className="info">
                Contract: <br /> {job.contract}
              </div>
              <div className="info">
                Location: <br /> {job.location}
              </div>
            </div>
          </div>
          <div className="tag-container">
            {job.languages.map((lang, index) => (
              <div key={`lang-${index}`} className="tagsL">
                #{lang}
              </div>
            ))}
            {job.tools.map((tool, index) => (
              <div key={`tool-${index}`} className="tagsT">
                #{tool}
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default Jobcard;
