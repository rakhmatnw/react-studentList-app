import React, { Component } from 'react';

class EditStudent extends Component {
  state = {
    id: '',
    name: '',
    class: '',
    contact: ''
  }

  componentDidUpdate(prevProps) {
    if(this.props.editData.name !== prevProps.editData.name){
      this.setState({
        id: this.props.editData.id,
        name: this.props.editData.name,
        class: this.props.editData.class,
        contact: this.props.editData.contact
      })
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleClick = e => {
    e.preventDefault();
    this.props.editStudent(this.state);
    this.setState({
      id: '',
      name: '',
      class: '',
      contact: ''
    })
  }

  render() {

    if(this.props.wantToEdit){
      return(
        <form className="row no-gutters">
          <div className="form-group col">
            <input type="text" id="name" onChange={ this.handleChange } className="form-control"  value={this.state.name} placeholder="Name"/>
          </div>
          <div className="form-group col  mx-2">
            <input type="text" id="class" onChange={ this.handleChange } className="form-control" value={this.state.class} placeholder="Class"/>
          </div>
          <div className="form-group col">
            <input type="text" id="contact" onChange={ this.handleChange } className="form-control" value={this.state.contact} placeholder="Phone Number"/>
          </div>
          <div className="form-group col-2 ml-2">
            <button onClick={ this.handleClick } className="btn btn-primary btn-block">UPDATE</button>
          </div>
        </form>
      )
    }else{
      return(null)
    }
    
  }
}

export default EditStudent;