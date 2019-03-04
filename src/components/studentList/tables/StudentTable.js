import React from 'react';

const StudentTable = ({students}) => {

  const studentList = students.map(student => {
    return(
      <tr key={student.id}>
        <th>{student.id+1}</th>
        <th>{student.name}</th>
        <th>{student.class}</th>
        <th>{student.contact}</th>
        <th>
          <button className="btn btn-primary mr-1">edit</button>
          <button className="btn btn-danger">delete</button>
        </th>
      </tr>
    )
  })

  return(
    <table className="table table-striped">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Class</th>
          <th>Phone Number</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        { studentList }
      </tbody>
    </table>
  )
}

export default StudentTable;