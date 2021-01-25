import {
    Box,
    Button,
    Container,
    Paper,
    TextField,
    Typography,
    RadioGroup,
    FormControlLabel,
    Radio,
} from '@material-ui/core';
import axios from 'axios';
import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        background: theme.palette.primary.main,
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        flexDirection: 'column',
        [theme.breakpoints.up('sm')]: {
            padding: theme.spacing(10),
        },
    },
    wrapper: {
        padding: theme.spacing(2),
        paddingTop: theme.spacing(4),
        marginTop: theme.spacing(8),
        [theme.breakpoints.up('sm')]: {
            padding: theme.spacing(8),
            marginTop: theme.spacing(0),
        },
    },
    button: {
        color: '#fff',
        display: 'inlineBlock',
        width: 'auto',
    },
}));

const defaultValues = {
    allergies: '',
    isAttending: '1',
    name: '',
    specific: '',
    drinkingPreferences: '',
    withAlcohol: null,
};

const Osa = () => {
    const classes = useStyles();
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const { register, handleSubmit, errors, control, reset } = useForm({
        defaultValues,
    });

    const onSubmit = async (data) => {
        setIsLoading(true);
        try {
            await axios.post('/api/sheets', data);
        } catch (e) {
            console.error(e);
        } finally {
            setIsLoading(false);
            setHasSubmitted(true);
        }
        reset(defaultValues);
    };

    return (
        <div className={classes.root}>
            <Container maxWidth='md'>
                <Box mb={6}>
                    <Paper>
                        <Box
                            className={classes.wrapper}
                            display='flex'
                            flexDirection='column'>
                            <Typography
                                align='center'
                                gutterBottom
                                variant='h2'>
                                Meddela om ni kan komma!
                            </Typography>

                            <TextField
                                inputRef={register({ required: true })}
                                error={!!errors.name}
                                helperText={
                                    errors.name
                                        ? 'Du måste fylla i ett namn'
                                        : ''
                                }
                                name='name'
                                fullWidth
                                margin='normal'
                                label='namn'
                                variant='outlined'
                            />
                            <Controller
                                inputRef={register({ required: true })}
                                name='isAttending'
                                control={control}
                                as={
                                    <RadioGroup aria-label='attending'>
                                        <FormControlLabel
                                            value='1'
                                            control={<Radio />}
                                            label='Självklart kommer jag!'
                                        />
                                        <FormControlLabel
                                            value='0'
                                            control={<Radio />}
                                            label='Jag kan tyvärr inte!'
                                        />
                                    </RadioGroup>
                                }
                            />
                            <TextField
                                inputRef={register}
                                name='alllergies'
                                margin='normal'
                                fullWidth
                                label='Allergier?'
                                variant='outlined'
                            />
                            <TextField
                                inputRef={register}
                                name='specific'
                                margin='normal'
                                fullWidth
                                label='Specifika önskemål'
                                variant='outlined'
                            />
                            <TextField
                                inputRef={register}
                                name='drinkingPreferences'
                                margin='normal'
                                fullWidth
                                label='Dryckes preferenser'
                                variant='outlined'
                            />
                            <Controller
                                name='withAlcohol'
                                control={control}
                                as={
                                    <RadioGroup aria-label='withAlcohol'>
                                        <FormControlLabel
                                            value='1'
                                            control={<Radio />}
                                            label='Med alkohol'
                                        />
                                        <FormControlLabel
                                            value='0'
                                            control={<Radio />}
                                            label='Utan alkohol!'
                                        />
                                    </RadioGroup>
                                }
                            />

                            <Box pt={1} width='100%' textAlign='center'>
                                {hasSubmitted ? (
                                    <Typography gutterBottom>
                                        {isLoading
                                            ? 'Laddar'
                                            : 'Du har nu svarat, behöver ändra något hör av dig!'}
                                    </Typography>
                                ) : (
                                    <Button
                                        className={classes.button}
                                        fullWidth
                                        onClick={handleSubmit(onSubmit)}
                                        type='submit'
                                        variant='contained'
                                        color='secondary'>
                                        Svara
                                    </Button>
                                )}
                            </Box>
                        </Box>
                    </Paper>
                </Box>
            </Container>
        </div>
    );
};

export default Osa;
