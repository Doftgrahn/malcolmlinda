import { Box, Grid, Typography } from '@material-ui/core';
import React from 'react';

import Countdown from '../components/coundown';

const Content = () => {
    return (
        <Box p={2}>
            <Box pt={2}>
                <Typography align='center' variant='h4' gutterBottom>
                    Type Something
                </Typography>
                <Typography align='center'>
                    {' '}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Maecenas fringilla elementum hendrerit. Vestibulum ante
                    ipsum primis in faucibus orci luctus et ultrices posuere
                    cubilia curae; Sed id rhoncus arcu. Nullam magna nibh,
                    imperdiet nec velit eu, tincidunt gravida est. Maecenas
                    tincidunt, metus et cursus aliquam, arcu urna iaculis enim,
                    ac posuere tellus quam eu tortor. Proin mollis pulvinar
                    ligula et mattis. Vivamus sed odio urna. Aliquam in metus
                    porttitor, varius mauris sed, auctor augue. Mauris molestie
                    tellus eget ipsum volutpat, at malesuada lectus pharetra.
                    Praesent dictum tortor eu gravida pulvinar. Vivamus ac nisl
                    ac mi sodales venenatis.
                </Typography>
            </Box>

            {/* Första bilder här! */}
            <Grid container>
                <Grid item md={6} xs={12}>
                    <Typography align='center'>Bild 1 här</Typography>
                </Grid>
                <Grid item md={6} xs={12}>
                    <Countdown />
                </Grid>
            </Grid>

            <Box pt={4}>
                <Typography variant='h4' align='center'>
                    Type Something{' '}
                </Typography>
                <Typography align='center'>
                    Integer pharetra, felis quis sodales laoreet, ligula lectus
                    suscipit enim, id consequat dolor turpis vestibulum massa.
                    Cras interdum nunc at efficitur faucibus. Phasellus velit
                    purus, varius sit amet metus a, tristique egestas tellus.
                    Morbi magna mi, feugiat at quam eget, rutrum placerat metus.
                    Etiam ut sem vitae nisl egestas consequat. Suspendisse
                    vehicula, enim at feugiat mattis, ligula quam tincidunt
                    orci, id varius elit sapien quis lorem. Aenean at nulla
                    consectetur, cursus neque non, euismod risus. Phasellus
                    feugiat justo a lacus imperdiet, ut faucibus metus
                    fermentum. Sed vel viverra ligula, varius suscipit sem. Sed
                    sit amet rutrum lectus, facilisis porttitor arcu.
                    Suspendisse sed dictum magna. Sed vestibulum dapibus mauris.
                    Donec volutpat ex a fermentum accumsan.
                </Typography>
            </Box>

            <Box pt={2}>
                <Grid container>
                    <Grid item md={6} xs={12}>
                        <Typography align='center'>Boka Boende!</Typography>
                    </Grid>{' '}
                    <Grid item md={6} xs={12}>
                        <Typography align='center'>Text här</Typography>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <Typography align='center'>Text här</Typography>
                    </Grid>
                    <Grid item md={6} xs={12}>
                        <Typography align='center'>Bild 2 här</Typography>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default Content;
