import React, { Component } from "react";
import axios from 'axios';
import PostItem from './PostItem'

export default class PostList extends Component {

  constructor(props){
    super(props)

    this.state = {
      posts: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:4000/posts/')
      .then(res => {
        console.log(res.data)
        this.setState({
          posts: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  CreatePostItem(){    
    return this.state.posts.map((res,i) => {
      return <PostItem obj={res} key={i} />
    })
  }

  render() {
    return (
      <div class="container">

      <h1>{this.CreatePostItem()}</h1>

      </div>
    );
  }
}
