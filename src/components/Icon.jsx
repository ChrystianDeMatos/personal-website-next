import React from 'react'
import { makeStyles, Tooltip } from '@material-ui/core';

const useStyles = makeStyles({
  color: {
    filter: 'invert(0)'
  }
});

export default function Icon({ icon: iconName = 'unity', width = 64, tooltip }) {
  const classes = useStyles()

  return (
    <Tooltip title={tooltip} placement="top">
      <img src={`/icons/${iconName}.svg`} className={classes.color} width={width} height={width}/>
    </Tooltip>
  );
};
