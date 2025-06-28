import use from "react";
import User from "./User";
import UserClass from "./UserClass";
import React from "react";
import UserContext from "../utils/UserContext";

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
        <div>
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="text-xl font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
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

// useEffect()  => React Hook that tells React DO SOME CODE WHEN (pick one):
//This components re-render
//This component mounts
//The state of a value

// useEffect(function, [dependencies])

// 1. useEffect(() => {})                    Runs after every re-render
// 2. useEffect(() => {}, [])                Runs only on mount
// 3. useEffect(() => {}, [value]).         // Runs on mount + when value changes

// USES
// #1 Event Listeners
// #2 DOM manipulation
// #3 Subscriptions (Real time Updates)
// # Fetching Data From API
// #5 Clean-up-when-a-component-unmounts

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
