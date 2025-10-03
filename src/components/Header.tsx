import React from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Avatar,
  Box,
  Button,
  Container,
} from '@mui/material'
import { styled } from '@mui/material/styles'

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: 'linear-gradient(45deg, #1976d2 30%, #42a5f5 90%)',
  marginBottom: theme.spacing(2),
}))

const ProfileSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(3),
  padding: theme.spacing(4, 0),
}))

const NavigationSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(2),
  marginLeft: 'auto',
}))

const Header: React.FC = () => {
  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <StyledAppBar position="static">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <ProfileSection>
            <Avatar
              src="/ilona-profile/images/ilonan-profiilikuva.jpg" // Ilonan profilikuva
              alt="Ilona Mäkelä"
              sx={{ width: 80, height: 80 }}
            />
            <Box>
              <Typography
                variant="h4"
                component="h1"
                color="white"
                fontWeight="bold"
              >
                Ilona Mäkelä
              </Typography>
              <Typography variant="h6" color="white" sx={{ opacity: 0.9 }}>
                Rowing Athlete • Finland
              </Typography>
              <Typography variant="body1" color="white" sx={{ opacity: 0.8 }}>
                Seeking Rowing Scholarship & Academic Excellence in the USA
              </Typography>
            </Box>
          </ProfileSection>

          <NavigationSection>
            <Button color="inherit" onClick={() => scrollToSection('about')}>
              About
            </Button>
            <Button color="inherit" onClick={() => scrollToSection('athletic')}>
              Athletic
            </Button>
            <Button color="inherit" onClick={() => scrollToSection('academic')}>
              Academic
            </Button>
            <Button color="inherit" onClick={() => scrollToSection('media')}>
              Media
            </Button>
            <Button color="inherit" onClick={() => scrollToSection('blog')}>
              Blog
            </Button>
            <Button color="inherit" onClick={() => scrollToSection('contact')}>
              Contact
            </Button>
          </NavigationSection>
        </Toolbar>
      </Container>
    </StyledAppBar>
  )
}

export default Header
