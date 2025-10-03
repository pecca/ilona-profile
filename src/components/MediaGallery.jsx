import React, { useState } from 'react'
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Button,
  Chip,
  CardMedia,
  Dialog,
  DialogContent,
  IconButton,
  Tabs,
  Tab,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import {
  PhotoLibrary,
  VideoLibrary,
  Close,
  PlayArrow,
  Download,
} from '@mui/icons-material'

const Section = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(6),
  padding: theme.spacing(2),
}))

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  transition: 'transform 0.3s ease-in-out',
  cursor: 'pointer',
  '&:hover': {
    transform: 'translateY(-4px)',
    boxShadow: theme.shadows[8],
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

const MediaCard = styled(Card)(({ theme }) => ({
  position: 'relative',
  cursor: 'pointer',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.02)',
    boxShadow: theme.shadows[6],
  },
}))

const VideoOverlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'rgba(0, 0, 0, 0.3)',
  opacity: 0,
  transition: 'opacity 0.3s ease-in-out',
  '&:hover': {
    opacity: 1,
  },
}))

const MediaTitle = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  background: 'linear-gradient(transparent, rgba(0, 0, 0, 0.7))',
  color: 'white',
  padding: theme.spacing(2),
}))

function MediaGallery() {
  const [selectedTab, setSelectedTab] = useState(0)
  const [openDialog, setOpenDialog] = useState(false)
  const [selectedMedia, setSelectedMedia] = useState(null)

  // Helper function to get YouTube thumbnail
  const getYouTubeThumbnail = (videoId, quality = 'hqdefault') => {
    return `https://img.youtube.com/vi/${videoId}/${quality}.jpg`
  }

  // Placeholder data - näitä korvataan oikeilla kuvilla ja videoilla
  const photos = [
    {
      id: 1,
      src: '/ilona-profile/images/single-scull_1.jpg',
      title: 'Single Scull Training',
      description: 'Morning training session on the lake',
      category: 'Training',
    },
    {
      id: 2,
      src: '/ilona-profile/images/single-scull_2.jpg',
      title: 'National Championships 2024',
      description: 'Competing in single scull finals',
      category: 'Competition',
    },
    {
      id: 3,
      src: '/ilona-profile/images/single-scull_3.jpg',
      title: 'Team Finland',
      description: 'Youth National Team training camp',
      category: 'Team',
    },
    {
      id: 4,
      src: '/ilona-profile/images/single-scull_4.jpg',
      title: 'Technique Focus',
      description: 'Working on stroke technique',
      category: 'Training',
    },
  ]

  const videos = [
    {
      id: 1,
      youtubeId: '24BjcbchnUA',
      thumbnail: getYouTubeThumbnail('24BjcbchnUA'), // Automaattinen YouTube thumbnail
      title: 'Stroke Technique Analysis',
      description: 'Side view analysis of rowing technique',
      duration: '2:45',
      category: 'Technique',
      isYoutube: true,
    },
    {
      id: 2,
      youtubeId: 'OA0CWhY4NV8',
      thumbnail: getYouTubeThumbnail('OA0CWhY4NV8'), // Automaattinen YouTube thumbnail
      title: 'Regional Championship Race',
      description: 'Full race footage from winning performance',
      duration: '7:30',
      category: 'Competition',
      isYoutube: true,
    },
  ]

  const handleMediaClick = (media, isVideo = false) => {
    setSelectedMedia({ ...media, isVideo })
    setOpenDialog(true)
  }

  const handleCloseDialog = () => {
    setOpenDialog(false)
    setSelectedMedia(null)
  }

  const renderPhotos = () => (
    <Grid container spacing={3}>
      {photos.map((photo) => (
        <Grid item xs={12} sm={6} md={4} key={photo.id}>
          <MediaCard onClick={() => handleMediaClick(photo, false)}>
            <CardMedia
              component="img"
              height="200"
              image={photo.src}
              alt={photo.title}
              sx={{
                backgroundColor: '#f5f5f5',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.875rem',
                color: 'text.secondary',
              }}
              onError={(e) => {
                e.target.style.display = 'flex'
                e.target.innerHTML = `📷 ${photo.title}`
              }}
            />
            <MediaTitle>
              <Typography variant="subtitle2" fontWeight="bold">
                {photo.title}
              </Typography>
              <Typography variant="caption">{photo.description}</Typography>
              <Chip
                label={photo.category}
                size="small"
                sx={{ mt: 1, backgroundColor: 'rgba(255,255,255,0.2)' }}
              />
            </MediaTitle>
          </MediaCard>
        </Grid>
      ))}
    </Grid>
  )

  const renderVideos = () => (
    <Grid container spacing={3}>
      {videos.map((video) => (
        <Grid item xs={12} sm={6} md={6} key={video.id}>
          <MediaCard onClick={() => handleMediaClick(video, true)}>
            <Box sx={{ position: 'relative' }}>
              <CardMedia
                component="img"
                height="250"
                image={video.thumbnail}
                alt={video.title}
                sx={{
                  backgroundColor: '#f5f5f5',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.875rem',
                  color: 'text.secondary',
                }}
                onError={(e) => {
                  e.target.style.display = 'flex'
                  e.target.innerHTML = `🎥 ${video.title}`
                }}
              />
              <VideoOverlay>
                <IconButton
                  sx={{
                    backgroundColor: 'rgba(255,255,255,0.9)',
                    '&:hover': { backgroundColor: 'white' },
                  }}
                >
                  <PlayArrow sx={{ fontSize: 40, color: 'primary.main' }} />
                </IconButton>
              </VideoOverlay>
              <Chip
                label={video.duration}
                size="small"
                sx={{
                  position: 'absolute',
                  top: 8,
                  right: 8,
                  backgroundColor: 'rgba(0,0,0,0.7)',
                  color: 'white',
                }}
              />
            </Box>
            <MediaTitle>
              <Typography variant="subtitle2" fontWeight="bold">
                {video.title}
              </Typography>
              <Typography variant="caption">{video.description}</Typography>
              <Chip
                label={video.category}
                size="small"
                sx={{ mt: 1, backgroundColor: 'rgba(255,255,255,0.2)' }}
              />
            </MediaTitle>
          </MediaCard>
        </Grid>
      ))}
    </Grid>
  )

  return (
    <Section id="media">
      <Typography
        variant="h3"
        component="h2"
        gutterBottom
        align="center"
        color="primary"
      >
        Media Gallery
      </Typography>

      <Box sx={{ mb: 4 }}>
        <Tabs
          value={selectedTab}
          onChange={(e, newValue) => setSelectedTab(newValue)}
          centered
          sx={{ mb: 3 }}
        >
          <Tab icon={<PhotoLibrary />} label="Photos" iconPosition="start" />
          <Tab icon={<VideoLibrary />} label="Videos" iconPosition="start" />
        </Tabs>

        {selectedTab === 0 && renderPhotos()}
        {selectedTab === 1 && renderVideos()}
      </Box>

      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Typography variant="body1" color="textSecondary" paragraph>
          Additional media files including high-resolution photos and
          full-length videos are available upon request for recruiting purposes.
        </Typography>
        <Button variant="outlined" startIcon={<Download />} sx={{ mt: 2 }}>
          Request Media Package
        </Button>
      </Box>

      {/* Media Dialog */}
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        maxWidth="md"
        fullWidth
      >
        <DialogContent sx={{ p: 0, position: 'relative' }}>
          <IconButton
            onClick={handleCloseDialog}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              backgroundColor: 'rgba(0,0,0,0.5)',
              color: 'white',
              zIndex: 1,
              '&:hover': {
                backgroundColor: 'rgba(0,0,0,0.7)',
              },
            }}
          >
            <Close />
          </IconButton>

          {selectedMedia && (
            <Box>
              {selectedMedia.isVideo ? (
                selectedMedia.isYoutube ? (
                  // YouTube iframe
                  <Box
                    sx={{
                      position: 'relative',
                      paddingBottom: '56.25%', // 16:9 aspect ratio
                      height: 0,
                      overflow: 'hidden',
                    }}
                  >
                    <iframe
                      src={`https://www.youtube.com/embed/${selectedMedia.youtubeId}?rel=0&modestbranding=1`}
                      title={selectedMedia.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                      }}
                    />
                  </Box>
                ) : (
                  // Local video file
                  <video
                    controls
                    width="100%"
                    style={{ display: 'block' }}
                    poster={selectedMedia.thumbnail}
                  >
                    <source src={selectedMedia.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )
              ) : (
                <img
                  src={selectedMedia.src}
                  alt={selectedMedia.title}
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    backgroundColor: '#f5f5f5',
                  }}
                  onError={(e) => {
                    e.target.style.display = 'flex'
                    e.target.style.alignItems = 'center'
                    e.target.style.justifyContent = 'center'
                    e.target.style.height = '400px'
                    e.target.innerHTML = `Media: ${selectedMedia.title}`
                  }}
                />
              )}

              <Box sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom>
                  {selectedMedia.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {selectedMedia.description}
                </Typography>
              </Box>
            </Box>
          )}
        </DialogContent>
      </Dialog>
    </Section>
  )
}

export default MediaGallery
