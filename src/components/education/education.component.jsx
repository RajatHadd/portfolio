import './education.styles.scss'
import EducationCard from '../educationcard/educationcard.component'

const Education = () => {
    return(
        <div className='wrapper-education'>
            <h1 className="education-heading">Education</h1>
            <EducationCard 
                schoolName="Parth Public School"
                schoolType="High School"
                schoolLocation="Karnal, Haryana, India"
                fieldOfStudy="Science and Mathematics"
                graduationDate="July, 2020"
                gpa="95.3%"
            />
            <EducationCard
                schoolName="Sheridan College Institute of Technology And Advanced Learning"
                campus="Davis Campus"
                schoolType="College"
                schoolLocation="Brampton, ON, Canada"
                fieldOfStudy="Computer Science"
                graduationDate="Dec, 2025"
                

            />
        </div>
    )
}
export default Education;