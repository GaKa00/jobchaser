
import Job from "../typescript/types";

function Jobcard({ jobdata }: { jobdata: Job[] }) {
  const jobLang = jobdata.map((jobObj) => {
    return jobObj.languages.map((lang) => <div className="tagsL">#{lang}</div>);
  });
  const jobTool = jobdata.map((jobObj) => {
    return jobObj.tools.map((tool) => <div className="tagsT">#{tool}</div>);
  });

  return jobdata.map((job, index) => (
    <div key={job.id}>
      <div className="card-container">
        <img className="jobImage" src={job.logo} alt={job.position} />
        <div className="position-container">
          <h3>
            {job.position} at {job.company}
          </h3>
          <div className="info-container">
            <div className="info">
              {" "}
              Role: <br /> {job.role}
            </div>
            <div className="info">
              {" "}
              Level: <br /> {job.level}
            </div>
            <div className="info">
              {" "}
              Contract: <br /> {job.contract}
            </div>
            <div className="info">
              {" "}
              Location: <br /> {job.location}
            </div>
          </div>
        </div>
        <div className="tag-container">
          {jobLang[index]} {jobTool[index]}
        </div>
      </div>
    </div>
  ));
}

export default Jobcard