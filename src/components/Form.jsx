function Form() {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <form className="form">
      <div className="formInput">
        <label for="name">Name</label>
        <input
          className="underline_input"
          type="text"
          id="name"
          name="name"
          placeholder="Your first and last name"
        ></input>
      </div>
      <div className="formInput">
        <label for="companyName">Company Name</label>
        <input
          className="underline_input"
          type="text"
          id="companyName"
          name="companyName"
          placeholder="Your company's name"
        ></input>
      </div>
      <div className="formInput">
        <label for="email">Email</label>
        <input
          className="underline_input"
          type="text"
          id="email"
          name="email"
          placeholder="Your email adress"
        ></input>
      </div>
      <div className="formInput">
        <label for="serviceType">Service Type</label>
        <div class="radio-buttons">
          <input
            type="radio"
            id="design+dev"
            name="selection"
            value="design+dev"
          />
          <label for="design+dev">Design + Development</label>
          <input type="radio" id="design" name="selection" value="webDesign" />
          <label for="design">Web Design</label>
        </div>
      </div>
      <div className="formInput">
        <label for="projectDetails">Project Details</label>
        <textarea
          className="textarea_input"
          id="name"
          name="name"
          placeholder="Your website details"
        ></textarea>
      </div>
      <button className="formButton" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
}

export default Form;
