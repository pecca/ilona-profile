import React from 'react'
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
  },
})

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Container maxWidth="lg">
        <Box sx={{ py: 4 }}>
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
