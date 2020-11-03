import { Container } from '@material-ui/core';
import Head from 'next/head';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../containers/header';
import Hero from '../components/hero';
import Faq from '../containers/faq';

const useStyles = makeStyles({
    root: {
        height: '100vh',
    },
});

export default function Home() {
    const classes = useStyles();

    return (
        <div>
            <Head>
                <title>Malcolm linda</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Header />
            <Hero />
            <Faq />
        </div>
    );
}
