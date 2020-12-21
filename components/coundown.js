import { Box, Typography, CircularProgress } from '@material-ui/core';
import React, {  useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    counter: {
        background: theme.palette.secondary.light,
        minHeight: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: theme.palette.secondary.main,
        borderStyle: "solid",
        borderWidth: '15px',
        padding: '40px'
    },
    color: {
        color: theme.palette.secondary.main,
        marginBottom: theme.spacing(2)
    }
}));

const CountDown = ({days}) => {
    const classes = useStyles();

    const [clock, setClock] = useState({
        days: null,
        hours: null,
        minutes: null,
        seconds: null,
    });

   

    return (
        <div className={classes.counter}>
            <Typography align='center' variant='h2'>
                {days}
            </Typography>
            <Typography align='center' variant='h4'>Dagar kvar</Typography>
        </div>
    );
};

export default CountDown;



