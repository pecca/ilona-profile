import React from 'react'
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Chip,
  Avatar,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import { Rowing, School, Language } from '@mui/icons-material'

const Section = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(6),
  padding: theme.spacing(2),
}))

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-4px)',
  },
}))

const IconWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
  '& .MuiSvgIcon-root': {
    marginRight: theme.spacing(1),
    color: theme.palette.primary.main,
  },
}))

function About() {
  const languages = ['Finnish (Native)', 'English (Fluent)', 'Swedish (Basic)']
  const interests = [
    'Rowing',
    'Fitness Training',
    'Nutrition',
    'Team Leadership',
    'Environmental Science',
  ]

  return (
    <Section id="about">
      <Typography
        variant="h3"
        component="h2"
        gutterBottom
        align="center"
        color="primary"
      >
        About Ilona
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <StyledCard>
            <CardContent>
              <IconWrapper>
                <Rowing />
                <Typography variant="h5" component="h3">
                  My Rowing Journey
                </Typography>
              </IconWrapper>
              <Typography variant="body1" paragraph>
                I have been passionate about rowing for over 6 years, starting
                my journey at the age of 14. What began as a curiosity about
                this elegant sport has evolved into a deep commitment to
                excellence both on the water and in academics.
              </Typography>
              <Typography variant="body1" paragraph>
                Throughout my rowing career, I have consistently demonstrated
                dedication, teamwork, and the ability to perform under pressure.
                My goal is to continue developing my athletic abilities while
                pursuing higher education in the United States, where I can
                contribute to a collegiate rowing program and grow both as an
                athlete and a student.
              </Typography>
              <Typography variant="body1" paragraph>
                I am seeking a rowing scholarship that will allow me to combine
                my athletic passion with academic excellence. I believe that the
                discipline and work ethic I have developed through rowing will
                serve me well in both collegiate athletics and my chosen field
                of study.
              </Typography>
            </CardContent>
          </StyledCard>
        </Grid>

        <Grid item xs={12} md={4}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <StyledCard>
                <CardContent>
                  <IconWrapper>
                    <Language />
                    <Typography variant="h6" component="h3">
                      Languages
                    </Typography>
                  </IconWrapper>
                  <Box
                    sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}
                  >
                    {languages.map((language, index) => (
                      <Chip key={index} label={language} variant="outlined" />
                    ))}
                  </Box>
                </CardContent>
              </StyledCard>
            </Grid>

            <Grid item xs={12}>
              <StyledCard>
                <CardContent>
                  <IconWrapper>
                    <School />
                    <Typography variant="h6" component="h3">
                      Interests & Values
                    </Typography>
                  </IconWrapper>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {interests.map((interest, index) => (
                      <Chip
                        key={index}
                        label={interest}
                        color="primary"
                        variant="outlined"
                        size="small"
                      />
                    ))}
                  </Box>
                </CardContent>
              </StyledCard>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Section>
  )
}

export default About
