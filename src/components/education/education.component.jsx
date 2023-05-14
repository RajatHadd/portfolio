import "./education.styles.scss";
import EducationCard from "../educationcard/educationcard.component";
import {motion} from "framer-motion"
import {letter, logo, fadeIn } from "../../variants";

const Education = () => {
  return (
    <div className="wrapper-education">
      <motion.h1
        className="main-education-heading"
        variants={logo}
        initial="hidden"
        whileInView="visible"
      >
        {"Education".split("").map((char, index) => {
          return (
            <motion.span key={char + "-" + index} variants={letter}>
              {char}
            </motion.span>
          );
        })}
      </motion.h1>
      <motion.div
        className="education-card-one"
        variants={fadeIn("left", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
      >
        <EducationCard
          schoolName="Parth Public School"
          schoolType="High School"
          schoolLocation="Karnal, Haryana, India"
          fieldOfStudy="Science and Mathematics"
          graduationDate="July, 2020"
          gpa="95.3%"
        />
      </motion.div>
      <motion.div
        className="education-card-two"
        variants={fadeIn("right", 0.5)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
      >
        <EducationCard
          schoolName="Sheridan College Institute of Technology And Advanced Learning"
          campus="Davis Campus"
          schoolType="College"
          schoolLocation="Brampton, ON, Canada"
          fieldOfStudy="Computer Science"
          graduationDate="Dec, 2025"
        />
      </motion.div>
    </div>
  );
};
export default Education;
