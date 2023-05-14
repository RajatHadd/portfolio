import { logo , letter} from "../../variants";
import "./navbar.styles.scss";
import {motion} from 'framer-motion'

const NavBar = () => {
  return (
    <div className="n-wrapper" id="NavBar">
      <div className="n-left">
        <div className="n-name">
        <motion.a
            variants={logo}
            initial="hidden"
            animate="visible"
            style={{fontFamily :"'Roboto Condensed', sans-serif", marginLeft: '1rem'}}
          >
            {"Rajat Saini".split("").map((char, index) => {
              return (
                <motion.span key={char + "-" + index} variants={letter}>
                  {char}
                </motion.span>
              );
            })}
          </motion.a>
          </div>
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul>
            <li>Home</li>
            <li>Experience</li>
            <li>Education</li>
            <li>Projects</li>
            
          </ul>
        </div>
      </div>

      <button className="button n-button">Contact</button>
    </div>
  );
};
export default NavBar;
