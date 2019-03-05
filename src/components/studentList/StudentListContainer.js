import React, { Component } from 'react';
import StudentTable from './tables/StudentTable';
import StudentForm from './forms/StudentForm';

class StudentListContainer extends Component {
  state = {
    students: []
  }

  addStudent = (student) => {
    student.id = this.state.students.length;
    const studentList = [...this.state.students, student];
    this.setState({
      students: studentList
    })
  }

  removeStudent = (id) => {
    const student = this.state.students.filter(student => {
      return student.id !== id;
    })

    const studentList = student;
    console.log(studentList);
    this.setState({
      students: studentList
    })
  }

  render(){
    return(
      <div className="container text-center">
        <h1 className="mb-5">Student List</h1>
        <StudentForm addStudent={this.addStudent}/>
        <StudentTable students={this.state.students} removeStudent={this.removeStudent}/>
      </div>
    )
  }
}

export default StudentListContainer;