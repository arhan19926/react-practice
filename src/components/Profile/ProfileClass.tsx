import React from "react";

interface ProfileState {
  data: {
    name?: string;
    avatar_url?: string;
    location?: string;
    login?: string;
  };
}
class ProfileClass extends React.Component<{}, ProfileState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      data: {},
    };
    console.log(`constructor called`);
  }

  async componentDidMount() {
    //API calls
    console.log(`Component Mounted`);

    const data = await fetch("https://api.github.com/users/arhan19926");
    const result = await data.json();
    this.setState({
      data: result,
    });
  }
  componentDidUpdate() {
    //componentDidUpdate(prevProps, prevState) {
    console.log(`Component Updated`);
  }
  render() {
    console.log(`rendered`);
    console.log(this.state.data);
    return (
      <div>
        <h1>{"Profile (class component)"}</h1>
        <img src={this.state.data.avatar_url} />
        <h2>
          Name: {this.state.data.name} {`(${this.state.data.login})`}
        </h2>
        <h2>Location:{this.state.data.location}</h2>
      </div>
    );
  }
}

export default ProfileClass;
