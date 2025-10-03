# Blog Media Enhancement Guide

The blog component has been enhanced to support multiple images and videos for each blog post. Here's how to use the new features:

## Blog Post Structure

Each blog post now supports a `media` array with multiple images and videos:

```typescript
interface BlogMedia {
  type: 'image' | 'video'
  src: string
  alt?: string
  caption?: string
  thumbnail?: string // For videos
}

interface BlogPost {
  id: number
  title: string
  excerpt: string
  content: string
  date: string
  location?: string
  category: string
  image?: string // Main thumbnail image
  media?: BlogMedia[] // Additional media gallery
  tags: string[]
}
```

## Adding Images

To add images to a blog post:

```typescript
media: [
  {
    type: 'image',
    src: '/ilona-profile/images/your-image.jpg',
    alt: 'Descriptive alt text',
    caption: 'Optional caption that appears below the image',
  },
  // Add more images...
]
```

## Adding Videos

To add videos to a blog post:

```typescript
media: [
  {
    type: 'video',
    src: '/path/to/your-video.mp4',
    thumbnail: '/path/to/video-thumbnail.jpg', // Optional poster image
    caption: 'Optional video description',
  },
  // Add more videos...
]
```

## Features

### 1. **Media Gallery Display**

- Images and videos are displayed in a responsive masonry layout
- Each media item can have an optional caption
- Videos include controls and optional poster/thumbnail images

### 2. **Media Count Indicator**

- Blog cards show a media count chip when additional media is available
- Helps users identify posts with rich media content

### 3. **Responsive Design**

- Media gallery adapts to different screen sizes
- On mobile: Single column layout
- On desktop: Two column masonry layout

### 4. **Video Support**

- HTML5 video player with controls
- Supports MP4 format
- Optional poster image for video thumbnails
- Responsive video sizing

## Current Example

The Turkey blog post includes:

- 5 images from the competition
- 1 example video placeholder
- Captions for each media item
- Proper alt text for accessibility

## Adding New Blog Posts

When creating new blog posts with media:

1. Add images to the `/public/images/` folder
2. Add videos to the `/public/videos/` folder (create if needed)
3. Update the blog post data with the media array
4. Include descriptive captions and alt text

## File Organization

```
public/
├── images/           # Blog images
│   ├── single-scull_1.jpg
│   ├── single-scull_2.jpg
│   └── ...
└── videos/           # Blog videos
    ├── turkey-training.mp4
    └── ...
```

## Best Practices

1. **Image Optimization**: Use optimized images (WebP, appropriate sizing)
2. **Video Format**: Use MP4 for best browser compatibility
3. **Accessibility**: Always provide alt text for images
4. **Captions**: Use descriptive captions to provide context
5. **File Names**: Use descriptive, SEO-friendly file names

## Example Usage

```typescript
{
  id: 2,
  title: 'New Training Session',
  excerpt: 'Latest training session with new techniques',
  content: '...',
  date: '2024-11-01',
  category: 'Training',
  image: '/ilona-profile/images/training-main.jpg',
  media: [
    {
      type: 'image',
      src: '/ilona-profile/images/technique-1.jpg',
      alt: 'Rowing technique demonstration',
      caption: 'Perfect catch position demonstration',
    },
    {
      type: 'video',
      src: '/ilona-profile/videos/stroke-analysis.mp4',
      thumbnail: '/ilona-profile/images/stroke-thumb.jpg',
      caption: 'Slow motion stroke analysis',
    },
  ],
  tags: ['Training', 'Technique'],
}
```

The enhanced blog now provides a rich media experience that can showcase Ilona's rowing journey through both images and videos, making the blog more engaging and informative for coaches and recruiters.
