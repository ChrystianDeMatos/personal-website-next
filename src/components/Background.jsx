import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

import { Box } from '@material-ui/core';

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
  profileBackground: {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100vw',
    height: '100vh',
    maxWidth: '100%', // To fix scrollbar
    zIndex: '-10',
    background: 'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)',
    backgroundSize: '400% 400%',
    animation: '$gradient 15s ease infinite',
  },
}));

export default function Background() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Box className={classes.profileBackground} />
    </React.Fragment>
  )
}
