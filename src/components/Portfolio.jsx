import React, { useEffect, useState } from 'react'
import PortfolioCard from './PortfolioCard'
import { Grid } from '@material-ui/core';

export default function Portfolio({ projects }) {
  return (
    <Grid container spacing={2} >
      {
        projects.map((project) =>
          <Grid container alignItems="stretch" key={project.title} item xs={12} sm={4}>
            <PortfolioCard
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              image={project.image}
              link={project.link}
            />
          </Grid>)
      }
    </Grid>
  )
}
