import { Box, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';

const CountDown = () => {
    const [clock, setClock] = useState({
        days: null,
        hours: null,
        minutes: null,
        seconds: null,
    });

    const contdown = () => {
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        const countDownDate = new Date('Jul 22, 2021 15:37:25').getTime();
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
        }, 1000);

        return () => interval;
    }, []);
    return (
        <Box>
            <Typography variant='h4'>
                {' '}
                {clock.days} dagar {clock.hours} timmar {clock.minutes} minuter{' '}
                {clock.seconds} sekunder{' '}
            </Typography>
        </Box>
    );
};

export default CountDown;
