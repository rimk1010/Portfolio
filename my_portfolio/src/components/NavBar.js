import React from 'react';
import {Row, Col} from 'react-bootstrap';
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom';
import TopPage from './TopPage';
import AboutPage from './AboutPage';
import SkillsPage from './SkillsPage';
import WorkPage from './WorkPage';
import BlogPage from './BlogPage';

export default function NavBar() {
    const navs = [
        {name:'about', value:'ABOUT', component:'AboutPage'},
        {name:'skills', value:'SKILLS', component:'SkillsPage'},
        {name:'work', value:'WORK', component:'WorkPage'},
        {name:'blog', value:'BLOG', component:'BlogPage'}
    ];

    const current = {
        color:'red'
    };

    return(
        <Router>
            <Row className='navigation'>
                <Col key='top' className='nav-item'>
                    <NavLink exact className='nav-link' to='/' activeStyle={current}>TOP</NavLink>
                </Col>
                {navs.map((nav)=> {
                    return (
                        <Col key={nav.name} className='nav-item'>
                            <NavLink className='nav-link' to={nav.name==='top' ? '/' : '/' + nav.name} activeStyle={current}>
                                {nav.value}
                            </NavLink>
                        </Col>
                    )
                })}
            </Row>
            <Switch>
                <Route exact path='/' component={TopPage} />
                <Route path='/about' component={AboutPage} />
                <Route path='/skills' component={SkillsPage} />
                <Route path='/work' component={WorkPage} />
                <Route path='/blog' component={BlogPage} />
            </Switch>
        </Router>
    );
}