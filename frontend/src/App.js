import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import CreatePost from './components/create-post.component'
import EditPost from './components/edit-post.component'
import ViewPost from './components/view-post.component'
import PostList from './components/post-list.component'

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <Link class="navbar-brand" to={'/post-list'}>Navbar</Link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <Link class="nav-link" to={'/create-post'}>Create New Post</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to={'/post-list'}>See All Posts</Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>

      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <Switch>
              <Route exact path="/" component={PostList}/>
              <Route path="/create-post" component={CreatePost}/>
              <Route path="/edit-post/:id" component={EditPost}/>
              <Route path="/view-post/:id" component={ViewPost}/>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
