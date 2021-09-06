import React from 'react';

class ListElement extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      edit: '',
      clicked: false
    }
  }

  render() {
    return (
      <span>
        <div>{this.props.student.name} <button>Edit</button></div>
        <img src={this.props.student.imgurl}></img>
      </span>
    )
  }

}


export default ListElement
