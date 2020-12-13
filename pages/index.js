import Head from 'next/head';
import { makeStyles } from '@material-ui/core/styles';
import Header from '../containers/header';
import Hero from '../components/hero';
import Faq from '../containers/faq';
import Content from '../containers/content';
import Spotify from '../containers/spotify';
import Footer from '../containers/footer';

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
                <title>Linda & Malcolm</title>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Header />
            <Hero />
            <Content />
            <Faq />
            <Spotify />
            <Footer />
        </div>
    );
}
