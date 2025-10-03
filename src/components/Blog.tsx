import React, { useState } from 'react'
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Chip,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  Divider,
  ImageList,
  ImageListItem,
  Paper,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import {
  CalendarToday,
  LocationOn,
  Close,
  EmojiEvents,
  Article,
  PhotoLibrary,
  VideoLibrary,
  PlayArrow,
} from '@mui/icons-material'

const Section = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(6),
  padding: theme.spacing(2),
}))

const BlogCard = styled(Card)(({ theme }) => ({
  height: '100%',
  transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
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

const MetaInfo = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: theme.spacing(2),
  marginBottom: theme.spacing(2),
  color: theme.palette.text.secondary,
  fontSize: '0.875rem',
}))

const MediaContainer = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(3),
}))

const VideoContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  marginBottom: theme.spacing(2),
  '& video': {
    width: '100%',
    height: 'auto',
    borderRadius: theme.spacing(1),
  },
}))

interface BlogMedia {
  type: 'image' | 'video'
  src: string
  alt?: string
  caption?: string
  thumbnail?: string // For videos
  youtubeId?: string // For YouTube videos
}

interface BlogPost {
  id: number
  title: string
  excerpt: string
  content: string
  date: string
  location?: string
  category: string
  image?: string
  media?: BlogMedia[]
  tags: string[]
}

const Blog: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null)
  const [openDialog, setOpenDialog] = useState<boolean>(false)

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'European Championships in Turkey - An Unforgettable Experience',
      excerpt:
        'I participated in the European Coastal Rowing Championships in Turkey, where I experienced international competition at the highest level.',
      content: `
        <h3>Journey to the European Championships in Turkey</h3>
        <p>In October 2024, I had the opportunity to participate in the European Championships in coastal rowing in Turkey. This was my first time competing in an international championship, and the excitement was palpable.</p>

        <h3>Preparation</h3>
        <p>Preparation for the championships began months in advance. I trained intensively both on the water and on dry land. Coastal rowing differs from regular rowing in that it takes place on the open sea, where waves and wind bring their own challenges.</p>

        <p>In addition to physical training, I also focused on mental preparation. International competitions require special mental strength and the ability to quickly adapt to changing conditions.</p>

        <h3>Competition in Turkey</h3>
        <p>Upon arriving in Turkey, the local atmosphere was amazing. The Mediterranean climate and beautiful scenery created the perfect setting for competition. However, the weather conditions were challenging - the wind was strong and the waves were high.</p>

        <p>I competed in the single scull, which is my strength. Although I didn't reach the medals, I achieved my personal best and learned tremendously from international competition.</p>

        <h3>Lessons and Future</h3>
        <p>This experience taught me a lot about myself as an athlete. I saw firsthand what level international competition requires, and it motivated me to train even harder.</p>

        <p>The other young athletes I met in Turkey were inspiring, and I gained valuable contacts and friendships that will surely last into the future.</p>

        <p>My next goal is to make it onto the Finnish national team and represent my country in upcoming competitions. The experiences in Turkey gave me confidence that this is possible with hard work and commitment.</p>
      `,
      date: '2024-10-15',
      location: 'Turkey',
      category: 'Competitions',
      image: '/ilona-profile/images/single-scull_2.jpg',
      media: [
        {
          type: 'image',
          src: '/ilona-profile/images/single-scull_1.jpg',
          alt: 'Training session on the lake',
          caption: 'Morning training session preparing for the championships',
        },
        {
          type: 'image',
          src: '/ilona-profile/images/single-scull_2.jpg',
          alt: 'Competition day',
          caption: 'Ready to compete in the European Championships',
        },
        {
          type: 'image',
          src: '/ilona-profile/images/single-scull_3.jpg',
          alt: 'Team Finland preparation',
          caption: 'Final preparations with the Finnish team',
        },
        {
          type: 'image',
          src: '/ilona-profile/images/single-scull_4.jpg',
          alt: 'Post-competition',
          caption: 'After the race - exhausted but proud',
        },
        {
          type: 'image',
          src: '/ilona-profile/images/single-scull_5.jpg',
          alt: 'Turkish coastline',
          caption:
            'Beautiful Turkish coastline where the competition took place',
        },
        {
          type: 'video',
          src: '', // Not needed for YouTube
          youtubeId: 'dQw4w9WgXcQ', // Example YouTube video ID
          caption:
            'Training footage from Turkey - preparing for the championship race',
        },
        {
          type: 'video',
          src: '', // Not needed for YouTube
          youtubeId: 'ScMzIvxBSi4', // Another example YouTube video ID
          caption: 'Race highlights from the European Championships final',
        },
      ],
      tags: [
        'European Championships',
        'Coastal Rowing',
        'Turkey',
        'International Competition',
      ],
    },
  ]

  const handlePostClick = (post: BlogPost): void => {
    setSelectedPost(post)
    setOpenDialog(true)
  }

  const handleCloseDialog = (): void => {
    setOpenDialog(false)
    setSelectedPost(null)
  }

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  // Helper function to extract YouTube video ID from URL
  const getYouTubeId = (url: string): string => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
    const match = url.match(regExp)
    return match && match[2].length === 11 ? match[2] : url
  }

  const renderMedia = (media: BlogMedia[]): React.ReactElement => {
    if (!media || media.length === 0) return <></>

    return (
      <MediaContainer>
        <Typography
          variant="h6"
          gutterBottom
          sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
        >
          <PhotoLibrary color="primary" />
          Media Gallery
        </Typography>

        <ImageList variant="masonry" cols={2} gap={8}>
          {media.map((item, index) => (
            <ImageListItem key={index}>
              {item.type === 'image' ? (
                <Box>
                  <img
                    src={item.src}
                    alt={item.alt || `Media ${index + 1}`}
                    loading="lazy"
                    style={{
                      width: '100%',
                      height: 'auto',
                      borderRadius: '8px',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    }}
                  />
                  {item.caption && (
                    <Typography
                      variant="caption"
                      display="block"
                      sx={{ mt: 1, fontStyle: 'italic', textAlign: 'center' }}
                    >
                      {item.caption}
                    </Typography>
                  )}
                </Box>
              ) : (
                <VideoContainer>
                  {item.youtubeId ? (
                    // YouTube embed
                    <Box
                      sx={{
                        position: 'relative',
                        paddingBottom: '56.25%',
                        height: 0,
                      }}
                    >
                      <iframe
                        src={`https://www.youtube.com/embed/${item.youtubeId}?rel=0&modestbranding=1`}
                        title={item.alt || `Video ${index + 1}`}
                        style={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          borderRadius: '8px',
                          border: 'none',
                          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                        }}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </Box>
                  ) : (
                    // Local video file
                    <video
                      controls
                      poster={item.thumbnail}
                      style={{
                        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                      }}
                    >
                      <source src={item.src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  )}
                  {item.caption && (
                    <Typography
                      variant="caption"
                      display="block"
                      sx={{ mt: 1, fontStyle: 'italic', textAlign: 'center' }}
                    >
                      {item.caption}
                    </Typography>
                  )}
                </VideoContainer>
              )}
            </ImageListItem>
          ))}
        </ImageList>
      </MediaContainer>
    )
  }

  return (
    <Section id="blog">
      <Typography
        variant="h3"
        component="h2"
        gutterBottom
        align="center"
        color="primary"
      >
        Blog
      </Typography>

      <Typography
        variant="h6"
        component="p"
        align="center"
        color="text.secondary"
        sx={{ mb: 4 }}
      >
        Follow my journey as a rower and read about my experiences in
        competitions and training
      </Typography>

      <Grid container spacing={4}>
        {blogPosts.map((post) => (
          <Grid item xs={12} md={6} lg={4} key={post.id}>
            <BlogCard onClick={() => handlePostClick(post)}>
              {post.image && (
                <CardMedia
                  component="img"
                  height="200"
                  image={post.image}
                  alt={post.title}
                />
              )}
              <CardContent>
                <MetaInfo>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <CalendarToday sx={{ fontSize: 16, mr: 0.5 }} />
                    {formatDate(post.date)}
                  </Box>
                  {post.location && (
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <LocationOn sx={{ fontSize: 16, mr: 0.5 }} />
                      {post.location}
                    </Box>
                  )}
                </MetaInfo>

                <Typography variant="h6" component="h3" gutterBottom>
                  {post.title}
                </Typography>

                <Typography
                  variant="body2"
                  color="text.secondary"
                  paragraph
                  sx={{ mb: 2 }}
                >
                  {post.excerpt}
                </Typography>

                <Box sx={{ mb: 2 }}>
                  <Chip
                    label={post.category}
                    color="primary"
                    size="small"
                    sx={{ mr: 1 }}
                  />
                  {post.media && post.media.length > 0 && (
                    <Chip
                      icon={<PhotoLibrary />}
                      label={`${post.media.length} media`}
                      variant="outlined"
                      size="small"
                      sx={{ mr: 1 }}
                    />
                  )}
                  {post.tags.map((tag, index) => (
                    <Chip
                      key={index}
                      label={tag}
                      variant="outlined"
                      size="small"
                      sx={{ mr: 0.5, mb: 0.5 }}
                    />
                  ))}
                </Box>

                <Button
                  variant="text"
                  color="primary"
                  startIcon={<Article />}
                  sx={{ mt: 'auto' }}
                >
                  Read more
                </Button>
              </CardContent>
            </BlogCard>
          </Grid>
        ))}
      </Grid>

      {/* Blog Post Dialog */}
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        maxWidth="md"
        fullWidth
        scroll="paper"
      >
        {selectedPost && (
          <>
            <DialogTitle>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                }}
              >
                <Box sx={{ flex: 1, pr: 2 }}>
                  <Typography variant="h5" component="h2" gutterBottom>
                    {selectedPost.title}
                  </Typography>
                  <MetaInfo>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <CalendarToday sx={{ fontSize: 16, mr: 0.5 }} />
                      {formatDate(selectedPost.date)}
                    </Box>
                    {selectedPost.location && (
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <LocationOn sx={{ fontSize: 16, mr: 0.5 }} />
                        {selectedPost.location}
                      </Box>
                    )}
                    <Chip
                      label={selectedPost.category}
                      color="primary"
                      size="small"
                    />
                  </MetaInfo>
                </Box>
                <IconButton onClick={handleCloseDialog} sx={{ mt: -1, mr: -1 }}>
                  <Close />
                </IconButton>
              </Box>
            </DialogTitle>

            <DialogContent dividers>
              {selectedPost.image && (
                <Box sx={{ mb: 3 }}>
                  <img
                    src={selectedPost.image}
                    alt={selectedPost.title}
                    style={{
                      width: '100%',
                      height: 'auto',
                      borderRadius: '8px',
                    }}
                  />
                </Box>
              )}

              <Box
                sx={{
                  '& h3': {
                    color: 'primary.main',
                    mt: 3,
                    mb: 2,
                    fontSize: '1.25rem',
                    fontWeight: 600,
                  },
                  '& p': {
                    mb: 2,
                    lineHeight: 1.7,
                    fontSize: '1rem',
                  },
                }}
                dangerouslySetInnerHTML={{ __html: selectedPost.content }}
              />

              {selectedPost.media && selectedPost.media.length > 0 && (
                <>
                  <Divider sx={{ my: 3 }} />
                  {renderMedia(selectedPost.media)}
                </>
              )}

              <Divider sx={{ my: 3 }} />

              <Box>
                <Typography
                  variant="subtitle2"
                  gutterBottom
                  color="text.secondary"
                >
                  Tags:
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {selectedPost.tags.map((tag, index) => (
                    <Chip
                      key={index}
                      label={tag}
                      variant="outlined"
                      size="small"
                    />
                  ))}
                </Box>
              </Box>
            </DialogContent>

            <DialogActions>
              <Button onClick={handleCloseDialog} variant="contained">
                Close
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>
    </Section>
  )
}

export default Blog
