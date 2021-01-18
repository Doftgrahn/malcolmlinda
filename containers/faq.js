import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';

import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';


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
        marginBottom: -1,
        height: 80,
        background: theme.palette.primary.main,
        color: '#fff',
        '&$expanded': {
            height: 80,
        },
        '&:hover': {
            background: theme.palette.primary.dark,
        },
    },
    content: {
        '&$expanded': {
           //margin: '12px 0',
        },
    },
    expanded: {},
}))(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
        background: theme.palette.primary.lighter,
    },
}))(MuiAccordionDetails);

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        marginTop: theme.spacing(6)
    },
    text: {
        position: 'relative',
        display: 'inline-block',
        fontSize: theme.typography.pxToRem(20),
        fontWeight: theme.typography.fontWeightMedium,
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
        color: '#fff',
    },
    textWidth: {
        maxWidth: '1020px',
        color: theme.palette.primary.darkest,
    },
    icon : {
        color:theme.palette.common.white
    }
}));

const faq = [
    { 
        question: 'Toastmaster och toastmadame', 
        answer: <p>
        Ansvariga för middagen festen är vår toastmaster och toastmadame Erik Jönsson och Hanna Molin. <br/>
        Erik är en gammal barndomsvän till Malcolm som för närvarande bor och jobbar i Oslo. Hanna är som Linda från Östersund och de har känt varandra sedan högstadiet.
        <br/>
        <br/>
        Det är toastmastern/toastmadamen som kommer hålla i själva middagen och planera in eventuella tal och spex och dem ni skall vända er till med frågor om detta. För att komma i kontakt med dem mailar ni <Link href="mailto:toastlindamalcolm@gmail.com" color="inherit" underline='always'>toastlindamalcolm@gmail.com</Link></p> 
    },
    { 
        question: 'Barn', 
        answer: <p>Bröllopet och framför allt festen är till för att fira vår stora dag tillsammans med vänner och familj. Denna kväll är därför för oss vuxna men skulle det finnas ammande spädbarn är de självklart välkomna.</p> 
    },
    {
        question: 'Klädkod',
        answer: <p>Klädkoden för bröllopet är satt till kostym. Detta innebär att herrar bär skjorta med kavaj av valfri färg, byxor kan men behöver inte vara i samma färg som kavajen. Damerna bär klänning, kjol eller byxor med kavaj.</p>
    },{
        question: 'Kyrka',
        answer: <p>Vigseln kommer ske i Myssjö kyrka med utsikt över Storsjön. Kyrkan är församlingskyrka i Oviken-Myssjö församling i Härnösands stift. Kyrkan byggdes troligen på 1300-talet.<br/>
        Vigseln kommer äga rum klockan 14:00 lördag 24/7 och kommer hållas av prästen Thomas Karlsson. Thomas är hemmahörande i Onsala där Malcolm kommer ifrån och är vän till familjen.</p>
    },
    { 
        question: 'Boende', 
        answer: <p>
            Med utsikt över Storsjön och gröna ängar ligger Wikners i Persåsen. De är ett lite mindre familjeägt hotell och vandrarhem mitt bland Oviksfjällen. 
            Du bokar själv boende genom att kontakta Wikners i Persåsen, därmed väljer du själv hur länge du önskar bo på anläggningen. Samtliga gäster kommer ha möjlighet att bo på anläggningen där bröllopsfesten kommer hållas. För att detta ska vara möjligt så måste stugorna fyllas utefter hur många bäddar som finns där. Därför uppmanar vi er att para ihop er med personer ni känner och kan tänka er bo med så alla bäddar kan fyllas.<br/><br/>

            Frukost ingår för boende i hotellrummen men kan också bokas för er som väljer annat boendealternativ än hotellrummen. För alla som önskar så planerar vi att äta gemensam frukost på söndag förmiddag innan många kommer åka hem. Önskar du att äta frukost med oss så är du varmt välkommen!<br/><br/>

            Wikners i Persåsen är ett hotell och vandrarhem som är anslutet till Svenska turistföreningen (STF) och medlemmar kan boka boende med rabatterade priser.
            <Link href="http://www.persasen.se/wordpress/boende/" color="inherit" underline='always'>Läs mer på Persåsen.se</Link>
        </p>
    },
    { 
        question: 'Att göra i närheten', 
        answer: <> 
            <p> I närheten av Wikners i Persåsen ligger jämtlandsfjällen med många vandrings- och cykelleder  längs fäbodar och fiskevatten. Strax öster om anläggningen ligger Storsjön. För mer idéer kring aktiviteter går det att läsa vidare på:</p>

            <Link href="http://www.persasen.se/wordpress/upplevelser-mat/weekendpaket/ " color="inherit">Persgårdens weekendpaket</Link><br/>
            <Link href="https://visitostersund.se/" color="inherit" underline='always'>Visit Östersund</Link>
        
            <p>Helgen efter bröllopshelgen kommer det i Östersund vara den stora festivalen Storsjöyran med livekonserter och andra aktiviteter. Under veckan kommer det även vara massa musik och olika aktiviteter kopplade till <Link href="https://yran.se/" underline='always' color='inherit'>Yran</Link>. </p>
        </> 
    },
    { 
        question: 'Covid-19', 
        answer: <p>Vi följer folkhälsomyndighetens rekommendationer och vår förhoppning är att läget kommer ha lugnat sig till bröllopsdagen. Kontinuerliga uppdateringar kring bröllopet kommer meddelas på hemsidan, så ta förvarna att kolla in här med jämna mellanrum.</p> 
    },
    { 
        question: 'Kontakt uppgifter till oss', 
        answer: <p>Vill ni kontakta Linda eller Malcolm görs detta på enklast enligt nedan:<br/>
        <br/>
        Linda Antonsson<br/>
        070 615 43 13<br/>
        linda_antonsson91@hotmail.com<br/>
        <br/>
        Malcolm Hargelius<br/>
        076 811 44 56<br/>
        malcolm.hargelius@gmail.com<br/>
        <br/>
        Sturegatan 1<br/>
        753 14 UPPSALA
        </p> 
    }
];

const Faq = () => {
    const classes = useStyles();

    const accordium = faq.map((item, key) => (
        <Accordion key={key}>
            <AccordionSummary expandIcon={<ExpandMoreIcon className={classes.icon} />}>
                <Container maxWidth='md' disableGutters>
                    <Typography className={classes.text}>
                        {item.question}
                    </Typography>
                </Container>
            </AccordionSummary>
            <AccordionDetails>
                <Container maxWidth='md'>
                    <Typography className={classes.textWidth}>
                        {item.answer}
                    </Typography>
                </Container>
            </AccordionDetails>
        </Accordion>
    ));

    return <div className={classes.root} pt={6}> <Typography variant='h3' align='center' pt={6} gutterBottom>Bra att veta</Typography>{accordium}</div>;
};

export default Faq;
