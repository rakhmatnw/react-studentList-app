import React, { Component } from 'react';

class StudentForm extends Component {
  state = {
    name: null,
    class: null,
    contact: null
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleClick = e => {
    e.preventDefault();
    this.props.addStudent(this.state);
  }

  render() {
    return(
      <form className="row no-gutters">
        <div className="form-group col">
          <input type="text" id="name" onChange={ this.handleChange } className="form-control" placeholder="Name"/>
        </div>
        <div className="form-group col  mx-2">
          <input type="text" id="class" onChange={ this.handleChange } className="form-control" placeholder="Class"/>
        </div>
        <div className="form-group col">
          <input type="text" id="contact" onChange={ this.handleChange } className="form-control" placeholder="Phone Number"/>
        </div>
        <div className="form-group col-2 ml-2">
          <button onClick={ this.handleClick } className="btn btn-success btn-block">SUBMIT</button>
        </div>
      </form>
    )
  }
}

export default StudentForm;