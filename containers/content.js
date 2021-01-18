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
Kul att ni hittade hit!                </Typography>
                <Typography align='center'>
                    Välkomna till Hargantsson.se!<br/>

                    Sidan som ger Dig rykande het information om Jämtlands och möjligtvis Sveriges största happening 2021! Linda och Malcolms bröl-lopp!<br/>
                    Här kommer du hitta information som om hur, när, var Malcolm får sin Linda eller om Linda får sin Malcolm. 
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
                    Festligt
                </Typography>
                <Typography align='center'>
                Bröllopsfesten kommer hållas på Wikners i Persåsen. Där kommer vi bjuda på fördrink följt av bröllopsmiddag med jämtländska råvaror. Vi kommer bjuda på dryck till middagen och en bar kommer även finnas tillgänglig under kvällen där den som önskar kommer kunna köpa ytterligare förfriskningar.<br/>
Om du önskar att hålla tal/spex så ska detta anmälas till toastmaster Erik Jönsson och toastmadame Hanna Molin. Du når dem på mail: toastlindamalcolm@gmail.com<br/>

Efter middagen kommer fest att hållas i lokalerna. Baren kommer vara öppen till kl. 02:00.

                </Typography>
            </Box>

            {/* <Box pt={6}>
                <Grid container alignItems="center" justify="center" pt={2}>
                    <Grid item md={4} xs={12}>
                        <div className={classes.imageWrapper}>
                            <img
                                className={classes.image}
                                src='/images/rum.JPG'
                            />
                        </div>
                    </Grid>
                    <Grid item md={8} xs={12} className={classes.textBox}>
                        <Typography variant='h3' gutterBottom>Boende</Typography>
                        <Typography gutterBottom>Med utsikt över Storsjön och gröna ängar ligger Wikners i Persåsen. De är ett lite mindre familjeägt hotell och vandrarhem mitt bland Oviksfjällen. 
Du bokar själv boende genom att kontakta Wikners i Persåsen, därmed väljer du själv hur länge du önskar bo på anläggningen. Samtliga gäster kommer ha möjlighet att bo på anläggningen där bröllopsfesten kommer hållas. För att detta ska vara möjligt så måste stugorna fyllas utefter hur många bäddar som finns där. Därför uppmanar vi er att para ihop er med personer ni känner och kan tänka er bo med så alla bäddar kan fyllas.

Frukost ingår för boende i hotellrummen men kan också bokas för er som väljer annat boendealternativ än hotellrummen. För alla som önskar så planerar vi att äta gemensam frukost på söndag förmiddag innan många kommer åka hem. Önskar du att äta frukost med oss så är du varmt välkommen!

Wikners i Persåsen är ett hotell och vandrarhem som är anslutet till Svenska turistföreningen (STF) och medlemmar kan boka boende med rabatterade priser.
http://www.persasen.se/wordpress/boende/
</Typography>
                        <Button component='div' color='primary' variant='contained' >
                            <Link href='#' className={classes.button}>
                                <span className={classes.link}>Mer info</span>
                            </Link>
                        </Button>
                    </Grid>
                </Grid>
                <Grid container alignItems="center" justify="center" pt={2}>
                    <Grid item md={6} xs={12} className={classes.textBox}>
                        <Typography variant='h3' gutterBottom>kyrka</Typography>
                        <Typography gutterBottom>
                        Vigseln kommer ske i Myssjö kyrka med utsikt över Storsjön. Kyrkan är församlingskyrka i Oviken-Myssjö församling i Härnösands stift. Kyrkan byggdes troligen på 1300-talet. <br/>

Vigseln kommer äga rum klockan 14:00 lördag 24/7 och kommer hållas av prästen Thomas Karlsson. Thomas är hemmahörande i Onsala där Malcolm kommer ifrån och är vän till familjen.
                        </Typography> 
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
            </Box> */}

        </Container>
    );
};

export default Content;
