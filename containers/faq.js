import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';

import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';
import { Link, Typography, Container } from '@material-ui/core';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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
        marginTop: theme.spacing(6),
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
    icon: {
        color: theme.palette.common.white,
    },
    header: {
        background: theme.palette.primary.lighter,
        paddingTop: '20px',
        paddingBottom: '20px',
    },
    link: {
        textDecoration: 'underline',
    },
}));

const faq = [
    {
        question: 'Schema',
        answer: <Typography>
14:00 <br/>
 Vigseln börjar i Myssjö kyrka. Det tar ca 25 minuter att köra till Myssjö kyrka om man utgår från Wikners i Persåsen. Om ni inte hittar Myssjö kyrka i gpsen så kan ni ställa den på Myssjö så kommer ni hitta 🙂 
<br/>
<br/>

15:00 <br/>

Vigseln beräknas ta ca en timme och kommer därmed vara färdig runt kl 15.
<br/>
<br/>

16:00 <br/>
Transporten från Wikners gå till själva festplatsen i Hovermo. Tre transporter kommer senare under kvällen finnas så ni kan transportera er tillbaka till Wikners. Ni väljer själva vilken av de tiderna ni väljer att åka. 
<br/>
<br/>

16:45
 <br/>
 Fördrinken börjar i Hovermo.
<br/>
<br/>

17:50 <br/>
 Förrätten serveras och bröllopsmiddagen startar.
 <br/>
Middagen beräknas vara färdig runt kl 22:45.
<br/>
<br/>

23:30/23:45 <br/>
 Första busstransporten går tillbaka till Wikners 
<br/>
<br/>

01:00 <br/>
 Andra busstransporten går till Wikners
<br/>
<br/>

03:00 <br/>
 Festen avslutas och sista transporten går till Wikners.
<br/>
<br/>

Tiderna för bussen är ungefärliga.
        </Typography>,
    },
    {
        question: 'Klädkod',
        answer: (
            <Typography>
                Klädkoden för bröllopet är satt till kostym. Detta innebär att
                herrar bär skjorta med kavaj av valfri färg, byxor kan men
                behöver inte vara i samma färg som kavajen. Damerna bär
                klänning, kjol eller byxor med kavaj.
            </Typography>
        ),
    },
    {
        question: 'Ceremoni',
        answer: (
            <Typography>
                Vigseln kommer ske i Myssjö kyrka med utsikt över Storsjön.
                Kyrkan är församlingskyrka i Oviken-Myssjö församling i
                Härnösands stift. Kyrkan byggdes troligen på 1300-talet.
                <br />
                Vigseln kommer äga rum klockan 14:00 lördag 24/7 och kommer
                hållas av prästen Thomas Karlsson. Thomas är hemmahörande i
                Onsala där Malcolm kommer ifrån och är vän till familjen.
            </Typography>
        ),
    },
    {
        question: 'Boende',
        answer: (
            <Typography>
                Med utsikt över Storsjön och gröna ängar ligger Wikners i
                Persåsen. De är ett lite mindre familjeägt hotell och vandrarhem
                mitt bland Oviksfjällen. Du bokar själv boende genom att
                kontakta Wikners i Persåsen, därmed väljer du själv hur länge du
                önskar bo på anläggningen. Samtliga gäster kommer ha möjlighet
                att bo på anläggningen där bröllopsfesten kommer hållas. För att
                detta ska vara möjligt så måste stugorna fyllas utefter hur
                många bäddar som finns där. Därför uppmanar vi er att para ihop
                er med personer ni känner och kan tänka er bo med så alla bäddar
                kan fyllas.
                <br />
                <br />
                Frukost ingår för boende i hotellrummen men kan också bokas för
                er som väljer annat boendealternativ än hotellrummen. För alla
                som önskar så planerar vi att äta gemensam frukost på söndag
                förmiddag innan många kommer åka hem. Önskar du att äta frukost
                med oss så är du varmt välkommen!
                <br />
                <br />
                Wikners i Persåsen är ett hotell och vandrarhem som är anslutet
                till Svenska turistföreningen (STF) och medlemmar kan boka
                boende med rabatterade priser. <br /> <br />
                Vi har reserverat hela anläggningen och därmed kan ni inte boka
                boende genom Wikners webbokning. Bokning görs istället genom att
                kontakta dem direkt på mail eller telefon. Var god att se
                kontaktuppgifter på Wikners hemsida.
                <br /> <br />
                <Link
                    href='http://www.persasen.se/wordpress/boende/'
                    color='inherit'
                    underline='always'>
                    Läs mer på Persåsen.se
                </Link>
            </Typography>
        ),
    },
    {
        question: 'Att göra i närheten',
        answer: (
            <>
                <Typography>
                    {' '}
                    I närheten av Wikners i Persåsen ligger jämtlandsfjällen med
                    många vandrings- och cykelleder längs fäbodar och
                    fiskevatten. Strax öster om anläggningen ligger Storsjön.
                    För mer idéer kring aktiviteter går det att läsa vidare på:
                </Typography>{' '}
                <Typography>
                    <Link
                        href='http://www.persasen.se/wordpress/upplevelser-mat/weekendpaket/ '
                        color='inherit'>
                        Persgårdens weekendpaket
                    </Link>
                </Typography>
                <br />
                <Typography>
                    <Link
                        href='https://visitostersund.se/'
                        color='inherit'
                        underline='always'>
                        Visit Östersund
                    </Link>
                </Typography>
                <Typography>
                    Helgen efter bröllopshelgen kommer det i Östersund vara den
                    stora festivalen Storsjöyran med livekonserter och andra
                    aktiviteter. Under veckan kommer det även vara massa musik
                    och olika aktiviteter kopplade till{' '}
                    <Link
                        href='https://yran.se/'
                        underline='always'
                        color='inherit'>
                        Yran
                    </Link>
                    .{' '}
                </Typography>
            </>
        ),
    },
    {
        question: 'Är barn välkomna?',
        answer: (
            <Typography>
                Bröllopet och framför allt festen är till för att fira vår stora
                dag tillsammans med vänner och familj. Denna kväll är därför för
                oss vuxna men skulle det finnas ammande spädbarn är de
                självklart välkomna.
            </Typography>
        ),
    },
    {
        question: 'Covid-19',
        answer: (
            <Typography>
                Vi följer folkhälsomyndighetens rekommendationer och vår
                förhoppning är att läget kommer ha lugnat sig till
                bröllopsdagen. Kontinuerliga uppdateringar kring bröllopet
                kommer meddelas på hemsidan, så ta för vana att kolla in här med
                jämna mellanrum.
            </Typography>
        ),
    },
    {
        question: 'Samåkning',
        answer: <Typography>Mer info kommer snart!</Typography>,
    },
    {
        question: 'Toastmaster och toastmadame',
        answer: (
            <Typography>
                Ansvariga för middagen festen är vår toastmaster och toastmadame
                Erik Jönsson och Hanna Molin. Erik är en gammal barndomsvän till
                Malcolm som för närvarande bor och jobbar i Oslo. Hanna är som
                Linda från Östersund och de har känt varandra sedan högstadiet.
                <br />
                <br />
                Det är toastmastern/toastmadamen som kommer hålla i själva
                middagen och planera in eventuella tal och spex och dem ni skall
                vända er till med frågor om detta. För att komma i kontakt med
                dem mailar ni toastlindamalcolm@gmail.com.
                <br />
                <br />
                <strong>Information om anmälan</strong> När ni tar kontakt
                inkludera gärna lite av följande information i e-posten:
                Ungefärlig tid på talet.
                <br /> Vi rekommenderar att du siktar på att hålla inom 3-5 min
                (men kan göra undantag) Relation till brudparet Din
                kontaktinformation (namn, mail och telefonnummer) Eventuell
                rekvisita (projektor, musik o.s.v.) <br /> När vi har mottagit
                din mail så kommer vi att ta kontakt med dig/er för att gå
                igenom ytterligare detaljer.
                <br />
                <br />
                <strong>
                    När bör du anmäla ditt tal? <br /> <br />
                    Februari:
                </strong>{' '}
                Om du inte vet alla detaljer runt talet / framträdandet redan
                nu, men vet att du önskar att framföra något - så skicka gärna
                en kort notis om detta till oss i samband med att du OSA:r till
                bröllopet i slutet av februari.
                <br /> <br />
                <strong>Maj:</strong> En mer utförlig anmälan önskas senast i
                början av maj för vi i toastmasterparet ska få ihop schemat för
                kvällen och säkra att du har allt du behöver för ditt tal.
                <Link
                    underline='always'
                    href='mailto:toastlindamalcolm@gmail.com'
                    color='inherit'
                    underline='always'>
                    toastlindamalcolm@gmail.com
                </Link>
            </Typography>
        ),
    },
    {
        question: 'Våra Kontaktuppgifter',
        answer: (
            <Typography>
                Vill ni kontakta Linda eller Malcolm görs detta på enklast
                enligt nedan:
                <br />
                <br />
                Linda Antonsson
                <br />
                <Link underline='always' href='+46706154313'>
                    0706-154313
                </Link>
                <br />
                <Link
                    underline='always'
                    href='mailto:linda_antonsson91@hotmail.com'>
                    linda_antonsson91@hotmail.com
                </Link>
                <br />
                <br />
                Malcolm Hargelius
                <br />
                <Link underline='always' href='tel:+460768114456'>
                    0768-114456
                </Link>
                <br />
                <Link
                    underline='always'
                    href='mailto:malcolm.hargelius@gmail.com'>
                    malcolm.hargelius@gmail.com
                </Link>
                <br />
                <br />
                Sturegatan 1<br />
                753 14 UPPSALA
            </Typography>
        ),
    },
];

const Faq = () => {
    const classes = useStyles();

    const accordium = faq.map((item, key) => (
        <Accordion key={key}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon className={classes.icon} />}>
                <Container maxWidth='md' disableGutters>
                    <Typography className={classes.text}>
                        {item.question}
                    </Typography>
                </Container>
            </AccordionSummary>
            <AccordionDetails>
                <Container maxWidth='md'>
                    <div className={classes.textWidth}>{item.answer}</div>
                </Container>
            </AccordionDetails>
        </Accordion>
    ));

    return (
        <div className={classes.root} pt={6}>
            {' '}
            <div className={classes.header} pt={2} pb={2}>
                <Container maxWidth='md'>
                    <Typography variant='h5' align='center'>
                        Lite bra att ha info
                    </Typography>
                </Container>
            </div>
            {accordium}
        </div>
    );
};

export default Faq;
