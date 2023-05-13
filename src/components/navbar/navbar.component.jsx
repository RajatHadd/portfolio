import "./navbar.styles.scss";
const NavBar = () => {
  return (
    <div className="n-wrapper" id="NavBar">
      <div className="n-left">
        <div className="n-name">Rajat Saini</div>
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
