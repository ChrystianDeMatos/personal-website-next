import React from 'react'
import Image from 'next/image'
import { makeStyles } from '@material-ui/core/styles';

import Portfolio from '../src/components/Portfolio'
import { Box, Grid, Paper, Typography } from '@material-ui/core';

import Background from '../src/components/Background';
import SocialIcon from '../src/components/SocialIcon'

import { Email, GitHub, LinkedIn } from '@material-ui/icons';
import SEO from '../src/components/SEO';

const useStyles = makeStyles((theme) => ({
  root: {
    alignItems: 'center'
  },
  profilePictureImage: {
    boxShadow: '-1px 19px 80px -20px rgba(0,0,0,0.75)',
    height: '200px',
    width: '200px',
    overflow: 'visible',
    borderRadius: '50%',
    border: `4px solid ${theme.palette.primary.main}`,
    animation: '$rotate 1s ease',
  },
  '@keyframes rotate': {
    '0%': {
      opacity: '0',
      transformOrigin: '50% 50%',
      transform: 'scale(2, 2)',
      filter: 'blur(2px)',
    },
    '100%': {
      opacity: '1',
      transformOrigin: '50% 50%',
      transform: 'scale(1, 1)',
      filter: 'blur(0px)',
    }
  },
  profileTitle: {
    color: theme.palette.primary.main,
    marginTop: '10px'
  },
  profileComponent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',

    '& div': { // for fix image component of next
      overflow: 'visible !important',
    }
  },
  profileText: {
  },
  portfolioTitle: {
    color: theme.palette.primary.main,
  },
  socialIcon: {
    color: theme.palette.primary.main,
  }
}));

function Home({ projects }) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <SEO siteTitle="Home" />
      <Box className={classes.profileComponent}>

        <Image
          className={classes.profilePictureImage}
          src="/profilePicture.png"
          alt='Foto de perfil'
          width={200}
          height={200}
          quality={100}
          priority={true}
          id="about"
        />

        <Typography className={classes.profileTitle} variant="h4" component="h4" >Chrystian de Matos</Typography>

        <Grid justify="center" container spacing={2}>
          <Grid item>
            <SocialIcon
              iconComponent={<Email className={classes.socialIcon} fontSize="large" />}
              link='mailto:chrystiandematos@gmail.com'
              tooltip='chrystiandematos@gmail.com'
            />
          </Grid>
          <Grid item>
            <SocialIcon
              iconComponent={<GitHub className={classes.socialIcon} fontSize="large" />}
              link='https://github.com/chrystiandematos'
              tooltip='ChrystianDeMatos'
            />
          </Grid>
          <Grid item>
            <SocialIcon
              iconComponent={<LinkedIn className={classes.socialIcon} fontSize="large" />}
              link='https://www.linkedin.com/in/chrystian-de-matos/'
              tooltip='Chrystian de Matos'
            />
          </Grid>

        </Grid>
        <Box mx={[0, 24, 36, 48]}>
          <Paper className={classes.profileText} elevation={3}>
            <Box m={2}>
              <Typography>Programador e desenvolvedor de jogos, apaixonado por tecnologia, atualmente fazendo projetos de programação em grupos e individuais. Buscando experiência na área, visto que meu sonho é trabalhar na industria do desenvolvimento de software.</Typography>
            </Box>
          </Paper>
        </Box>
        <Background />
      </Box>

      <Typography className={classes.portfolioTitle} id="portfolio" variant="h5" component="h5">Portfólio</Typography>

      <Portfolio projects={projects}/>

    </React.Fragment>

  )
}

export async function getStaticProps() {
  const res = await fetch('https://chrystian.page/api/portfolio')
  const projects = await res.json()

  return {
    props: {
      projects,
    },
  }
}

export default Home