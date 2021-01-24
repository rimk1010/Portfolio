import React, { Component } from 'react';
import NavBar from './NavBar';

class SkillsPage extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div>
                <h1>SKILLS</h1>
                <p>スキルページです。できることと熟練度をまとめています。</p>
            </div>
        );
    }
};

export default SkillsPage;