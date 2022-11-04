import React, { Component } from "react";
import axios from "axios";
import DeleteStudent from "./DeleteStudent";
import AddStudent from "./AddStudent";

class StudentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    this.recallFunction();
  }

  recallFunction = () => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) =>
      this.setState(
        () => {
          return { users: res.data };
        },
        () => {
          console.log(this.state);
        }
      )
    );
  };

  render() {
    const { users } = this.state;

    return (
      <div>
        <AddStudent recallFunction={this.recallFunction} />
        <ul>
          {users.map((user) => (
            <div>
              <li key={user.id}>{user.name}</li>
              <DeleteStudent key={`delete${user.id}`} id={user.id} />
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

export default StudentList;
