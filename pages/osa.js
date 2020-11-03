import { Box, Button, Paper, TextField, Typography } from '@material-ui/core';
import React from 'react';
import { useForm } from 'react-hook-form';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        flexDirection: 'column',
        padding: theme.spacing(0),
        [theme.breakpoints.up('sm')]: {
            padding: theme.spacing(60),
        },
    },
}));

const Osa = (props) => {
    const classes = useStyles();

    const { register, handleSubmit, errors } = useForm();

    const onSubmit = (data) => {
        console.log('data', data);
    };

    return (
        <Paper className={classes.root}>
            <Box display='flex' flexDirection='column' p={2}>
                <Typography align='left' gutterBottom variant='h4'>
                    OSA här!
                </Typography>
                <TextField
                    inputRef={register({ required: true })}
                    error={!!errors.name}
                    helperText={errors.name ? 'Du måste fylla i ett namn' : ''}
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
                <Button
                    onClick={handleSubmit(onSubmit)}
                    type='submit'
                    variant='contained'
                    color='secondary'>
                    Jag skall komma
                </Button>
            </Box>
        </Paper>
    );
};

export default Osa;
