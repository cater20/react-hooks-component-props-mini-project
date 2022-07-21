import React from "react";

//function Article(props, date="January 1,1970"){
  //return(
 // <article>
   //     <h3>{props.title}</h3>
     //   <small>{props.date}</small>
       // <p>{props.preview}</p>
        //</article>
        //)  }


        function Article({title,date="January 1, 1970",preview}) {
          return(
              
              <article>
                  <h3>{title}</h3>
                  <small>{date}</small>
                  <p>{preview}</p>
              </article>
              
          )
      }   

export default Article;
