import React, { useState } from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { Menu as MenuIcon } from '@mui/icons-material'
import { styled } from '@mui/material/styles'

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: 'linear-gradient(45deg, #1976d2 30%, #42a5f5 90%)',
  marginBottom: theme.spacing(2),
}))

const ProfileSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  padding: theme.spacing(2, 0),
  flexGrow: 1,
  [theme.breakpoints.down('md')]: {
    gap: theme.spacing(1.5),
    padding: theme.spacing(1.5, 0),
  },
  [theme.breakpoints.down('sm')]: {
    gap: theme.spacing(1),
    padding: theme.spacing(1, 0),
  },
}))

const NavigationSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  gap: theme.spacing(1),
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}))

const MobileMenuButton = styled(IconButton)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.down('md')]: {
    display: 'block',
    color: 'white',
  },
}))

const Header: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  const scrollToSection = (sectionId: string): void => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    handleMenuClose()
  }

  const navigationItems = [
    { id: 'about', label: 'About' },
    { id: 'athletic', label: 'Athletic' },
    { id: 'academic', label: 'Academic' },
    { id: 'media', label: 'Media' },
    { id: 'blog', label: 'Blog' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <StyledAppBar position="static">
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ minHeight: { xs: 64, sm: 70, md: 80 } }}>
          <ProfileSection>
            <Avatar
              src="/ilona-profile/images/ilonan-profiilikuva.jpg"
              alt="Ilona Mäkelä"
              sx={{
                width: { xs: 50, sm: 60, md: 80 },
                height: { xs: 50, sm: 60, md: 80 },
              }}
            />
            <Box sx={{ minWidth: 0, flex: 1 }}>
              <Typography
                variant="h4"
                component="h1"
                color="white"
                fontWeight="bold"
                sx={{
                  fontSize: { xs: '1.25rem', sm: '1.75rem', md: '2.125rem' },
                  lineHeight: 1.2,
                }}
              >
                Ilona Mäkelä
              </Typography>
              <Typography
                variant="h6"
                color="white"
                sx={{
                  opacity: 0.9,
                  fontSize: { xs: '0.875rem', sm: '1rem', md: '1.25rem' },
                  lineHeight: 1.3,
                }}
              >
                Rowing Athlete • Finland
              </Typography>
              <Typography
                variant="body1"
                color="white"
                sx={{
                  opacity: 0.8,
                  fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' },
                  display: { xs: 'none', sm: 'block' },
                  lineHeight: 1.4,
                }}
              >
                Seeking Rowing Scholarship & Academic Excellence in the USA
              </Typography>
            </Box>
          </ProfileSection>

          {/* Desktop Navigation */}
          <NavigationSection>
            {navigationItems.map((item) => (
              <Button
                key={item.id}
                color="inherit"
                onClick={() => scrollToSection(item.id)}
                sx={{
                  fontSize: { md: '0.875rem', lg: '1rem' },
                  px: { md: 1, lg: 2 },
                }}
              >
                {item.label}
              </Button>
            ))}
          </NavigationSection>

          {/* Mobile Menu Button */}
          <MobileMenuButton
            onClick={handleMenuOpen}
            aria-label="Open navigation menu"
          >
            <MenuIcon />
          </MobileMenuButton>

          {/* Mobile Menu */}
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            {navigationItems.map((item) => (
              <MenuItem
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                sx={{ fontSize: '1rem', py: 1.5, px: 3 }}
              >
                {item.label}
              </MenuItem>
            ))}
          </Menu>
        </Toolbar>
      </Container>
    </StyledAppBar>
  )
}

export default Header
