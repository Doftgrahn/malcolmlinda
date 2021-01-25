import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@material-ui/core/styles';
import theme from '../theme/theme';

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang='en'>
                <Head>
                    {/* PWA primary color */}
                    <meta
                        name='theme-color'
                        content={theme.palette.primary.main}
                    />
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
                        href='images/favicon/apple-touch-icon.png'
                    />
                    <link
                        rel='icon'
                        type='image/png'
                        sizes='32x32'
                        href='images/favicon/favicon-32x32.png'
                    />
                    <link
                        rel='icon'
                        type='image/png'
                        sizes='16x16'
                        href='images/favicon/favicon-16x16.png'
                    />
                    <link
                        rel='manifest'
                        href='images/favicon/site.webmanifest'
                    />
                    <meta name='msapplication-TileColor' content='#da532c' />
                    <meta name='theme-color' content='#ffffff' />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

MyDocument.getInitialProps = async (ctx) => {
    const sheets = new ServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    ctx.renderPage = () =>
        originalRenderPage({
            enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
        });

    const initialProps = await Document.getInitialProps(ctx);

    return {
        ...initialProps,
        // Styles fragment is rendered after the app and page rendering finish.
        styles: [
            ...React.Children.toArray(initialProps.styles),
            sheets.getStyleElement(),
        ],
    };
};
