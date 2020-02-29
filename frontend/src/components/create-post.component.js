import React, { Component } from "react";
import axios from 'axios';

export default class CreatePost extends Component {
  constructor(props){
    super(props)

    // Setting up functions
    this.onChangePostTitle = this.onChangePostTitle.bind(this);
    this.onChangePostBody = this.onChangePostBody.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      title: '',
      body: ''
    }
  }

  onChangePostTitle(e){
    this.setState({title: e.target.value})
  }

  onChangePostBody(e){
    this.setState({body: e.target.value})
  }

  onSubmit(e){
    e.preventDefault();

    const postObject = {
      title: this.state.title,
      body: this.state.body
    }

    axios.post('http://localhost:4000/posts/create-post', postObject)
      .then(res => console.log(res.data));

    this.setState({title: '', body: ''})

    this.props.history.push('/post-list')
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div class="form-group">
            <label for="exampleFormControlInput1">Title</label>
            <input type="text" value={this.state.title} onChange={this.onChangePostTitle} class="form-control" id="exampleFormControlInput1" placeholder="Enter title here"></input>
          </div>
          <div class="form-group">
            <label for="exampleFormControlTextarea1">Blog Post</label>
            <textarea class="form-control" value={this.state.body} onChange={this.onChangePostBody} id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}
