import { createMuiTheme } from '@material-ui/core/styles';

export default createMuiTheme({
    palette: {
        common: { white: '#e7e1dd', black: '#eeeee' },
        primary: {
            main: '#899786',
        },
        secondary: {
            main: '#BC9087',
        },
    },
    typography: {
        fontFamily: 'Old Standard TT',
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
});
