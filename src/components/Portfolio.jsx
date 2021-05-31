import React, { useEffect, useState } from 'react'
import PortfolioCard from './PortfolioCard'
import { Grid } from '@material-ui/core';

export default function Portfolio() {

  const [projects, setProjects] = useState([])

  useEffect(() => {
    async function fetchData() {
      fetch('/api/portfolio')
        .then(async (response) => {
          const resp = await response.json()
          console.log(resp)
          setProjects(resp)
        })
    }
    fetchData()
  }, [])

  // <Grid container spacing={2} >
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
