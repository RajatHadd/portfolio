import { useContext } from "react";
import { themeContext } from "../../contexts/themecontext";
import { logo, letter } from "../../variants";
import Toggle from "../toggle/toggle.component";
import "./navbar.styles.scss";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const NavBar = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      className="n-wrapper"
      id="Navbar"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <div className="n-left">
        <div className="n-name">
          <Link
            spy={true}
            duration={1000}
            to="Home"
            offset={-75}
            smooth={true}
            activeClass="activeClass"
          >
            <motion.span
              variants={logo}
              initial="hidden"
              animate="visible"
              style={{
                fontFamily: "'Roboto Condensed', sans-serif",
                marginLeft: "1rem",
              }}
            >
              {"RajatSaini".split("").map((char, index) => {
                return (
                  <motion.span key={char + "-" + index} variants={letter}>
                    {char}
                  </motion.span>
                );
              })}
            </motion.span>
          </Link>
        </div>
        <Toggle />
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul>
            <Link
              spy={true}
              duration={1000}
              to="Home"
              offset={-75}
              smooth={true}
              activeClass="activeClass"
            >
              <li>Home</li>{" "}
            </Link>
            <Link
              spy={true}
              duration={1000}
              to="Experience"
              smooth={true}
              activeClass="activeClass"
            >
              <li>Experience</li>{" "}
            </Link>
            <Link
              spy={true}
              duration={1000}
              to="Education"
              smooth={true}
              activeClass="activeClass"
            >
              <li>Education</li>{" "}
            </Link>
          </ul>
        </div>
      </div>

      <Link
        spy={true}
        duration={1000}
        to="Contact"
        smooth={true}
        activeClass="activeClass"
      >
        <button className="button n-button">Contact</button>
      </Link>
    </div>
  );
};
export default NavBar;
