import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardMedia, CardContent, CardActions, Avatar, Typography} from '@material-ui/core';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    root:{
        maxWidth: 300,
        margin: 'auto',
    },
    media:{
        height:0,
        paddingTop:'56.25%',
    },
    avatar:{
        backgroundColor:red[500],
    },
}));


function AboutPage() {
    const classes = useStyles();

        return (
            <div className='content'>
                <div className='page-text'>
                    <h1 className='page-title'>ABOUT ME!</h1>
                </div>
                <div className='about-container'>
                    <div className='about-text'>
                        <h2>SINOBU</h2>
                        <p>WebDeveloperです。よろしくお願いします。</p>
                    </div>
                    <div className='about-myself'>
                        <Card className={classes.root}>
                            <CardHeader avatar={
                                <Avatar aria-label='recipe' className={classes.avatar}>S</Avatar>
                            }
                            title='SINOBU'
                            subheader='WEB Developer'
                            />
                        <CardMedia className={classes.media} image={`${process.env.PUBLIC_URL}/img/dog.jpg`} title='SINOBU' />
                        <CardContent>
                            <Typography variant='body2' color='textSecondary' component='p'>
                                My name is SINOBU. Im WEB Developer.
                                Located In Tokyo,
                                Developer, Engineering, Design.
                            </Typography>
                        </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        );
};

export default AboutPage;