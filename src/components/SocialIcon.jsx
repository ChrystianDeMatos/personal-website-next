import { Tooltip } from '@material-ui/core'
import React from 'react'

export default function SocialIcon({ tooltip, link, iconComponent }) {
  return (
    <Tooltip title={tooltip}>
      <a
        target='_blank'
        rel="noopener noreferrer"
        href={link}
      >
        {iconComponent}
      </a>
    </Tooltip>
  )
}
