import React, { useState, useEffect } from 'react'
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  TextField,
  Button,
  Chip,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Alert,
  Snackbar,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import {
  Email,
  Phone,
  LocationOn,
  Send,
  Person,
  Sports,
  School,
  Download,
} from '@mui/icons-material'
import {
  trackContactFormView,
  trackContactFormSubmit,
} from '../utils/analytics'

const Section = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(6),
  padding: theme.spacing(2),
}))

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-2px)',
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

const ContactCard = styled(Card)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: 'center',
  background: 'linear-gradient(45deg, #e3f2fd 30%, #ffffff 90%)',
}))

interface FormData {
  name: string
  email: string
  university: string
  message: string
}

interface ContactInfo {
  icon: React.ReactElement
  label: string
  value: string
  type: string
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    university: '',
    message: '',
  })
  const [showSuccess, setShowSuccess] = useState<boolean>(false)

  // Track when contact form is viewed
  useEffect(() => {
    trackContactFormView()
  }, [])

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()

    // Track contact form submission
    trackContactFormSubmit()

    // Tässä olisi oikea lomakkeen lähetyslogiikka
    console.log('Form submitted:', formData)
    setShowSuccess(true)
    setFormData({ name: '', email: '', university: '', message: '' })
  }

  const contactInfo: ContactInfo[] = [
    {
      icon: <Email />,
      label: 'Email',
      value: 'ilona.makela@email.com',
      type: 'email',
    },
    {
      icon: <Phone />,
      label: 'Phone',
      value: '+358 50 123 4567',
      type: 'phone',
    },
    {
      icon: <LocationOn />,
      label: 'Location',
      value: 'Tampere, Finland',
      type: 'text',
    },
  ]

  const references = [
    {
      name: 'Coach Maria Lindström',
      role: 'Head Coach, Tampere Rowing Club',
      email: 'maria.lindstrom@rowing.fi',
      phone: '+358 40 987 6543',
    },
    {
      name: 'Jukka Virtanen',
      role: 'Athletic Director',
      email: 'jukka.virtanen@sport.fi',
      phone: '+358 45 234 5678',
    },
  ]

  const documents = [
    'Athletic Resume (PDF)',
    'Academic Transcript',
    'Medical Clearance',
    'Video Portfolio',
    'Letters of Recommendation',
  ]

  return (
    <Section id="contact">
      <Typography
        variant="h3"
        component="h2"
        gutterBottom
        align="center"
        color="primary"
      >
        Contact Information
      </Typography>

      <Grid container spacing={4}>
        {/* Contact Details */}
        <Grid item xs={12} md={6}>
          <StyledCard>
            <CardContent>
              <IconWrapper>
                <Person />
                <Typography variant="h5" component="h3">
                  Get in Touch
                </Typography>
              </IconWrapper>

              <Box sx={{ mb: 4 }}>
                <Typography variant="body1" paragraph>
                  I am actively seeking rowing scholarship opportunities at US
                  universities. Please feel free to contact me or my coaching
                  staff for additional information, media files, or to schedule
                  a video call.
                </Typography>
              </Box>

              <List>
                {contactInfo.map((contact, index) => (
                  <ListItem key={index} disablePadding sx={{ mb: 2 }}>
                    <ListItemIcon>{contact.icon}</ListItemIcon>
                    <ListItemText
                      primary={contact.label}
                      secondary={
                        contact.type === 'email' ? (
                          <a
                            href={`mailto:${contact.value}`}
                            style={{ textDecoration: 'none', color: 'inherit' }}
                          >
                            {contact.value}
                          </a>
                        ) : contact.type === 'phone' ? (
                          <a
                            href={`tel:${contact.value}`}
                            style={{ textDecoration: 'none', color: 'inherit' }}
                          >
                            {contact.value}
                          </a>
                        ) : (
                          contact.value
                        )
                      }
                      secondaryTypographyProps={{
                        fontWeight: 'medium',
                        color: 'primary.main',
                      }}
                    />
                  </ListItem>
                ))}
              </List>

              <Divider sx={{ my: 3 }} />

              <Typography variant="h6" gutterBottom>
                Available Documents
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                {documents.map((doc, index) => (
                  <Chip
                    key={index}
                    label={doc}
                    variant="outlined"
                    size="small"
                    icon={<Download />}
                    clickable
                  />
                ))}
              </Box>

              <Button
                variant="contained"
                startIcon={<Download />}
                fullWidth
                sx={{ mt: 2 }}
              >
                Download Complete Recruitment Package
              </Button>
            </CardContent>
          </StyledCard>
        </Grid>

        {/* Contact Form */}
        <Grid item xs={12} md={6}>
          <StyledCard>
            <CardContent>
              <IconWrapper>
                <Send />
                <Typography variant="h5" component="h3">
                  Contact Form
                </Typography>
              </IconWrapper>

              <Box component="form" onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  label="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  margin="normal"
                  required
                />
                <TextField
                  fullWidth
                  label="Email Address"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  margin="normal"
                  required
                />
                <TextField
                  fullWidth
                  label="University/Organization"
                  name="university"
                  value={formData.university}
                  onChange={handleInputChange}
                  margin="normal"
                  required
                />
                <TextField
                  fullWidth
                  label="Message"
                  name="message"
                  multiline
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  margin="normal"
                  placeholder="Please include information about your rowing program, scholarship opportunities, and any specific questions you may have."
                  required
                />
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  size="large"
                  startIcon={<Send />}
                  sx={{ mt: 3 }}
                >
                  Send Message
                </Button>
              </Box>
            </CardContent>
          </StyledCard>
        </Grid>

        {/* References */}
        <Grid item xs={12}>
          <StyledCard>
            <CardContent>
              <IconWrapper>
                <Sports />
                <Typography variant="h5" component="h3">
                  Coaching References
                </Typography>
              </IconWrapper>

              <Grid container spacing={3}>
                {references.map((ref, index) => (
                  <Grid item xs={12} md={6} key={index}>
                    <ContactCard>
                      <Avatar
                        sx={{
                          width: 64,
                          height: 64,
                          margin: '0 auto 16px',
                          bgcolor: 'primary.main',
                        }}
                      >
                        {ref.name
                          .split(' ')
                          .map((n) => n[0])
                          .join('')}
                      </Avatar>
                      <Typography variant="h6" gutterBottom>
                        {ref.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        gutterBottom
                      >
                        {ref.role}
                      </Typography>
                      <Typography variant="body2" sx={{ mt: 2 }}>
                        <Email
                          sx={{ fontSize: 16, mr: 1, verticalAlign: 'middle' }}
                        />
                        <a
                          href={`mailto:${ref.email}`}
                          style={{ textDecoration: 'none', color: 'inherit' }}
                        >
                          {ref.email}
                        </a>
                      </Typography>
                      <Typography variant="body2">
                        <Phone
                          sx={{ fontSize: 16, mr: 1, verticalAlign: 'middle' }}
                        />
                        <a
                          href={`tel:${ref.phone}`}
                          style={{ textDecoration: 'none', color: 'inherit' }}
                        >
                          {ref.phone}
                        </a>
                      </Typography>
                    </ContactCard>
                  </Grid>
                ))}
              </Grid>

              <Box sx={{ mt: 3, p: 2, bgcolor: 'grey.50', borderRadius: 2 }}>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  align="center"
                >
                  References are available to provide detailed information about
                  athletic performance, character, and potential. Please feel
                  free to contact them directly.
                </Typography>
              </Box>
            </CardContent>
          </StyledCard>
        </Grid>
      </Grid>

      <Snackbar
        open={showSuccess}
        autoHideDuration={6000}
        onClose={() => setShowSuccess(false)}
      >
        <Alert onClose={() => setShowSuccess(false)} severity="success">
          Thank you for your message! I will get back to you within 24 hours.
        </Alert>
      </Snackbar>
    </Section>
  )
}

export default Contact
