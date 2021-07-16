import { Box, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Countdown from './coundown';
import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: '80vh',
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
        opacity: '0.5',
    },
    link: {
        color: theme.palette.common.white,
        fontSize: '20px',
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'none',
        },
    },
}));

export default function Hero() {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <img className={classes.image} src='/images/bg1.jpg' />
            <Box className={classes.containertest}>
                <Typography variant='h5' gutterBottom>
                    24 Juli, 2021
                </Typography>
                <Typography variant='h1' align='center'>
                    Linda och Malcolm
                </Typography>
                <Button component='div' color='secondary' variant='contained'>
                    <Link href='#schema'>
                        <a className={classes.link}>Dagens program</a>
                    </Link>
                </Button>
            </Box>
        </Box>
    );
}
