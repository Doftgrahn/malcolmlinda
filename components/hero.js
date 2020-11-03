import { Box, Button, Typography } from '@material-ui/core';
import Head from 'next/head';
import { makeStyles } from '@material-ui/core/styles';

import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: '100vh',
        background: theme.palette.primary.main,
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        flexDirection: 'column',
        position: 'relative',
        zIndex: '0',
        color: '#fff',
    },
    containertest: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    image: {
        position: 'absolute',
        objectFit: 'cover',
        top: '0',
        bottom: '0',
        left: '0',
        width: '100%',
        height: '100%',
        zIndex: '-1',
        opacity: '0.6',
    },
}));

export default function Hero() {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <img
                className={classes.image}
                src='https://images.unsplash.com/photo-1600655584427-65c6ebfca603?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3302&q=80'
            />
            <Box className={classes.containertest}>
                <Typography variant='h6' gutterBottom>
                    1992-02-23
                </Typography>
                <Typography variant='h3' gutterBottom>
                    Malcolm och linda
                </Typography>
                <Link href='/osa'>
                    <a>OSA</a>
                </Link>
            </Box>
        </Box>
    );
}
