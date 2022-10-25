import React from 'react'
import Course from './course'

const Student = props => {
    return <p>Student <b>{props.name}</b> name with student number <b>{props.number}</b><Course enrolled = {props.enrolled}/></p>;
}
 
export default Student;