import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';

import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { lorem } from '../utils/lorem';
import { Container } from '@material-ui/core';

const Accordion = withStyles({
    root: {
        boxShadow: 'none',
        '&:not(:last-child)': {
            borderBottom: 0,
        },
        '&:before': {
            display: 'none',
        },
        '&$expanded': {
            margin: 'auto',
        },
    },
    expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles((theme) => ({
    root: {
        display: 'flex',
        position: 'relative',
        padding: theme.spacing(4),
        marginBottom: -1,
        minHeight: 56,
        background: theme.palette.primary.main,
        color: '#fff',
        '&$expanded': {
            minHeight: 56,
        },
    },
    content: {
        '&$expanded': {
            margin: '12px 0',
        },
    },
    expanded: {},
}))(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
    root: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        background: theme.palette.primary.light,
    },
}))(MuiAccordionDetails);

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        marginBottom: theme.spacing(100),
    },
    text: {
        position: 'relative',
        display: 'inline-block',
        fontSize: theme.typography.pxToRem(20),
        fontWeight: theme.typography.fontWeightMedium,
        paddingBottom: '20px',
        '&::after': {
            display: 'block',
            content: '""',
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            width: '40px',
            borderBottom: '2px solid white',
        },
    },
    textWidth: {
        maxWidth: '1020px',
    },
}));

const faq = [
    { question: 'Dresscode', answer: lorem },
    { question: 'Barn', answer: lorem },
    { question: 'Presenter', answer: lorem },
    { question: 'Schema', answer: lorem },
    { question: 'Spex/tal', answer: lorem },
    { question: 'Hur tar man sig hit?', answer: lorem },
];

const Faq = () => {
    const classes = useStyles();

    const accordium = faq.map((item, key) => (
        <Accordion key={key}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Container maxWidth='lg' disableGutters>
                    <Typography className={classes.text}>
                        {item.question}
                    </Typography>
                </Container>
            </AccordionSummary>
            <AccordionDetails>
                <Container maxWidth='lg' disableGutters>
                    <Typography className={classes.textWidth}>
                        {item.answer}
                    </Typography>
                </Container>
            </AccordionDetails>
        </Accordion>
    ));

    return <div className={classes.root}>{accordium}</div>;
};

export default Faq;
