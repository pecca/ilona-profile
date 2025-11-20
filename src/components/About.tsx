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
                I started rowing at the age of 13. I enjoy rowing in all boat
                classes, both in classic rowing and coastal rowing. I represent
                the club Takon Soutajat. Last summer, we won the Finnish
                Championship in the eight. I also earned medals in the four and
                the double. In coastal rowing, I was selected to represent
                Finland at the European and World Beach Sprint Championships in
                Turkey in the U19 category. I really enjoyed racing there and
                gained valuable experience in international competitions.
              </Typography>
              <Typography variant="body1" paragraph>
                So far, I haven’t trained much on the ergo. I did my first 2k
                ergo test this autumn and finished with a time of 7:39.7. My
                plan is to start training on the ergo regularly, and I believe I
                can improve my 2k result significantly during this winter.
              </Typography>
              <Typography variant="body1" paragraph>
                Currently, I attend Sammon keskuslukio, a sports high school
                where I've learned to balance training and studying. The school
                allows, for example, morning training sessions before classes. I
                will graduate in December 2026. In the future, I want to succeed
                in rowing and pursue a good profession. My goal is to earn a
                rowing scholarship to the USA, which I believe is the best way
                to combine both goals.
              </Typography>

              {/* Recruiting Video */}
              <Box sx={{ mt: 3, textAlign: 'center' }}>
                <Typography
                  variant="h6"
                  component="h4"
                  gutterBottom
                  color="primary"
                >
                  Recruiting Video
                </Typography>
                <Box
                  sx={{
                    position: 'relative',
                    paddingBottom: '56.25%', // 16:9 aspect ratio
                    height: 0,
                    overflow: 'hidden',
                    borderRadius: 2,
                    boxShadow: 3,
                  }}
                >
                  <iframe
                    src="https://www.youtube.com/embed/V-bFJSizAUA"
                    title="Recruiting Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      border: 'none',
                    }}
                  />
                </Box>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  sx={{ mt: 1 }}
                >
                  Highlighting skills and achievements for college recruitment
                </Typography>
              </Box>
            </CardContent>
          </StyledCard>
        </Grid>
      </Grid>
    </Section>
  )
}

export default About
