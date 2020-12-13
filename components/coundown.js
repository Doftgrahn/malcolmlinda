import { Box, Typography, CircularProgress } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
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

const CountDown = () => {
    const classes = useStyles();

    const [clock, setClock] = useState({
        days: null,
        hours: null,
        minutes: null,
        seconds: null,
    });

    const contdown = () => {
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        const countDownDate = new Date('Jul 24, 2021 15:37:25').getTime();
        var distance = countDownDate - now;
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        return { days, hours, minutes, seconds };
    };

    useEffect(() => {
        const interval = setInterval(() => {
            const test = contdown();
            setClock(test);
        }, 10000);

        return () => interval;
    }, []);

    return (
        <div className={classes.counter}>
        
        { !clock?.days ? <CircularProgress disableShrink className={classes.color} /> : '' }

            <Typography align='center' variant='h2'>
                {clock.days}
            </Typography>
            
            <Typography align='center' variant='h4'>Dagar kvar</Typography>
        </div>
    );
};

export default CountDown;
