import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar';
import { AppBar, Button, Typography } from '@material-ui/core';

import { Link as ScrollLink, animateScroll } from "react-scroll";

import Link from 'next/link'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: theme.palette.primary.contrastText,
    textDecoration: 'none',
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <AppBar position="fixed">
      <Toolbar className={classes.root}>
        <Link href="/" passHref>
          <a className={classes.title}>
            <Typography variant="h6">
              {window.matchMedia("all and (max-width: 767px)").matches ? 'Chrystian M.' : 'Chrystian de Matos'}
              {/* Chrystian de Matos */}
            </Typography>
          </a>
        </Link>

        <ScrollLink to='about' smooth={true} offset={-80}>
          <Button className={classes.menuButton}>Sobre</Button>
        </ScrollLink>

        <ScrollLink to='portfolio' smooth={true} offset={-80}>
          <Button className={classes.menuButton} edge="end">Portfólio</Button>
        </ScrollLink>

        {/* <Link href="/sobre">
          <Button className={classes.menuButton}>Sobre</Button>
        </Link>

        <Link href="/portfolio">
          <Button className={classes.menuButton} edge="end">Portfólio</Button>
        </Link> */}
      </Toolbar>
    </AppBar>
  )
}
