import React from "react";
import Title from "./Title";

const Results = props =>
    <li className="list-group-item">
        <div className="row">
          <Title {...props} />
          <div className="col-2">
            <button type="button" className="btn btn-secondary float-right" onClick={() => props.saveButton(props._id)}>Save</button>
          </div>
        </div>
    </li>

export default Results;
