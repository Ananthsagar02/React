import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    // constructor will receive props
    super(props); //The super keyword in JavaScript is mostly used to access properties on an object literal or class's [[Prototype]]

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };
    console.log(this.props.name + "Child constructor");
  }

  //constructor ==> Render ==> ­React updates ­D­O­M ==> componentDidMount
  componentDidMount() {
    console.log('Child ComponentDidMount');
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/Ananthsagar02");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
    console.log(json);
  }

  componentDidUpdate() {
    console.log('ComponentDid Update');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;

    console.log(this.props.name + "Child Render");

    return (
      <div className="user-card">
        <img src={avatar_url}></img>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @ananthfeb16</h4>
      </div>
    );
  }
}
export default UserClass;

/***
 * -- MOUNTING ----
 *
 * Constructor (dummy)
 * Render (dummy)
 *      <HTML Dummy>
 *
 * Component Did Mount
 *      <API Call>
 *      <this.setState> => State variable is updated
 *
 *
 *  ---- UPDATE
 *
 *     Render(APi data)
 *    <HTML (new API data>)
 *    componentDid UPdate
 *
 */
