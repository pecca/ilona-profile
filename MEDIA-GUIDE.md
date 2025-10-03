# Media Gallery - Kuinka lisätä kuvia ja videoita

## 📸 Kuvien lisääminen

### 1. Kopioi kuvat oikeaan kansioon:

```
public/images/
├── ilonan-profiilikuva.jpg          ✅ (jo lisätty)
├── rowing-action-1.jpg              ⏳ (lisää tämä)
├── competition-1.jpg                ⏳ (lisää tämä)
├── team-photo.jpg                   ⏳ (lisää tämä)
├── rowing-technique.jpg             ⏳ (lisää tämä)
├── medal-ceremony.jpg               ⏳ (lisää tämä)
├── sunrise-training.jpg             ⏳ (lisää tämä)
├── video-thumb-1.jpg                ⏳ (videothumbnail)
├── video-thumb-2.jpg                ⏳ (videothumbnail)
├── video-thumb-3.jpg                ⏳ (videothumbnail)
└── video-thumb-4.jpg                ⏳ (videothumbnail)
```

### 2. Videoiden lisääminen:

```
public/videos/
├── technique-analysis.mp4           ⏳ (lisää tämä)
├── race-footage.mp4                 ⏳ (lisää tämä)
├── training-montage.mp4             ⏳ (lisää tämä)
└── erg-session.mp4                  ⏳ (lisää tämä)
```

## 🔧 Uusien kuvien/videoiden lisääminen

### Lisää uusi kuva:

1. Kopioi kuva `public/images/` kansioon
2. Avaa `src/components/MediaGallery.jsx`
3. Lisää uusi objekti `photos` arrayhin:

```javascript
{
  id: 7, // seuraava vapaa numero
  src: '/ilona-profile/images/uusi-kuva.jpg',
  title: 'Kuvan otsikko',
  description: 'Kuvan kuvaus',
  category: 'Training', // Training/Competition/Team/Achievement
}
```

### Lisää uusi video:

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
}
```

## 📏 Kuvasuositukset

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
