import React, { Component } from 'react';
import StudentListContainer from './components/studentList/StudentListContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <StudentListContainer />
      </div>
    );
  }
}

export default App;
