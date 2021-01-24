import React from 'react';
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom';
import { AppBar, Toolbar, IconButton, List, ListItem, ListItemText, makeStyles, Container } from '@material-ui/core';
import { Home } from '@material-ui/icons';
import TopPage from './TopPage';
import AboutPage from './AboutPage';
import SkillsPage from './SkillsPage';
import WorkPage from './WorkPage';
import BlogPage from './BlogPage';
import ContactPage from './ContactPage';

export default function NavBar() {
    const navs = [
        {name:'about', value:'ABOUT', path:'/about'},
        {name:'skills', value:'SKILLS', path:'/skills'},
        {name:'work', value:'WORK', path:'/work'},
        {name:'blog', value:'BLOG', path:'/blog'},
        {name:'contact', value:'CONTACT', path:'/contact'}
    ];

    const current = {
        color:'red'
    };

    const useStyles = makeStyles({
        navbarDisplayFlex: {
            display:'flex',
            justifyContent:'space-between'
        },
        navDisplayFlex: {
            display:'flex',
            justifyContent:'space-between'
        },
        LinkText: {
            textDecoration:'none',
            textTransform:'uppercase',
            color:'white'
        }
    });

    const classes = useStyles();

    return(
        <Router>
            <AppBar position='static'>
                <Container className={classes.navbarDisplayFlex}>
                    <NavLink exact className='nav-link' to='/' activeStyle={current}>
                        <IconButton edge="start" color="inherit" aria-label="home">
                            <Home fontSize="large" />
                        </IconButton>
                    </NavLink>
                    <List component='nav' aria-labelledby='main navigation' className={classes.navDisplayFlex}>
                        {navs.map((nav)=> {
                            return (
                                <ListItem button>
                                    <NavLink to={nav.path} activeStyle={current} className={classes.LinkText}>
                                        <ListItemText primary={nav.value} />
                                    </NavLink>
                                </ListItem>
                            );
                        })}
                    </List>
                </Container>
            </AppBar>
            <Switch>
                <Route exact path='/' component={TopPage} />
                <Route path='/about' component={AboutPage} />
                <Route path='/skills' component={SkillsPage} />
                <Route path='/work' component={WorkPage} />
                <Route path='/blog' component={BlogPage} />
                <Route path='/contact' component={ContactPage} />
            </Switch>
        </Router>
    );
}