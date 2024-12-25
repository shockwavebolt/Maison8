function Work({ title, description, seperator }) {
  return (
    <div className="work">
      {seperator && <div className="seperator"></div>}
      <div className="preview"></div>
      <div className="work_Title_Description">
        <h3 className="workTitle">{title}</h3>
        <p className="description">{description}</p>
      </div>
    </div>
  );
}

export default Work;
