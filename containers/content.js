import { Box, Button, Link, Grid, Typography, Container} from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Countdown from '../components/coundown';

const useStyles = makeStyles((theme) => ({
    imageWrapper: {
        width: '100%',
        position: 'relative',
        display:'block',
        paddingBottom: '100%'
    },
    image: {
        position: 'absolute',
        objectFit: 'cover',
        top: '0',
        bottom: '0',
        left: '0',
        width: '100%',
        height: '100%',
    },
    textBox: {
        padding: '20px'
    },
    button: {
        color: 'white',
        textDecoration: 'none'
    }
}));

const Content = ({days}) => {
    const classes = useStyles();

    return (
        <Container maxWidth="md">
            <Box pt={8}>
                <Typography align='center' variant='h2' gutterBottom>
                    Type Something
                </Typography>
                <Typography align='center'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas fringilla elementum hendrerit. Vestibulum ante
                    ipsum primis in faucibus orci luctus et ultrices posuere
                    cubilia curae; Sed id rhoncus arcu. Nullam magna nibh,
                    imperdiet nec velit eu, tincidunt gravida est. Maecenas
                    tincidunt, metus et cursus aliquam, arcu urna iaculis enim,
                    ac posuere tellus quam eu tortor. Proin mollis pulvinar
                    ligula et mattis. Vivamus sed odio urna. Aliquam in metus
                    porttitor, varius mauris sed, auctor augue. Mauris molestie
                    tellus eget ipsum volutpat, at malesuada lectus pharetra.
                    Praesent dictum tortor eu gravida pulvinar. Vivamus ac nisl
                    ac mi sodales venenatis.
                </Typography>
            </Box>

            {/* Första bilder här! */}
            <Box pt={8}>
                <Grid container spacing={2}>
                    <Grid item md={6} xs={12}>
                        <div className={classes.imageWrapper}>
                            <img
                                className={classes.image}
                                src='/images/ski.jpg'
                            />
                        </div>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <Countdown days={days} />
                    </Grid>
                </Grid>
            </Box>

            <Box pt={8}>
                <Typography variant='h3' align='center' gutterBottom>
                    Type Something
                </Typography>
                <Typography align='center'>
                    Integer pharetra, felis quis sodales laoreet, ligula lectus
                    suscipit enim, id consequat dolor turpis vestibulum massa.
                    Cras interdum nunc at efficitur faucibus. Phasellus velit
                    purus, varius sit amet metus a, tristique egestas tellus.
                    Morbi magna mi, feugiat at quam eget, rutrum placerat metus.
                    Etiam ut sem vitae nisl egestas consequat. Suspendisse
                    vehicula, enim at feugiat mattis, ligula quam tincidunt
                    orci, id varius elit sapien quis lorem. Aenean at nulla
                    consectetur, cursus neque non, euismod risus. Phasellus
                    feugiat justo a lacus imperdiet, ut faucibus metus
                    fermentum. Sed vel viverra ligula, varius suscipit sem. Sed
                    sit amet rutrum lectus, facilisis porttitor arcu.
                    Suspendisse sed dictum magna. Sed vestibulum dapibus mauris.
                    Donec volutpat ex a fermentum accumsan.
                </Typography>
            </Box>

            <Box pt={6}>
                <Grid container alignItems="center" justify="center" pt={2}>
                    <Grid item md={6} xs={12}>
                        <div className={classes.imageWrapper}>
                            <img
                                className={classes.image}
                                src='/images/rum.JPG'
                            />
                        </div>
                    </Grid>
                    <Grid item md={6} xs={12} className={classes.textBox}>
                        <Typography variant='h3' gutterBottom>Boende</Typography>
                        <Typography gutterBottom>Integer pharetra, felis quis sodales laoreet, ligula lectus suscipit enim, id consequat dolor turpis vestibulum massa. Cras interdum nunc at efficitur faucibus.</Typography>
                        <Button component='div' color='primary' variant='contained' >
                            <Link href='#' className={classes.button}>
                                <span className={classes.link}>Mer info</span>
                            </Link>
                        </Button>
                    </Grid>
                </Grid>
                <Grid container alignItems="center" justify="center" pt={2}>
                    <Grid item md={6} xs={12} className={classes.textBox}>
                        <Typography variant='h3' gutterBottom>Kryka</Typography>
                        <Typography gutterBottom>Integer pharetra, felis quis sodales laoreet, ligula lectus suscipit enim, id consequat dolor turpis vestibulum massa. Cras interdum nunc at efficitur faucibus.</Typography> 
                        <Button component='div' color='primary' variant='contained' >
                            <Link href='#' className={classes.button}>
                                <span className={classes.link}>Mer info</span>
                            </Link>
                        </Button>
                    </Grid>
                    <Grid item md={6} xs={12}>
                    <div className={classes.imageWrapper}>
                            <img
                                className={classes.image}
                                src='https://images.unsplash.com/photo-1600655584427-65c6ebfca603?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3302&q=80'
                            />
                        </div>
                    </Grid>
                </Grid>
            </Box>

        </Container>
    );
};

export default Content;
