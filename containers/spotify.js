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
        maxWidth: '100%',
        marginBottom: '20px'
    }
}));

const Spotify = () => {
    const classes = useStyles();

    return (
        <Container maxWidth="md">
            <Box pt={6}>
                <Grid container alignItems="center" justify="center" pt={2}>
                    <Grid item md={6} xs={12}>
                        <iframe src="https://open.spotify.com/embed/playlist/55zj6SGFTof5Q8puJvBm7g" width="100%" height="450" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                    </Grid>
                    <Grid item md={6} xs={12} className={classes.textBox}>
                        <img
                            className={classes.image}
                            src='./images/malcom-linda.jpeg'
                        />
                        <Typography variant='h3' gutterBottom>Ingen fest utan dans</Typography>
                        <Typography gutterBottom>För att göra bröllopsfesten ännu roligare och peppigare vill vi såklart att det ska spelas massa bra och härlig musik. Därför önskar vi att alla lägger in några låtar som ni själva inte kan sitta still till i denna spellista.</Typography> 
                        <Button component='div' color='primary' variant='contained' >
                            <Link href='https://open.spotify.com/playlist/55zj6SGFTof5Q8puJvBm7g?si=9ddsUwZgS9izEwpVUy7ayA' className={classes.button}>
                                <span className={classes.link}>Lägg till din bästa danslåt!</span>
                            </Link>
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
};

export default Spotify;