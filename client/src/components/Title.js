import React from "react";

const Title = props => 
    <div className="col-10">
        <h4><a href={props.url} target="_blank">{props.title}</a></h4>
        <p>Date Published: {props.date}</p>
    </div>

export default Title;