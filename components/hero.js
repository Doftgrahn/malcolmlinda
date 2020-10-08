import { Box, Button, Typography } from '@material-ui/core';
import Head from 'next/head';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: '100vh',
        background: theme.palette.primary.main,
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        flexDirection: 'column',
    },
    containertest: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
}));

export default function Hero() {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Box className={classes.containertest}>
                <Typography variant='h6' gutterBottom>
                    1992-02-23
                </Typography>
                <Typography variant='h3' gutterBottom>
                    Malcolm och linda
                </Typography>
                <Button variant='contained' color='secondary'>
                    OSA
                </Button>
            </Box>
        </Box>
    );
}
