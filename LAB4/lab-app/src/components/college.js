import React, { Component } from 'react'

class College extends Component {
    render() { 
        return <p>College <b>{this.props.name}</b> with address <b>{this.props.location}</b></p>;
    }
}
 
export default College;