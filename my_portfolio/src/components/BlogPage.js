import React, { Component } from 'react';
import NavBar from './NavBar';

class BlogPage extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <h1>BLOG</h1>
                <p>SINOBLOGの記事をランダムに表示しています。</p>
            </div>
        );
    }
};

export default BlogPage;