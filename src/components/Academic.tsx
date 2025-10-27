import React from 'react'
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Chip,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  LinearProgress,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import {
  School,
  Psychology,
  Science,
  Language,
  CheckCircle,
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

const GradeCard = styled(Card)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(2),
  background: 'linear-gradient(45deg, #e3f2fd 30%, #ffffff 90%)',
}))

interface Grade {
  subject: string
  grade: string
  level: string
}

interface AcademicInterest {
  area: string
  icon: React.ReactElement
}

const Academic: React.FC = () => {
  const currentGrades: Grade[] = [
    { subject: 'Mathematics', grade: '9.2', level: 'Advanced' },
    { subject: 'Physics', grade: '8.8', level: 'Advanced' },
    { subject: 'Chemistry', grade: '9.0', level: 'Advanced' },
    { subject: 'English', grade: '9.5', level: 'Advanced' },
    { subject: 'Finnish Literature', grade: '8.5', level: 'Standard' },
    { subject: 'Biology', grade: '9.1', level: 'Advanced' },
    { subject: 'Swedish', grade: '8.0', level: 'Standard' },
  ]

  const academicAchievements: string[] = [
    'Honor Roll Student (2022-2024)',
    'Science Fair Regional Winner (2023)',
    'Mathematics Olympiad Participant (2023)',
    'Student Council Representative (2023-2024)',
    'Environmental Club President (2024)',
  ]

  const academicInterests: AcademicInterest[] = [
    { area: 'Environmental Science', icon: <Science /> },
    { area: 'Marine Biology', icon: <Science /> },
    { area: 'Sports Psychology', icon: <Psychology /> },
    { area: 'International Business', icon: <School /> },
  ]

  const calculateGPA = (grades: Grade[]): string => {
    const total = grades.reduce(
      (sum, grade) => sum + parseFloat(grade.grade),
      0
    )
    return (total / grades.length).toFixed(2)
  }

  return null

  return (
    <Section id="academic">
      <Typography
        variant="h3"
        component="h2"
        gutterBottom
        align="center"
        color="primary"
      >
        Academic Profile
      </Typography>

      <Grid container spacing={4}>
        {/* Current Education */}
        <Grid item xs={12} md={8}>
          <StyledCard>
            <CardContent>
              <IconWrapper>
                <School />
                <Typography variant="h5" component="h3">
                  Current Education & Grades
                </Typography>
              </IconWrapper>
              <Box sx={{ mb: 3 }}>
                <Typography variant="h6" gutterBottom>
                  Tampere High School (Gymnasium) - Class of 2025
                </Typography>
                <Typography variant="body1" color="textSecondary" paragraph>
                  Finnish Matriculation Examination Track • GPA:{' '}
                  {calculateGPA(currentGrades)}/10.0
                </Typography>
              </Box>

              <TableContainer component={Paper} elevation={0}>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>
                        <strong>Subject</strong>
                      </TableCell>
                      <TableCell>
                        <strong>Grade</strong>
                      </TableCell>
                      <TableCell>
                        <strong>Level</strong>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {currentGrades.map((grade, index) => (
                      <TableRow key={index} hover>
                        <TableCell>{grade.subject}</TableCell>
                        <TableCell>
                          <Typography
                            variant="body2"
                            fontWeight="bold"
                            color={
                              parseFloat(grade.grade) >= 9.0
                                ? 'success.main'
                                : 'primary.main'
                            }
                          >
                            {grade.grade}/10
                          </Typography>
                        </TableCell>
                        <TableCell>
                          <Chip
                            label={grade.level}
                            size="small"
                            color={
                              grade.level === 'Advanced' ? 'primary' : 'default'
                            }
                            variant="outlined"
                          />
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </StyledCard>
        </Grid>

        {/* Academic Interests */}
        <Grid item xs={12} md={4}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <StyledCard>
                <CardContent>
                  <IconWrapper>
                    <Psychology />
                    <Typography variant="h6" component="h3">
                      Academic Interests
                    </Typography>
                  </IconWrapper>
                  <Grid container spacing={2}>
                    {academicInterests.map((interest, index) => (
                      <Grid item xs={12} key={index}>
                        <GradeCard elevation={1}>
                          <Box
                            sx={{
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              mb: 1,
                            }}
                          >
                            {interest.icon}
                            <Typography
                              variant="body2"
                              fontWeight="medium"
                              sx={{ ml: 1 }}
                            >
                              {interest.area}
                            </Typography>
                          </Box>
                        </GradeCard>
                      </Grid>
                    ))}
                  </Grid>
                </CardContent>
              </StyledCard>
            </Grid>

            <Grid item xs={12}>
              <StyledCard>
                <CardContent>
                  <IconWrapper>
                    <Language />
                    <Typography variant="h6" component="h3">
                      Test Scores
                    </Typography>
                  </IconWrapper>
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="body2" color="textSecondary">
                      English Proficiency
                    </Typography>
                    <Typography variant="body1" fontWeight="bold">
                      TOEFL: Scheduled for Spring 2025
                    </Typography>
                    <LinearProgress
                      variant="determinate"
                      value={75}
                      sx={{ mt: 1, borderRadius: 2 }}
                    />
                  </Box>
                  <Box>
                    <Typography variant="body2" color="textSecondary">
                      SAT/ACT
                    </Typography>
                    <Typography variant="body1" fontWeight="bold">
                      Scheduled for Spring 2025
                    </Typography>
                    <LinearProgress
                      variant="determinate"
                      value={60}
                      sx={{ mt: 1, borderRadius: 2 }}
                    />
                  </Box>
                </CardContent>
              </StyledCard>
            </Grid>
          </Grid>
        </Grid>

        {/* Academic Achievements */}
        <Grid item xs={12}>
          <StyledCard>
            <CardContent>
              <IconWrapper>
                <TrendingUp />
                <Typography variant="h5" component="h3">
                  Academic Achievements & Leadership
                </Typography>
              </IconWrapper>
              <List>
                {academicAchievements.map((achievement, index) => (
                  <ListItem key={index} disablePadding>
                    <ListItemIcon>
                      <CheckCircle color="success" />
                    </ListItemIcon>
                    <ListItemText
                      primary={achievement}
                      primaryTypographyProps={{ fontWeight: 'medium' }}
                    />
                  </ListItem>
                ))}
              </List>

              <Box sx={{ mt: 3, p: 2, bgcolor: 'grey.50', borderRadius: 2 }}>
                <Typography variant="h6" gutterBottom color="primary">
                  Future Academic Goals
                </Typography>
                <Typography variant="body1" paragraph>
                  I am particularly interested in pursuing a degree in
                  Environmental Science or Marine Biology, combining my passion
                  for nature with scientific research. My goal is to contribute
                  to sustainable solutions for environmental challenges while
                  continuing to excel in rowing.
                </Typography>
                <Typography variant="body1">
                  I am also considering double-majoring or minoring in Sports
                  Psychology to better understand the mental aspects of athletic
                  performance and potentially help other athletes in the future.
                </Typography>
              </Box>
            </CardContent>
          </StyledCard>
        </Grid>
      </Grid>
    </Section>
  )
}

export default Academic
