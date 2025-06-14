import use from "react";
import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);

   // console.log("Parent Constructor");
  }

  componentDidMount() {
   // console.log('Parent ComponentDidMount');
  }

  render() {
   // console.log("Parent Render");
    return (
      <div>
        <h1>About Us Class Component</h1>
        <h2>This is the about page of our application.</h2>
        <h3>We are a team of passionate developers.</h3>
        {/* <User name={"Ananthsagar from function"} /> */}

        <UserClass name={"First "} location={"Delhi"} />
        {/* <UserClass name={"Second "} location={"hyd"} /> */}
        {/* <UserClass name={"Third "} location={"hyd"} /> */}
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About Us</h1>
//       <h2>This is the about page of our application.</h2>
//       <h3>We are a team of passionate developers.</h3>
//       <User name={"Ananthsagar from function"} />
//       <UserClass name={"Ananthsagar from class"} location={"Delhi"} />
//     </div>
//   );
// };
export default About;
