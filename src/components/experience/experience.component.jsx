import JobCard from "../jobcard/jobcard.component";
import "./experience.styles.scss";

const Experience = () => {
  const firstJobDescription = [
    {
      id: 1,
      point:
        "Developed highly functional qualitative modifications and system changes.",
    },
    {
      id: 2,
      point:
        "Directed IT infrastructure planning and implementation projects to migrate entire IT infrastructure, active directory and network tools.Installed and supported desktop software titles and add-ons.",
    },
    {
      id: 3,
      point:
        "Identified problems in printers, scanners and networking hardware,applying required fixes or escalating issues.",
    },
    {
      id: 4,
      point:
        "Removed and replaced old hardware during routine upgrades and system repairs.",
    },
    {
      id: 5,
      point:
        " Delivered remote assistance for technical issues using screen sharing, mouse and keyboard control and other tools",
    },
    {
      id: 6,
      point:
        "Increased technical knowledge by reading trade publications, operating manuals and diagnostics information.",
    },
  ];
  const secondJobDescription = [
    {id:1, point: "Campus Navigator - orientation volunteers walk students to and from where they need to go "},
    {id:2, point : "Welcome Crew - stationed at the main busiest entrances to welcome students, give them their swag bag as well as help direct them to the sessions and marketplace"}
  ]
  return (
    <div className="wrapper-experience">
      <h1 className="main-experience-heading">Work Experience</h1>
      <JobCard
        jobTitle="Regional Systems Officer"
        jobCompany="Justice Technology Services"
        startTime="3rd Januay 2023"
        endTime="30th April 2023"
        jobDescription={firstJobDescription}
      />
      <JobCard 
        jobTitle="Campus Navigator(Volunteer)"
        jobCompany="Sheridan College"
        startTime=""
        jobDescription={secondJobDescription}
         />
    </div>
  );
};

export default Experience;
