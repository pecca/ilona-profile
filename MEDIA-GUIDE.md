# Media Gallery - How to Add Images and Videos

## 📸 Adding Images

### 1. Copy images to the correct folder:

```
public/images/
├── ilonan-profiilikuva.jpg          ✅ (already added)
├── rowing-action-1.jpg              ⏳ (add this)
├── competition-1.jpg                ⏳ (add this)
├── team-photo.jpg                   ⏳ (add this)
├── rowing-technique.jpg             ⏳ (add this)
├── medal-ceremony.jpg               ⏳ (add this)
├── sunrise-training.jpg             ⏳ (add this)
└── ... (more images as needed)
```

## 🎥 Adding YouTube Videos (RECOMMENDED!)

YouTube videos are the best option because:

- ✅ Doesn't increase website size
- ✅ Better performance
- ✅ Automatic optimization for different devices
- ✅ Easy to share with coaches

### Finding YouTube Video ID:

From YouTube link: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`
→ Video ID is: `dQw4w9WgXcQ` (part after "v=")

From short link: `https://youtu.be/dQw4w9WgXcQ`
→ Video ID is: `dQw4w9WgXcQ` (last part)

## 📝 Adding Media to Blog Posts

To add media to a blog post, edit the `media` array in `src/components/Blog.tsx`:

### Adding YouTube Video:

```typescript
{
  type: 'video',
  src: '', // Not needed for YouTube
  youtubeId: 'dQw4w9WgXcQ', // Your YouTube video ID
  caption: 'Race highlights from the European Championships',
}
```

### Adding Image:

```typescript
{
  type: 'image',
  src: '/images/rowing-action-1.jpg',
  caption: 'Training session in Turkey before the championships',
}
```

## 🔧 Adding New Media to Gallery

### Add new image to MediaGallery:

1. Copy image to `public/images/` folder
2. Open `src/components/MediaGallery.tsx`
3. Add new object to `photos` array:

```javascript
{
  id: 7, // seuraava vapaa numero
  src: '/ilona-profile/images/uusi-kuva.jpg',
  title: 'Kuvan otsikko',
  description: 'Kuvan kuvaus',
  category: 'Training', // Training/Competition/Team/Achievement
}
```

### Lisää YouTube-video (SUOSITELTU):

1. Lataa video YouTubeen (voi olla unlisted/private)
2. Kopioi Video ID YouTube-linkistä
3. **EI TARVITSE** thumbnail-kuvaa - YouTube tarjoaa automaattisesti!
4. Lisää uusi objekti `videos` arrayhin:

```javascript
{
  id: 5, // seuraava vapaa numero
  youtubeId: 'dQw4w9WgXcQ', // YouTube Video ID
  thumbnail: getYouTubeThumbnail('dQw4w9WgXcQ'), // Automaattinen YouTube thumbnail
  title: 'Videon otsikko',
  description: 'Videon kuvaus',
  duration: '3:45', // videon pituus
  category: 'Technique', // Technique/Competition/Training/Fitness
  isYoutube: true,
}
```

## 🎯 YouTube Thumbnail Edut:

- ✅ **Automaattinen** - ei tarvitse luoda omia kuvia
- ✅ **Aina ajan tasalla** - päivittyy jos YouTube-thumbnailv aihdetaan
- ✅ **Optimoitu** - YouTube optimoi kuvakoot automaattisesti
- ✅ **Nopea** - ei lataa turhia kuvia sivustolle

## 📏 YouTube Thumbnail Koot:

- `maxresdefault.jpg` - 1280x720px (paras laatu)
- `hqdefault.jpg` - 480x360px (hyvä laatu, suositeltu)
- `mqdefault.jpg` - 320x180px (keskitaso)
- `default.jpg` - 120x90px (pieni)

### Lisää paikallinen video (jos YouTube ei ole vaihtoehto):

1. Kopioi video `public/videos/` kansioon
2. Luo thumbnail-kuva `public/images/` kansioon
3. Lisää uusi objekti `videos` arrayhin:

```javascript
{
  id: 5, // seuraava vapaa numero
  src: '/ilona-profile/videos/uusi-video.mp4',
  thumbnail: '/ilona-profile/images/uusi-video-thumb.jpg',
  title: 'Videon otsikko',
  description: 'Videon kuvaus',
  duration: '3:45', // videon pituus
  category: 'Technique', // Technique/Competition/Training/Fitness
  isYoutube: false,
}
```

## 🎯 YouTube vs Paikallinen video

### YouTube (SUOSITELTU):

- ✅ Ei kasvata sivuston kokoa
- ✅ Nopea lataaminen
- ✅ Automaattinen laadun säätö
- ✅ Toimii kaikilla laitteilla
- ✅ Voi olla "unlisted" (ei julkinen mutta linkki toimii)

### Paikallinen video:

- ❌ Kasvattaa sivuston kokoa huomattavasti
- ❌ Hitaampi lataaminen
- ❌ Voi aiheuttaa ongelmia GitHub Pages -kokorajoissa
- ✅ Täysi kontrolli videosta

## 📏 Suositukset

### Kuvat:

- **Koko:** 800x600px tai suurempi
- **Muoto:** JPG (pienemmät tiedostokoot)
- **Suhde:** 4:3 tai 16:9
- **Laatu:** Hyvä valaistus, terävä

### Videot:

- **Koko:** 1080p (1920x1080) tai 720p
- **Muoto:** MP4 (paras yhteensopivuus)
- **Pituus:** 1-10 minuuttia
- **Thumbnails:** 800x450px (16:9 suhde)

## 🚀 Julkaiseminen

Kun olet lisännyt kuvat/videot:

```bash
# 1. Tallenna muutokset
git add .
git commit -m "Add new media files to gallery"

# 2. Lähetä GitHubiin
git push origin main

# 3. Julkaise sivusto
npm run deploy
```
