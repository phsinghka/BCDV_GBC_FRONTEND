import React, { Component } from "react";
import axios from "axios";

class AddStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
    };
  }

  handelChange = (event) => {
    this.setState(
      () => {
        return { name: event.target.value };
      },
      () => {
        console.log(this.state.name);
      }
    );
  };

  handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://jsonplaceholder.typicode.com/users", {
        name: this.state.name,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  render() {
    const { name } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Person Name:
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handelChange}
            />
          </label>
          <button type="submit">ADD</button>
        </form>
      </div>
    );
  }
}

export default AddStudent;
