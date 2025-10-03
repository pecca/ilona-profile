# Analytics Setup Guide

This document explains how to set up Google Analytics 4 (GA4) to track rowing coach visits to Ilona's recruitment profile.

## Setup Steps

### 1. Create Google Analytics Account

1. Go to [Google Analytics](https://analytics.google.com/)
2. Sign in with your Google account
3. Click "Start measuring"
4. Enter your account name (e.g., "Ilona Rowing Profile")
5. Configure data sharing settings (recommended: keep defaults)
6. Click "Next"

### 2. Create Property

1. Enter property name: "Ilona Profile Website"
2. Select reporting time zone: "Finland (GMT+2)"
3. Select currency: "Euro (EUR)"
4. Click "Next"

### 3. Set Business Information

1. Industry category: "Sports"
2. Business size: "Small"
3. Use case: "Get baseline reports"
4. Click "Create"

### 4. Set Up Data Stream

1. Choose "Web"
2. Enter website URL: `https://pecca.github.io/ilona-profile`
3. Enter stream name: "Ilona Profile Website"
4. Click "Create stream"

### 5. Get Measurement ID

1. After creating the stream, you'll see your **Measurement ID** (format: G-XXXXXXXXXX)
2. Copy this ID

### 6. Configure Your Website

1. Open the `.env` file in your project root
2. Replace `G-XXXXXXXXXX` with your actual Measurement ID:
   ```
   VITE_GA_MEASUREMENT_ID=G-YOUR_ACTUAL_ID
   ```

### 7. Deploy Your Changes

1. Build and deploy your website:
   ```bash
   npm run build
   npm run deploy
   ```

## What Analytics Will Track

### Automatic Tracking

- **Page views**: Every time someone visits the site
- **Session duration**: How long coaches spend on the site
- **Geographic location**: Where coaches are visiting from
- **Device information**: Desktop, mobile, tablet usage
- **Traffic sources**: How coaches found the site

### Custom Events

- **Coach visits**: Special tracking for recruitment profile views
- **Contact form views**: When coaches see the contact form
- **Contact form submissions**: When coaches try to make contact
- **Media interactions**: When coaches view photos or play videos
- **Image views**: Which photos coaches are interested in
- **Video plays**: Which rowing videos get the most attention

## Viewing Analytics Data

### Real-time Data

1. Go to Google Analytics dashboard
2. Click "Realtime" to see current visitors

### Reports

1. **Audience Overview**: General visitor statistics
2. **Acquisition**: How coaches found your site
3. **Behavior**: What coaches do on your site
4. **Conversions**: Track contact form submissions

### Key Metrics for Coaches

- **Users from University locations**: Look for traffic from college towns
- **Time spent on Athletic section**: Indicates serious interest
- **Video completion rates**: Shows engagement with rowing footage
- **Contact form conversion**: Most important metric for recruitment

## Custom Reports

You can create custom reports to track:

- Visitors from specific countries (USA, UK, etc.)
- Time spent on specific sections
- Most viewed rowing videos
- Peak visiting hours (useful for scheduling updates)

## Privacy Considerations

- Analytics data is anonymized
- No personal information is collected
- Complies with GDPR requirements
- Only tracks website behavior, not personal data

## Troubleshooting

### No Data Appearing

1. Check that your Measurement ID is correct in `.env`
2. Verify the website is deployed with the analytics code
3. Analytics data can take 24-48 hours to appear initially

### Testing Analytics

1. Visit your website in incognito mode
2. Check Real-time reports in Google Analytics
3. You should see your visit appear within a few minutes

## Advanced Features

### Goals and Conversions

Set up goals for:

- Contact form submissions
- Time spent on site > 2 minutes
- Viewing multiple sections

### Audience Segments

Create segments for:

- Visitors from university towns
- Mobile vs desktop users
- Returning visitors (coaches checking back)

### Enhanced E-commerce (Optional)

While not applicable for this site, you could track:

- PDF downloads (recruiting materials)
- Link clicks to external platforms

## Support

If you need help setting up analytics:

1. Google Analytics Help Center: https://support.google.com/analytics
2. YouTube tutorials for GA4 setup
3. Ask a developer friend to help with the `.env` configuration

Remember: The most important metric is contact form submissions - that means coaches are interested enough to reach out!
