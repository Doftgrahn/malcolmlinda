import React from 'react';
import Link from 'next/link';
import { Box, Container, IconButton } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const links = [
    { to: '/', label: 'Hem' },
    { to: '/osa', label: 'OSA' },
    { to: '/spex', label: 'Tal/Spex' },
];

const useStyles = makeStyles((theme) => ({
    root: {},
    menuButton: {
        marginRight: theme.spacing(2),
        color: 'white',
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    drawer: {
        '& .MuiDrawer-paperAnchorRight': {
            width: '100%',
            fontSize: '1rem',
            [theme.breakpoints.up('sm')]: {
                width: '500px',
            },
        },
    },
    icon: {
        color: theme.palette.common.white,
    },
}));

export default function Header() {
    const classes = useStyles();
    const [state, setState] = React.useState(false);

    const toggleDrawer = (open) => (event) => {
        setState(open);
    };

    const navlinks = links.map((link, key) => (
        <Link key={key} href={link.to}>
            <ListItem button component={'a'} onClick={() => setState(false)}>
                {link.label}
            </ListItem>
        </Link>
    ));

    return (
        <AppBar elevation={0} color='transparent' position='absolute'>
            <Container maxWidth='lg'>
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        onClick={toggleDrawer(true)}
                        edge='end'
                        aria-label='menu'
                        className={classes.icon}>
                        <MenuIcon />
                    </IconButton>
                    <Drawer
                        className={classes.drawer}
                        anchor={'right'}
                        open={state}
                        onClose={toggleDrawer(false)}>
                        <Box p={3}>
                            <List
                                component='nav'
                                aria-label='main mailbox folders'>
                                {navlinks}
                            </List>
                        </Box>
                    </Drawer>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
