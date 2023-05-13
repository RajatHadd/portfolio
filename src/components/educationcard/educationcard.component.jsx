import './education.styles.scss'

const EducationCard = (props) => {
    const {schoolName, schoolType,schoolLocation, fieldOfStudy, graduationDate, gpa, campus} = props;
    return(
        <div className="wrapper-education-card">
            <div className="education-card-left">
                <div className="education-card-left-container">
                   <div className='school-type'>{schoolType}</div> 
                </div>
            </div>
            <div className="education-card-right">
                <div>{schoolName}</div>
                <div>{campus}</div>
                <div>{schoolLocation}</div>
                <div>{fieldOfStudy} | {gpa}</div>
                <div>{graduationDate}</div>
                <div></div>
            </div>
        </div>
    )
}
export default EducationCard;