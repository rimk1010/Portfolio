import { render } from '@testing-library/react';
import React from 'react';

export default function NavBar() {
    const navs = [
        {name:'home', value:'HOME'},
        {name:'about', value:'ABOUT'},
        {name:'skills', value:'SKILLS'},
        {name:'work', value:'WORK'},
        {name:'blog', value:'BLOG'}
    ];

    return(
        <nav>
            <ul>
                {navs.map((nav)=> {
                    return <li key={nav.name}>{nav.value}</li>
                })}
            </ul>
        </nav>
    );
}