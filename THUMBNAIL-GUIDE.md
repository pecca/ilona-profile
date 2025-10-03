# Video Thumbnail Guide

## 📸 Kuinka luoda video-thumbnaileja

### Automaattinen tapa (YouTube):

1. **Avaa YouTube-video** selaimessa
2. **Pause video** haluamassasi kohdassa
3. **Oikea klikkaus** videolla → "Kopioi kuva" tai "Save image"
4. **Tallenna kuva** nimellä `video-thumb-X.jpg`

### Manuaalinen tapa:

1. **Ota kuvakaappaus** videosta parhaassa kohdassa
2. **Crop kuva** 16:9 suhteeseen (esim. 800x450px)
3. **Tallenna** JPG-muodossa

### Kuvankäsittelysovelluksilla:

```bash
# Macissa (Screenshot):
Cmd + Shift + 4 → valitse video-alue

# Resize kuvaa:
- Suositeltu koko: 800x450px (16:9)
- Maksimi: 1280x720px
- Muoto: JPG (pienempi tiedostokoko)
```

## 📁 Tallennuspaikat:

```
public/images/
├── video-thumb-1.jpg    ← Technique video
├── video-thumb-2.jpg    ← Competition video
├── video-thumb-3.jpg    ← Training video
└── video-thumb-4.jpg    ← Highlights video
```

## 🔧 Nykyinen tilanne:

✅ **Toimii nyt:** Käytän olemassa olevia soutu-kuvia thumbnaileinä
✅ **Videot näkyvät:** Media galleryssa
✅ **Thumbnailit toimivat:** Klikkaamalla aukeaa YouTube-video

## 🎯 Jatkossa parannettavaa:

1. **Korvaa oikeat YouTube Video ID:t** (`dQw4w9WgXcQ` on vain testi)
2. **Luo oikeat thumbnailit** videoista
3. **Optimoi kuvakoot** nopeampaa lataamista varten

## 🚀 Testaa nyt:

Avaa: http://localhost:5174/ilona-profile/
→ Media → Videos
→ Pitäisi näkyä 4 videota thumbnaileineen!
