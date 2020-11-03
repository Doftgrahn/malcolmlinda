import { Box, Button, Paper, TextField, Typography } from '@material-ui/core';
import React from 'react';
import { useForm } from 'react-hook-form';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        background: theme.palette.primary.main,
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
    wrapper: {
        padding: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            padding: theme.spacing(20),
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
        <Box className={classes.root}>
            <Paper>
                <Box
                    className={classes.wrapper}
                    display='flex'
                    flexDirection='column'>
                    <Typography align='center' gutterBottom variant='h4'>
                        OSA här!
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
                            fullWidth
                            onClick={handleSubmit(onSubmit)}
                            type='submit'
                            variant='contained'
                            color='secondary'>
                            Jag skall komma
                        </Button>
                    </Box>
                </Box>
            </Paper>
        </Box>
    );
};

export default Osa;
