import React from 'react';
import { Link } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';


function ContactPage() {
        return (
            <div className='content'>
                <div className='page-text'>
                    <h1 className='page-title'>CONTACT</h1>
                    <div className='page-subtitle'>
                        <p>Please follow me above!!</p>
                    </div>
                </div>
                <div className='sns-icons'>
                    <Link href='https://twitter.com/firetech1010' target='_blank'><TwitterIcon className='sns-icon' fontSize='inherit' /></Link>
                    <Link href='' target='_blank'><InstagramIcon className='sns-icon' fontSize='inherit' /></Link>
                    <Link href='https://github.com/rimk1010' target='_blank'><GitHubIcon className='sns-icon' fontSize='inherit' /></Link>
                </div>
                <div className='email'>
                    <h3 className='email-title'>E-Mail</h3>
                    <div className='email-main'>pegasustapi1010@gmail.com</div>
                </div>
            </div>
        );
};
export default ContactPage;