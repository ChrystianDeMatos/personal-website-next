import React from 'react'
import { Box, Container, Grid, makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  '@keyframes gradient': {
    '0%': {
      backgroundPosition: '0% 50%'
    },
    '50%': {
      backgroundPosition: '100% 50%'
    },
    '100%': {
      backgroundPosition: '0% 50%'
    }
  },
  footerBackground: {
    color: theme.palette.primary.contrastText,
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    boxShadow: theme.shadows[2],
    '& a': {
      color: '#e73d7d',
      textDecoration: 'none',
    },

    background: 'linear-gradient(-45deg, #c7c7c7, #202020)',
    backgroundSize: '400% 400%',
    animation: '$gradient 15s ease infinite',
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <Box mt={2} className={classes.footerBackground}>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant='h5' className={classes.header}>
              Contato
            </Typography>
            <ul className={classes.list}>
              <Typography variant='body2' component='li'>
                Email:{' '}
                <span className={classes.lightText}>
                  <a href='mailto:chrystiandematos@gmail.com'>
                    chrystiandematos@gmail.com
                  </a>
                </span>
              </Typography>
            </ul>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Container className={classes.footerBottom}>
              <Typography variant='body2' className={classes.creditsText}>
                © 2021-{new Date().getFullYear()} Chrystian de Matos
              </Typography>
              <Typography variant='body2'>
                <a
                  href='https://github.com/CristianDrift/personal-website'
                  rel='noopener noreferrer'
                  target='_blank'
                >
                  Website Code
            </a>
              </Typography>
            </Container>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}
