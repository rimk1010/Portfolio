import React from 'react';
import { makeStyles, Grid, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root:{
        flexGrow:1,
    },
    card:{
        maxWidth:700,
    }
}));

const datas = [
    {
        imgPath:'img1.jpg',
        title:'Portfolio',
        desc:'ポートフォリオです。ReactとMaterial UIを使用して作成しました。',
    },
    {
        imgPath:'img2.jpg',
        title:'TodoApp',
        desc:'Todoアプリです。Reactを使用して作成しました。',
    },
];

function WorkPage() {
    const classes = useStyles();

    function FormRow() {
        return (
            <React.Fragment>
                {datas.map((data) => {
                    return(
                    <Grid key={data.title} item xs={12} sm={6}>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia component='img' alt='alternative img' height='200' image={`${process.env.PUBLIC_URL}/img/${data.imgPath}`} title={data.title} />
                                <CardContent>
                                    <Typography gutterBottom variant='h5' component='h2'>{data.title}</Typography>
                                    <Typography variant='body2' color='textSecondary' component='p'>
                                        {data.desc}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size='small' color='primary'>Learn More</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    );
                })}
            </React.Fragment>
        )
    }

    return (
        <div className='content'>
            <div className='page-text'>
                <h1 className='page-title'>WORKS</h1>
                <div className='page-subtitle'>
                    <p>作品集です。ご参照ください。</p>
                </div>
            </div>
            <div className={classes.root}>
                <Grid container spacing={2} justify='center' alignItems='center'>
                    <Grid container item xs={12} sm={10} md={6} spacing={3}>
                        <FormRow />
                    </Grid>
                    <Grid container item xs={12} sm={10} md={6} spacing={3}>
                        <FormRow />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default WorkPage;