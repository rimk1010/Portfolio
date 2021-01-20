import React, { Component } from 'react';
import NavBar from './NavBar';

class TopPage extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className='top-wrapper'>
                <h1>My Portfolio</h1>
                <p>Web Developer</p>
            </div>
        );
    }
};

export default TopPage;