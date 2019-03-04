import React, { Component } from 'react';

class StudentForm extends Component {
  state = {
    name: null,
    class: null,
    contact: null
  }

  render() {
    return(
      <form className="row no-gutters">
        <div className="form-group col">
          <input type="text" id="name" className="form-control" placeholder="Name"/>
        </div>
        <div className="form-group col  mx-2">
          <input type="text" id="class" className="form-control" placeholder="Class"/>
        </div>
        <div className="form-group col">
          <input type="text" id="contact"className="form-control" placeholder="Phone Number"/>
        </div>
        <div className="form-group col-2 ml-2">
          <button className="btn btn-success btn-block">SUBMIT</button>
        </div>
      </form>
    )
  }
}

export default StudentForm;