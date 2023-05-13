import Experience from './experience/experience.component.jsx';
import NavBar  from './navbar/navbar.component.jsx'
import Summary from './summary/summary.component.jsx';
import Education from './education/education.component.jsx';
import Contact from './contact/contact.component.jsx';


const IndexFile = () => {
    return(
        <div >
            <NavBar />
            <Summary />
            <Experience />
            <Education />
            <Contact />
        </div>
    );
}
export default IndexFile;