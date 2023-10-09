import "./info-box.styles.css";
function InfoBox({ title, Icon, text }) {
  return (
    <div className="infobox-container">
      <div className="title-container">
        <img src={Icon} className="infobox-icon" />
        <div className="title"> {title} </div>
      </div>
      <div className="subTitle"> {text} </div>
    </div>
  );
}

export default InfoBox;
