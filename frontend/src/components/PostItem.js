import React, { Component } from 'react';
import Link from 'next/link';

export default class PostItem extends Component {
    render() {
        return (
            <div>
              <Link href={"/view-post/" + this.props.obj._id}>
                <a href="">{this.props.obj.title}</a>
              </Link>
            </div>
        );
    }
}
