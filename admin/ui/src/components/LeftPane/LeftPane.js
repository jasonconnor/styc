import { Divider, Stack, Typography } from '@mui/material'
import { Fragment } from 'react'
import { Link, useLocation } from 'react-router-dom'
import './leftPane.scss'

const SectionLinks = [
  {
    Name: 'Game',
    Links: ['Abilities', 'Elements', 'Enemies']
  },
  {
    Name: 'System',
    Links: ['Accounts', 'Authorization', 'Articles', 'Scores', 'Stats', 'Tokens', 'Users']
  }
]

const LeftPane = () => {
  return (
    <Stack
      id='left-pane-container'
    >
      <Typography
        variant='h5'
        className='title'
      >
        STYC Admin Portal
      </Typography>

      <LinkLabel
        destination="/"
      >
        Home
      </LinkLabel>

      {SectionLinks.map(section => (<Fragment key={section.Name}>
        <SectionLabel>{section.Name}</SectionLabel>
        {section.Links.map(link => (<Fragment key={link}>
          <LinkLabel
            destination={`/${link}`}
          >
            {link}
          </LinkLabel>
        </Fragment>))}
      </Fragment>))}

      <SectionLabel />

      <LinkLabel
        destination='/Preferences'
        disableSaveVisit
      >
        Preferences
      </LinkLabel>
    </Stack>
  )
}

const LinkLabel = ({
  destination,
  children,
  disableSaveVisit
}) => {
  const location = useLocation()

  const isCurrentPage = location.pathname === destination

  const handleLinkClicked = () => {
    if (isCurrentPage) return

    if (!disableSaveVisit) {
      localStorage.setItem('lastVisitPage', destination)
    }
  }

  return (
    <Link
      to={destination}
      className={`page-link${isCurrentPage ? ' active-page' : ''}`}
      onClick={handleLinkClicked}
    >
      {children}
    </Link>
  )
}

const SectionLabel = ({ children }) => {
  return <Divider
    textAlign='left'
    className='section-label'
  >
    {children &&
      <Typography
        variant='h6'
      >
        {children}
      </Typography>
    }
  </Divider>
}

export default LeftPane