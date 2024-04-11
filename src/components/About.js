import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props){
    super(props);

   // console.log("parent constructor");
  }

 componentDidMount(){
   // console.log("parent component did mount")
   
  }

  render(){

   // console.log("parent render")
    return (
          <div>
            <h1>About us</h1>
            <h2>This is react learning</h2>
            {/* <p>function based component below</p>
            <User name={"Akshat Vishnoi Function"}/> */}
            <p>class based component below</p>
            <UserClass name={"Akshat Vishnoi Class First"} location={"Moradabad Ashiyana"}/>
          </div>
        );
  }

}


// function based component
// const About = () => {
//   return (
//     <div>
//       <h1>About us</h1>
//       <h2>This is react learning</h2>
//       {/* <p>function based component below</p>
//       <User name={"Akshat Vishnoi Function"}/> */}
//       <p>class based component below</p>
//       <UserClass name={"Akshat Vishnoi Class"} location={"Moradabad Ashiyana"}/>
//     </div>
//   );
// };

export default About;