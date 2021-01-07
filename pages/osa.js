import { Box, Button, Container, Paper, TextField, Typography } from '@material-ui/core';
import axios from 'axios'
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
        width: 'auto'
    }
}));

const Osa = (props) => {
    const classes = useStyles();

    const { register, handleSubmit, errors } = useForm();

    const onSubmit = async (data) => {
        console.log('data', data);
        const test = await axios.post('api/sheets', data)
console.log('sheets',test)
    };

    return (
        <div className={classes.root}>
        <Container >
        <Box >
            <Paper>
                <Box
                    className={classes.wrapper}
                    display='flex'
                    flexDirection='column'>
                    <Typography align='center' gutterBottom variant='h2'>
                        Hoppas ni kan komma!
                    </Typography>
                    <TextField
                        inputRef={register({ required: true })}
                        error={!!errors.name}
                        helperText={
                            errors.name ? 'Du måste fylla i ett namn' : ''
                        }
                        name='name'
                        fullWidth
                        margin='normal'
                        label='namn'
                        variant='outlined'
                    />
                    <TextField
                        inputRef={register}
                        name='alllergies'
                        margin='normal'
                        fullWidth
                        label='allergier'
                        variant='outlined'
                    />
                    <TextField
                        inputRef={register}
                        name='specific'
                        margin='normal'
                        fullWidth
                        label='specifika önskemål'
                        variant='outlined'
                    />
                    <Box pt={1} width='100%'>
                        <Button
                            className={classes.button}
                            fullWidth
                            onClick={handleSubmit(onSubmit)}
                            type='submit'
                            variant='contained'
                            color='secondary'>
                            Klart jag kommer!
                        </Button>
                    </Box>
                </Box>
            </Paper>
        </Box>
        </Container>
        </div>
    );
};

export default Osa;
