import React from 'react';
import axios from 'axios';
import List from './List.jsx'
import Add from './Add.jsx'
import Random from './Random.jsx'

export default class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      page: 'home',
      studentlist : []
    }
    this.getStudents = this.getStudents.bind(this)
    this.changepage = this.changepage.bind(this)
  }

  componentDidMount(){
    // used to store all students on our front end when the application runs
    this.getStudents()
  }

  getStudents(){
    // Todo: Add your code here to retrieve all students from the database
    axios.get('/api/students')
    .then(result => {
      this.setState({studentlist: result.data})
    })
    .catch(err => {
      console.log(err);
    })

  }

  changepage(e){
    // Todo: Add your logic to "change pages" here on button click
    if (this.state.page === 'home') {
      this.setState({page: e.target.value})
    } else {
      this.getStudents()
      this.setState({page: 'home'})
    }
  }

  render() {
    if (this.state.page === 'add'){
      return (
        <div>
          <button value='home' onClick={this.changepage}>Back</button>
          <Add />
        </div>
      )
    } else if (this.state.page === 'list'){
      return (
        <div>
          <button onClick={this.changepage} value='home'>Back</button>
          <List students={this.state.studentlist}/>
        </div>
      )
    } else if (this.state.page === 'random'){
      return (
        <div>
          <button value='home' onClick={this.changepage}>Back</button>
          <Random students={this.state.studentlist}/>
        </div>
      )
    } else {
      return (
        <div>
          <h1>Student Cold-Caller</h1>
          <button onClick={this.changepage} value='add'>Add Student</button>
          <button onClick={this.changepage} value='list'>List Students</button>
          <button onClick={this.changepage} value='random'>Random Student</button>
        </div>
      )
    }
  }
}