import React from 'react'
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  LinearProgress,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import {
  EmojiEvents,
  Timer,
  FitnessCenter,
  TrendingUp,
} from '@mui/icons-material'

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

const StatCard = styled(Card)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(2),
  background: 'linear-gradient(45deg, #f3f4f6 30%, #ffffff 90%)',
}))

interface PersonalBest {
  distance: string
  time: string
  boat: string
}

interface Achievement {
  year: string
  event: string
  result: string
}

interface PhysicalStat {
  label: string
  value: string
  progress: number
}

const Athletic: React.FC = () => {
  const personalBests: PersonalBest[] = [
    { distance: '2000m', time: '7:45.2', boat: 'Single Scull' },
    { distance: '6000m', time: '24:12.8', boat: 'Erg' },
    { distance: '1000m', time: '3:52.1', boat: 'Single Scull' },
    { distance: '5000m', time: '19:45.3', boat: 'Erg' },
  ]

  const achievements: Achievement[] = [
    {
      year: '2024',
      event: 'National Junior Championships',
      result: '2nd Place - Single Scull',
    },
    {
      year: '2024',
      event: 'Regional Championships',
      result: '1st Place - Double Scull',
    },
    { year: '2023', event: 'Youth National Team', result: 'Team Member' },
    {
      year: '2023',
      event: 'International Regatta',
      result: '3rd Place - Quad Scull',
    },
    {
      year: '2022',
      event: 'National Championships',
      result: 'Finalist - Single Scull',
    },
  ]

  const physicalStats: PhysicalStat[] = [
    { label: 'Height', value: '175 cm', progress: 85 },
    { label: 'Weight', value: '65 kg', progress: 75 },
    { label: 'Erg 2k PB', value: '7:45.2', progress: 90 },
    { label: 'Training Hours/Week', value: '18-22h', progress: 95 },
  ]

  return (
    <Section id="athletic">
      <Typography
        variant="h3"
        component="h2"
        gutterBottom
        align="center"
        color="primary"
      >
        Athletic Performance
      </Typography>

      <Grid container spacing={4}>
        {/* Personal Bests Table */}
        <Grid item xs={12} md={8}>
          <StyledCard>
            <CardContent>
              <IconWrapper>
                <Timer />
                <Typography variant="h5" component="h3">
                  Personal Best Times
                </Typography>
              </IconWrapper>
              <TableContainer component={Paper} elevation={0}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>
                        <strong>Distance</strong>
                      </TableCell>
                      <TableCell>
                        <strong>Time</strong>
                      </TableCell>
                      <TableCell>
                        <strong>Boat Type</strong>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {personalBests.map((pb, index) => (
                      <TableRow key={index} hover>
                        <TableCell>{pb.distance}</TableCell>
                        <TableCell>
                          <Typography
                            variant="body2"
                            fontWeight="bold"
                            color="primary"
                          >
                            {pb.time}
                          </Typography>
                        </TableCell>
                        <TableCell>{pb.boat}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </StyledCard>
        </Grid>

        {/* Physical Stats */}
        <Grid item xs={12} md={4}>
          <StyledCard>
            <CardContent>
              <IconWrapper>
                <FitnessCenter />
                <Typography variant="h5" component="h3">
                  Physical Profile
                </Typography>
              </IconWrapper>
              <Grid container spacing={2}>
                {physicalStats.map((stat, index) => (
                  <Grid item xs={12} key={index}>
                    <StatCard elevation={1}>
                      <Typography variant="body2" color="textSecondary">
                        {stat.label}
                      </Typography>
                      <Typography variant="h6" fontWeight="bold">
                        {stat.value}
                      </Typography>
                      <LinearProgress
                        variant="determinate"
                        value={stat.progress}
                        sx={{ mt: 1, borderRadius: 2 }}
                      />
                    </StatCard>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </StyledCard>
        </Grid>

        {/* Achievements */}
        <Grid item xs={12}>
          <StyledCard>
            <CardContent>
              <IconWrapper>
                <EmojiEvents />
                <Typography variant="h5" component="h3">
                  Competition Results & Achievements
                </Typography>
              </IconWrapper>
              <Grid container spacing={2}>
                {achievements.map((achievement, index) => (
                  <Grid item xs={12} sm={6} md={4} key={index}>
                    <Card elevation={2} sx={{ p: 2, height: '100%' }}>
                      <Box
                        sx={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'flex-start',
                          mb: 1,
                        }}
                      >
                        <Chip
                          label={achievement.year}
                          color="primary"
                          size="small"
                        />
                        <TrendingUp color="success" fontSize="small" />
                      </Box>
                      <Typography
                        variant="subtitle1"
                        fontWeight="bold"
                        gutterBottom
                      >
                        {achievement.event}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="primary"
                        fontWeight="medium"
                      >
                        {achievement.result}
                      </Typography>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </StyledCard>
        </Grid>
      </Grid>
    </Section>
  )
}

export default Athletic
