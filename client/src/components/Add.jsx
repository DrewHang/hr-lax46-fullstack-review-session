import React from 'react';
import axios from 'axios';

export default class Add extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      imgurl: '',
    }
    this.changeHandler = this.changeHandler.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  changeHandler(e){
    // Todo: Add your code here to handle the data the client inputs
    this.setState({[e.target.name]: e.target.value})

  }

  handleSubmit(e){
    // Todo: Add your code here to handle the API requests to add a student and image
    e.preventDefault()
    axios.post(`/api/students`, {
      name: this.state.name
    })
    .catch(err => {
      console.log(err)
    })

    axios.post('/api/images', {
      imgurl: this.state.imgurl
    })
    .catch(err => {
      console.log(err)
    })


  }

  showPreview(){
    return (
      (this.state.name && this.state.imgurl) ? (
        <div>
          <img src={this.state.imgurl}></img>
          <h2>{this.state.name}</h2>
        </div>
      ) : (
        <div>
          Fill out the form and a preview will appear here...
        </div>
      )
    )
  }

  render() {
    return (
      <div>
        <form>
          <label>Student Name: </label>
          <input onChange={this.changeHandler} type="text" name="name" value={this.state.name}/>
          <label>Image URL: </label>
          <input onChange={this.changeHandler} type="text" name="imgurl" value={this.state.imgurl}/>
          <button onClick={this.handleSubmit} type="submit" value="Submit">Submit</button>
        </form>
        <h1>Preview:</h1>
        <div>{this.showPreview()}</div>
      </div>
    )
  }
}