import React from "react";
import "./style.css";


function ROASearchForm(props) {
  console.log(props);
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="name">Type Client Name for ROA:</label>
        <input

          type="text"
          className="form-control"
          placeholder="Client Name"
          id="name"
          onChange={props.handleInputChange}
        />

        <button type="submit" onClick={props.handleFormSubmit} className="btn btn-success">
          Create ROA
        </button>
      </div>
    </form>
  );
}

export default ROASearchForm;
