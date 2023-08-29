import React from "react";

function Links(props){
return(
  <div>
    <h3>Links</h3>
    <a href= {props.linkedin}>Linkedin</a>
    <a href= {props.github}>Github</a>
  </div>

)
  
}

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>{props.bio}</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links linkedin={props.links.linkedin} github={props.links.github}/> 
    </div>
  );
}

export default About;
