import { Box, Button, Link, Grid, Typography, Container} from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    textBox: {
        padding: '20px'
    },
    button: {
        color: 'white'
    },
    image: {
        maxWidth: '100%'
    }
}));

const Spotify = () => {
    const classes = useStyles();

    return (
        <Container maxWidth="md">
            <Box pt={6}>
                <Grid container alignItems="center" justify="center" pt={2}>
                    <Grid item md={6} xs={12}>
                        <iframe src="https://open.spotify.com/embed/playlist/37i9dQZF1DXaZMjKCB7m2q" width="100%" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                    </Grid>
                    <Grid item md={6} xs={12} className={classes.textBox}>
                    <img
                                className={classes.image}
                                src='https://images.unsplash.com/photo-1600655584427-65c6ebfca603?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3302&q=80'
                            />
                        <Typography variant='h3' gutterBottom>Ingen fest utan dans</Typography>
                        <Typography gutterBottom>Integer pharetra, felis quis sodales laoreet, ligula lectus suscipit enim, id consequat dolor turpis vestibulum massa. Cras interdum nunc at efficitur faucibus.</Typography> 
                        <Button component='div' color='primary' variant='contained' >
                            <Link href='#' className={classes.button}>
                                <a className={classes.link}>Mer info</a>
                            </Link>
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Spotify;