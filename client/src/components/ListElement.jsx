import React from 'react';
import axios from 'axios';

class ListElement extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      edit: '',
      clicked: false
    }
    this.editName = this.editName.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.editState = this.editState.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  editName() {
    axios.put(`/api/students/${this.props.student.id}`, {
      name: this.state.edit
    })
    .then(() => {
      this.props.getStudents()
    })
    .then(() => {
      this.setState({clicked: false})
    })
    .then(() => {
      this.setState({edit: ''})
    })
    .catch(err => {
      console.log(err)
    })
  }

  handleClick() {
    this.setState({clicked: !this.state.clicked})
  }

  handleChange(e) {
    this.setState({edit: e.target.value})
  }

  editState() {
    if (this.state.clicked) {
      return (
        <span>
          <div>{this.props.student.name}</div>
          <img src={this.props.student.imgurl}></img>
          <div>
            <input onChange={this.handleChange} value={this.state.edit} placeholder="Change Name.."></input>
            <button onClick={this.editName}>Update</button><button onClick={this.handleClick}>Cancel</button>
          </div>
        </span>
      )
    } else {
      return (
        <span>
          <div>{this.props.student.name}</div>
          <img src={this.props.student.imgurl}></img>
          <div>
            <button onClick={this.handleClick}>Edit</button>
          </div>
        </span>
      )
    }
  }

  render() {
    return (
      <div>
        {this.editState()}
      </div>
    )
  }

}


export default ListElement
