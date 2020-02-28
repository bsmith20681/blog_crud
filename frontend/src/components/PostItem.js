import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class PostItem extends Component {
    render() {
        return (
            <div>
              <h1><Link to={"/view-post/" + this.props.obj._id}>{this.props.obj.title}</Link></h1>
            </div>
        );
    }
}
