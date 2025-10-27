import React, { useEffect } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { Container, Box, Alert, Typography } from '@mui/material'
import Header from './components/Header'
import About from './components/About'
import Athletic from './components/Athletic'
import Academic from './components/Academic'
import MediaGallery from './components/MediaGallery'
import Blog from './components/Blog'
import Contact from './components/Contact'
import {
  initializeAnalytics,
  trackPageView,
  trackCoachVisit,
} from './utils/analytics'

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // Blue - representing water
    },
    secondary: {
      main: '#ff4081', // Pink accent
    },
    background: {
      default: '#f5f5f5',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    // Better mobile typography
    h1: {
      fontSize: '2rem',
      '@media (min-width:600px)': {
        fontSize: '2.5rem',
      },
      '@media (min-width:960px)': {
        fontSize: '3rem',
      },
    },
    h2: {
      fontSize: '1.75rem',
      '@media (min-width:600px)': {
        fontSize: '2rem',
      },
      '@media (min-width:960px)': {
        fontSize: '2.5rem',
      },
    },
    h3: {
      fontSize: '1.5rem',
      '@media (min-width:600px)': {
        fontSize: '1.75rem',
      },
      '@media (min-width:960px)': {
        fontSize: '2rem',
      },
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
      '@media (max-width:600px)': {
        fontSize: '0.9rem',
        lineHeight: 1.5,
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  components: {
    // Better mobile touch targets
    MuiButton: {
      styleOverrides: {
        root: {
          minHeight: 44,
          '@media (max-width:600px)': {
            minHeight: 48,
            fontSize: '1rem',
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          '@media (max-width:600px)': {
            minHeight: 48,
            minWidth: 48,
          },
        },
      },
    },
    // Better mobile spacing
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: 16,
          paddingRight: 16,
          '@media (max-width:600px)': {
            paddingLeft: 12,
            paddingRight: 12,
          },
        },
      },
    },
  },
})

const App: React.FC = () => {
  useEffect(() => {
    // Initialize analytics
    initializeAnalytics()

    // Track initial page view
    trackPageView(window.location.pathname)

    // Track that this is a coach recruitment page visit
    trackCoachVisit()
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />

      {/* Hero Image */}
      <Box
        sx={{
          width: '100%',
          height: { xs: '250px', sm: '350px', md: '450px' },
          overflow: 'hidden',
          position: 'relative',
          mb: 3,
        }}
      >
        <img
          src="/ilona-profile/images/single-scull_3.jpg"
          alt="Ilona at EM Coastal"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
      </Box>

      <Container maxWidth="lg">
        <Box
          sx={{
            py: { xs: 2, sm: 3, md: 4 },
            px: { xs: 1, sm: 2 },
          }}
        >
          <About />
          <Athletic />
          <Academic />
          <MediaGallery />
          <Blog />
          <Contact />
        </Box>
      </Container>

      {/* Privacy Notice */}
      <Box sx={{ backgroundColor: 'grey.100', py: 2, mt: 4 }}>
        <Container maxWidth="lg">
          <Alert severity="info" sx={{ textAlign: 'center' }}>
            <Typography variant="body2">
              🔒 This is a private recruitment profile. This website is not
              indexed by search engines and is intended solely for rowing
              coaches and university recruitment purposes.
            </Typography>
          </Alert>
        </Container>
      </Box>
    </ThemeProvider>
  )
}

export default App
