import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "DEFAULT",
      location: "DEFAULT",
      avatar_url: "",
      userInfo: null,
      // count: 0,
      // count2: 2,
    };

    //console.log(this.props.name + " child constructor")
  }

  async componentDidMount() {
    // console.log(this.props.name + " child component did mount")
    const data = await fetch("https://api.github.com/users/akshat0808");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    console.log(json);
  }
  render() {
    //const { name, location } = this.props;
    //console.log(this.props.name + " child render")
    // const {name, location} = this.state.userInfo;
    const { userInfo } = this.state;

    // Check if userInfo is null or undefined
    if (!userInfo) {
      return <div>Loading...</div>; // or return null, or a loading indicator
    }

    // Destructure name and location from userInfo if userInfo exists
    const { name, location, avatar_url, company } = userInfo;
    return (
      <div className="user-card">
        {/* <h1>Count : {this.state.count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count Increase
        </button> */}
        <img src={avatar_url} alt="akshat_img" />
        <h2>Name : {name}</h2>
        <h3>Location : {location}</h3>
        <h3>{company}</h3>
        <h4>Contact : 9876543210, av@av.com</h4>
      </div>
    );
  }
}

export default UserClass;
