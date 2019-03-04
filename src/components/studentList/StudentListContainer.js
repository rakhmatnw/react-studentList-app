import React, { Component } from 'react';
import StudentTable from './tables/StudentTable';


class StudentListContainer extends Component {
  state = {
    students: [
      {id:0, name: 'Ade', class:'back-end', contact:'0123'}
    ]
  }

  render(){
    return(
      <div className="container text-center">
        <h1 className="mb-5">Student List</h1>
        <StudentTable students={this.state.students}/>
      </div>
    )
  }
}

export default StudentListContainer;