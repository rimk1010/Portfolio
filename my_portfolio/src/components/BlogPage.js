import React from 'react';
import axios from 'axios';
import { makeStyles, Grid, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography, Link } from '@material-ui/core';

const wpUrl = 'https://fires-tech.com/wp-json/wp/v2/posts?_embed&per_page=4';

const blogContents = [];

 {/*
        タイトル:console.log(response.title.rendered);
        リンク:console.log(response.link);
        本文抜粋:console.log(response.excerpt.rendered);
        サムネイル:console.log(response["_embedded"]["wp:featuredmedia"][0]["source_url"]);
    */}

axios.get(wpUrl).then(res => {
    res.data.map((response) => {
        blogContents.push(response);
    })
});

const useStyles = makeStyles((theme) => ({
    root:{
        flexGrow:1,
    },
    card:{
        maxWidth:700,
    }
}));

function WorkPage() {
    const classes = useStyles();

    function FormRow() {
        return (
            <React.Fragment>
                {blogContents.map((content) => {
                    return(
                    <Grid key={content.title.rendered} item xs={12} sm={6}>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia component='img' alt='alternative img' height='200' image={content["_embedded"]["wp:featuredmedia"][0]["source_url"]} title={content.title.rendered} />
                                <CardContent>
                                    <Typography gutterBottom variant='h5' component='h2'>{content.title.rendered}</Typography>
                                    <Typography variant='body2' color='textSecondary' component='p'>
                                        {content.excerpt.rendered}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size='small' color='primary'>
                                    <Link href={content.link} target='_blank'>Learn More</Link>
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    );
                })}
            </React.Fragment>
        )
    }

    return (
        <div>
            <h1>BLOGS</h1>
            <p>SINOBLOGの記事を表示しています。wp rest apiを使用しています。</p>
            <div className={classes.root}>
                <Grid container spacing={2} justify='center' alignItems='center'>
                    <Grid container item xs={12} sm={10} spacing={3}>
                        <FormRow />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default WorkPage;