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
                I’ve always loved being active, training hard, and competing. In
                addition to rowing, I’ve practiced artistic gymnastics,
                orienteering, and cross-country skiing. In orienteering and
                skiing, I’ve won several Finnish youth championship medals. My
                interest in rowing has grown gradually, and last summer I made
                the decision to focus on rowing as my main sport.
              </Typography>
              <Typography variant="body1" paragraph>
                I started rowing at the age of 13. I enjoy rowing all boat
                classes in both classic rowing and coastal rowing. I represent
                the club Takon Soutajat. Last summer, we won the Finnish
                championship in the eight. I also medaled in the four and the
                double. In coastal rowing, I was selected to represent Finland
                at the European Championships in Turkey in the U19 category,
                where I reached the knock-out stage. It was a very fun
                experience—I rowed for the first time on ocean waves. The World
                Coastal Rowing Championships will also be held in Turkey in
                November 2025, and I will participate there as well.
              </Typography>
              <Typography variant="body1" paragraph>
                Currently, I attend Sammon keskuslukio, a sports high school
                where I’ve learned to balance training and studying. The school
                allows, for example, morning training sessions before classes. I
                will graduate in December 2026. In the future, I want to succeed
                in rowing and pursue a good profession. My goal is to earn a
                rowing scholarship to the USA, which I believe is the best way
                to combine both goals.
              </Typography>
            </CardContent>
          </StyledCard>
        </Grid>
      </Grid>
    </Section>
  )
}

export default About
