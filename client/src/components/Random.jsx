import React from 'react';

/*
  This component does not necessarily have to be a class component.
  There are multiple ways to implement this feature.
  How would you implement this as a functional component?
*/
export default class Random extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      student: ''
    }
    this.getRandomStudent = this.getRandomStudent.bind(this)
    this.generateRandom = this.generateRandom.bind(this)
  }

  componentDidMount() {
    this.getRandomStudent()
  }

  getRandomStudent(){
    // this gives us a random index value
    var ind = Math.floor(Math.random() * this.props.students.length);
    this.setState({student: this.props.students[ind]})
  }

  generateRandom() {
    this.getRandomStudent()
  }

  render() {
    return (
      <div>
        <div>
          <img src={this.state.student.imgurl}></img>
          <h1>{this.state.student.name}</h1>
        </div>
        <button onClick={this.generateRandom}>Randomize</button>
      </div>
    )
  }
}