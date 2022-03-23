import { ParagraphData } from "./ParagraphData";



function About() {
    return (
      
        
        <div className="about">
          {ParagraphData.map((paraitem) => {
            return (

          <p>
            <h1> {paraitem.heading} </h1>
            {paraitem.content}
          </p>
            );
          })}
        </div>
      
    );
        }


  export default About;