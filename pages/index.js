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
        minHeight: '100vh',
    },
});

export default function Home({ days }) {
    const classes = useStyles();
    return (
        <div>
            <Head>
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Header />
            <Hero />
            <Content days={days} />
            <Faq />
            <Spotify />
            <Footer />
        </div>
    );
}

export async function getStaticProps() {
    const contdown = () => {
        var now = new Date().getTime();

        // Find the distance between now and the count down date
        const countDownDate = new Date('Jul 24, 2021 15:37:25').getTime();
        var distance = countDownDate - now;
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        return { days, hours, minutes, seconds };
    };

    const date = contdown();

    const days = date.days;
    return { props: { days } };
}
