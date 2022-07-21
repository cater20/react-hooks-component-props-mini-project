import React from "react";

function About(){
return(
    <aside>
<img src={props.image} alt="blog logo"/>

<p >{props.about}/</p>
    </aside>
)
}
export default About;