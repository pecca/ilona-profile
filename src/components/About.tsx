import React from 'react'
import { Box, Typography, Card, CardContent, Grid, Chip } from '@mui/material'
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

const About: React.FC = () => {
  const languages: string[] = [
    'Finnish (Native)',
    'English (Good)',
    'Swedish (Basic)',
  ]
  const interests: string[] = [
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
                Sports have been my passion since childhood. I’ve always enjoyed
                being active, training hard, and competing. In addition to
                rowing, I have practiced artistic gymnastics, orienteering, and
                cross-country skiing. My interest in rowing has grown gradually
                over the years, and in the summer of 2025, I made the decision
                to focus on rowing as my main sport.
              </Typography>
              <Typography variant="body1" paragraph>
                I started rowing at the age of 13. I enjoy rowing in all boat
                classes, both in traditional flatwater rowing and coastal
                rowing. I represent the club Takon Soutajat. Last summer, our
                crew won the Finnish Championship in the women's eight. I also
                performed well in the four, pair, and single sculls.
              </Typography>
              <Typography variant="body1" paragraph>
                In coastal rowing, I was selected to represent Finland at the
                European Rowing Coastal Championships in Turkey in the U19
                category, where I reached the knock-out stage. It was an
                incredibly fun and memorable experience—I rowed on ocean waves
                for the first time. The Coastal Rowing World Championships will
                also be held in Turkey, and I will be competing there as well.
              </Typography>
              <Typography variant="body1" paragraph>
                Currently, I attend Sammon keskuslukio, a sports-focused high
                school where I’ve learned to balance training and academics. I
                will graduate in December 2026. In the future, I want to succeed
                in rowing and pursue a meaningful academic career. My goal is to
                earn a rowing scholarship in the United States, which I believe
                is the best way to combine both ambitions. I am ready to begin
                my university studies in the fall of 2027.
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
          </Grid>
        </Grid>
      </Grid>
    </Section>
  )
}

export default About
