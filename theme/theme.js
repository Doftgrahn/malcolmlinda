import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
    palette: {
        common: { white: '#e7e1dd', black: '#eeeee' },
        primary: {
            main: '#4f5747',
            lighter: 'rgb(150 155 144)',
        },
        secondary: {
            main: '#BC9087',
            lighter: 'rgb(236 216 212)',
        },
    },
    typography: {
        fontFamily: 'Old Standard TT',
        body1: { fontSize: '20px' },
        h1: { fontFamily: 'bromello' },
        h2: {
            fontFamily: 'bromello',
        },
        h3: {
            fontFamily: 'bromello',
        },
        h4: {
            fontFamily: 'basictitlefont',
        },
    },
    overrides: {
        MuiButton: {
            root: {
                textTransform: 'none',
                fontSize: '1rem',
                padding: '1rem 1.4rem',
                lineHeight: '1',
                color: '#fff',
            },
        },
    },
});
