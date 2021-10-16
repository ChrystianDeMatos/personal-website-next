import React from 'react'
import Image from 'next/image'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { CardMedia, Grid, Paper } from '@material-ui/core';

import Icon from './Icon'

const useStyles = makeStyles((theme) => ({
  root: {
    display:'flex',
    flexDirection: 'column',
    minWidth: '100%'
},
  title: {
  fontSize: 14,
},
  pos: {
  marginBottom: 12,
},
  media: {
  height: 0,
  paddingTop: '56.25%', // 16:9
},
  iconsPaper: {
  backgroundColor: '#fff'
},
  cardActions: {
  marginTop: 'auto'
}
  
}));

const myLoader = ({ src, width, quality }) => {
  return `http://localhost:3000/${src}?w=${width}&q=${quality || 75}`
}

export default function PortfolioCard({ title, description, technologies, image, link }) {
  const classes = useStyles()
  return (
    <Card className={classes.root}>
      <Image
        loader={myLoader}
        src={image}
        width={500}
        height={285}
      />
      {/* <CardMedia
        className={classes.media}
        image={image}
        title={title}
      /> */}
      <CardContent>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        <Typography variant="body2" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="flex-end"
        >
          {
            link ?
              <Button size="small" href={link} rel='noopener noreferrer' target='_blank' >Link</Button> :
              <Button size="small" disabled>Link</Button>
          }
          <Paper className={classes.iconsPaper}>
            <Grid container alignItems="center">
              {
                technologies.map((technology, index) => (
                  <Icon
                    item
                    key={index}
                    icon={technology.icon}
                    tooltip={technology.tooltip}
                    width={40}
                  />
                ))
              }
            </Grid>
          </Paper>
        </Grid>
      </CardActions>
    </Card>

  )
}