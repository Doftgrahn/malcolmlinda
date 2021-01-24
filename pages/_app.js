import { ReactQueryDevtools } from 'react-query-devtools';
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
