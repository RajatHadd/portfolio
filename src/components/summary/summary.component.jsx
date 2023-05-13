import "./summary.styles.scss";

const Summary = () => {
  return (
    <div className="summary-wrapper">
      <div className="summary-left">
        <span>Hi, I'm </span>
        <span>Rajat Saini,</span>
        <span>A React Developer,</span>
        <div>
          who prioritizes usability and adaptability
          during projects. Designs sites and apps to attract users with
          aesthetically pleasing interfaces and exceptional UX elements.
          Comfortable working within large-scale collaborations or on
          individually-developed assets.
        </div>
        <div
            className="blur"
            style={{ background: "rgb(238 210 255)" }}
          ></div>
      </div>
      <div className="summary-right">
        
      </div>
    </div>
  );
};

export default Summary;
