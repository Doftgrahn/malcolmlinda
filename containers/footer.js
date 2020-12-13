import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    footer: {
      width: '100%',
      height: '60px',
      background: theme.palette.secondary.dark,
      marginTop: '60px'
    }
}));

const Footer = () => {
    const classes = useStyles();

    return (
    <div className={classes.footer}></div>)
};

export default Footer;
