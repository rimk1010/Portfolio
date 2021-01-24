import React, { Component } from 'react';
import NavBar from './NavBar';

class AboutPage extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <h1>ABOUT ME!</h1>
                <h2>SINOBU</h2>
                <p>WebDeveloperです。よろしくお願いします。</p>
            </div>
        );
    }
};

export default AboutPage;