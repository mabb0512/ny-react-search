import React from "react";

const Search = props =>
  <div className="container">
    <div className="row">
      <div className="col-12">
        <h3>
          <strong>Search</strong>
        </h3>
        <form>
          <div className="form-group">
            <label htmlFor="topic">Topic</label>
            <input onChange={props.topicChange} type="text" className="form-control" id="topic" aria-describedby="emailHelp" />
          </div>
          <div className="form-group">
            <label htmlFor="start-year">Start Date(YYYYMMDD)</label>
            <input onChange={props.startYearChange} type="text" className="form-control" id="start-year" />
          </div>
          <div className="form-group">
            <label htmlFor="end-year">End Date(YYYYMMDD)</label>
            <input onChange={props.endYearChange} type="text" className="form-control" id="end-year" />
          </div>
          <button onClick={props.formSubmit} type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
    <br/><br/>
    <div className="row">
      <div className="col-12">
        <h3>
          <strong>Results</strong>
        </h3>
        {props.renderArticles()}
          </div>


    </div>
    <br/><br/>
  </div>

export default Search;
