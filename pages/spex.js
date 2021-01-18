import {
    Box,
    Button,
    Link,
    Container,
    Paper,
    TextField,
    Typography,
} from '@material-ui/core';
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        background: theme.palette.primary.main,
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        flexDirection: 'column',
        padding: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            padding: theme.spacing(10),
        },
    },
    wrapper: {
        padding: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            padding: theme.spacing(20),
        },
    },
    button: {
        color: '#fff',
        display: 'inlineBlock',
        width: 'auto',
        marginTop: '20px',
    },
    white: {
        color: '#fff',
    },
}));

const Spex = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Container>
                <Box>
                    <Paper>
                        <Box
                            className={classes.wrapper}
                            display='flex'
                            flexDirection='column'>
                            <Typography variant='h2' gutterBottom>
                                Tal & Spex
                            </Typography>
                            <Typography>
                                Ansvariga för middagen festen är vår toastmaster
                                och toastmadame Erik Jönsson och Hanna Molin.{' '}
                                <br />
                                Erik är en gammal barndomsvän till Malcolm som
                                för närvarande bor och jobbar i Oslo. Hanna är
                                som Linda från Östersund och de har känt
                                varandra sedan högstadiet.
                                <br />
                                <br />
                                Det är toastmastern/toastmadamen som kommer
                                hålla i själva middagen och planera in
                                eventuella tal och spex och dem ni skall vända
                                er till med frågor om detta. För att komma i
                                kontakt med dem mailar ni{' '}
                            </Typography>
                            <Button
                                component='div'
                                color='secondary'
                                className={classes.button}
                                variant='contained'>
                                <Link
                                    href='mailto:toastlindamalcolm@gmail.com'
                                    target='_blank'
                                    className={classes.white}
                                    mt={2}>
                                    Anmäl ditt spex eller tal här.
                                </Link>
                            </Button>
                        </Box>
                    </Paper>
                </Box>
            </Container>
        </div>
    );
};

export default Spex;
