import { ReactQueryDevtools } from 'react-query-devtools';
import { Html, Head, Main, NextScript } from 'next/document';

import { QueryCache, ReactQueryCacheProvider } from 'react-query';

const queryCache = new QueryCache();

import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../theme/theme';
import { useEffect } from 'react';

import Header from '../containers/header';

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    return (
        <ReactQueryCacheProvider queryCache={queryCache}>
            <Head>
                {/* PWA primary color */}
                <meta name='theme-color' content={theme.palette.primary.main} />
                <title>Linda och Malcom, 24 Juli 2021</title>
                <meta
                    name='description'
                    content='Här kommer du hitta information som om hur, när, var Malcolm får sin Linda eller om Linda får sin Malcolm.'
                />
                <meta
                    property='og:title'
                    content='Linda och Malcom, 24 Juli 2021'
                />
                <meta
                    property='og:description'
                    content='Här kommer du hitta information som om hur, när, var Malcolm får sin Linda eller om Linda får sin Malcolm.'
                />
                <meta property='og:image' content='/images/share.png' />
                <meta
                    property='og:url'
                    content='https://www.hargantsson2021.se'
                />

                <link rel='stylesheet' href='/fonts/style.css' />
                <link rel='preconnect' href='https://fonts.gstatic.com' />
                <link
                    href='https://fonts.googleapis.com/css2?family=Old+Standard+TT:ital,wght@0,400;0,700;1,400&display=swap'
                    rel='stylesheet'
                />

                <link
                    rel='apple-touch-icon'
                    sizes='180x180'
                    href='/images/favicon/apple-touch-icon.png'
                />
                <link
                    rel='icon'
                    type='image/png'
                    sizes='32x32'
                    href='/images/favicon/favicon-32x32.png'
                />
                <link
                    rel='icon'
                    type='image/png'
                    sizes='16x16'
                    href='/images/favicon/favicon-16x16.png'
                />
                <link rel='manifest' href='/images/favicon/site.webmanifest' />
                <meta name='msapplication-TileColor' content='#da532c' />
                <meta name='theme-color' content='#ffffff' />
            </Head>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Header />
                <Component {...pageProps} />
                <ReactQueryDevtools initialIsOpen />
            </ThemeProvider>
        </ReactQueryCacheProvider>
    );
}

export default MyApp;
