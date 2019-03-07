import React, { Component } from 'react';
import StudentTable from './tables/StudentTable';
import AddStudent from './forms/AddStudent';
import EditStudent from './forms/EditStudent';

class StudentListContainer extends Component {
  state = {
    students: [
      {id: 0, name:'rakhmat', class:'front-end', contact:'0123'}
    ],
    editStudents: {
      id: '',
      name: '',
      class: '',
      contact: ''
    },
    wantToEdit: false
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
    this.setState({
      students: studentList
    })
  }

  editStudent = (student) => {
    const students = [...this.state.students];
    students[student.id].name = student.name;
    students[student.id].class = student.class;
    students[student.id].contact = student.contact;

    this.setState(prevState => ({
      students: students,
      wantToEdit: !prevState.wantToEdit
    }))

    // console.log(students);
  }

  wantToEdit = (id, name, kelas, contact) => {
    this.setState({
      wantToEdit: true,
      editStudents: {
        id: id,
        name: name,
        class: kelas,
        contact: contact
      }
    })
  }

  render(){
    return(
      <div className="container text-center">
        <h1 className="mb-5">Student List</h1>
        {/* Form Component */}
        <AddStudent addStudent={this.addStudent} wantToEdit={this.state.wantToEdit}/>
        <EditStudent editStudent={this.editStudent} wantToEdit={this.state.wantToEdit} editData={this.state.editStudents}/>
        {/* Table COmponent for showing data */}
        <StudentTable students={this.state.students} removeStudent={this.removeStudent} wantToEdit={this.wantToEdit}/>
      </div>
    )
  }
}

export default StudentListContainer;