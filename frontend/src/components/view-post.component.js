import React, { Component } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';


export default class ViewPost extends Component {

  constructor(props){
    super(props)

    this.state = {
      title: '',
      body: ''
    }

    this.deletePost = this.deletePost.bind(this);
  }

  componentDidMount() {
    axios.get('http://localhost:4000/posts/view-post/' + this.props.match.params.id)
      .then(res => {
        console.log(res.data)
        this.setState({
          title: res.data.title,
          body: res.data.body,
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deletePost() {
    axios.delete('http://localhost:4000/posts/delete-post/' + this.props.match.params.id)
      .then((res) => {
          console.log('Post successfully deleted!')
      }).catch((error) => {
          console.log(error)
      })
    this.props.history.push('/post-list')  
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <p>{this.state.body}</p>
        <div>
        <Link className="btn btn-success" to={"/edit-post/" + this.props.match.params.id}>
          Edit
        </Link>
        <button onClick={this.deletePost} class="btn btn-danger">Delete</button>
        </div>
      </div>
    );
  }
}
