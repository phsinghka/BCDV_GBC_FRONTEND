import React, { Component } from "react";
import axios from "axios";

class DeleteStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    axios
      .delete(`https://jsonplaceholder.typicode.com/users/${this.state.id}`)
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
          <button type="submit">Delete</button>
        </form>
      </div>
    );
  }
}

export default DeleteStudent;
