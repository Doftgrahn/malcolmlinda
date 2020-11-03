import { Box, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Countdown from './coundown';
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
    link: {
        color: theme.palette.common.white,
        fontSize: theme.spacing(8),
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
        },
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
                <Countdown />
                <Typography variant='h3' gutterBottom>
                    Malcolm och linda
                </Typography>
                <Button component='div' color='primary' variant='outlined'>
                    <Link href='/osa'>
                        <a className={classes.link}>OSA</a>
                    </Link>
                </Button>
            </Box>
        </Box>
    );
}
