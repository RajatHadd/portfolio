import { useEffect, useState } from "react";
import "./jobcard.styles.scss";

const JobCard = (props) => {
  const { jobTitle, jobCompany, startTime, endTime , jobDescription} = props;
  const [hasDuration , setHasDuration] = useState(false);
  useEffect(() => {
    if(startTime === ''){
        setHasDuration(false);
    }
    else{
        setHasDuration(true)
    }
  },[hasDuration])
  return (
    <div className="experience-card">
      <div className="experience-card-left">
        <div className="experience-card-left-container">
          <div className="job-title">{jobTitle}</div>
          <div className="job-company-name"> {jobCompany} </div>
            {hasDuration ?
            <div className="job-duration"> <span>{startTime}</span> <span>{endTime}</span></div> : ''}
          </div>
        
      </div>
      <div className="experience-card-right">
        <ul>
        {jobDescription.map((job) => {
            const {id, point} = job;
            return <li id={id}> {point}</li>;
        })}
        </ul>
      </div>
    </div>
  );
};

export default JobCard;
