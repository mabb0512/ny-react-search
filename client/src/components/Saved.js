import React from "react";
import Title from "./Title";

const Saved = props =>
    <li className="list-group-item">
      <div className="row">
        <Title {...props}/>
        <div className="col-2">
          <button className="btn btn-danger float-right" onClick={() => props.deleteButton(props._id)}>Delete</button>
        </div>
      </div>
    </li>

export default Saved;
