import ReactGA from 'react-ga4'

// Get Google Analytics Measurement ID from environment variable
const MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX'

export const initializeAnalytics = () => {
  // Only initialize in production or if measurement ID is properly set
  if (
    process.env.NODE_ENV === 'production' &&
    MEASUREMENT_ID !== 'G-XXXXXXXXXX'
  ) {
    ReactGA.initialize(MEASUREMENT_ID)
    console.log('Google Analytics initialized with ID:', MEASUREMENT_ID)
  } else {
    console.log(
      'Google Analytics not initialized - development mode or missing ID'
    )
  }
}

export const trackPageView = (path: string, title?: string) => {
  if (process.env.NODE_ENV === 'production') {
    ReactGA.send({
      hitType: 'pageview',
      page: path,
      title: title || document.title,
    })
  }
}

export const trackEvent = (
  eventName: string,
  parameters?: Record<string, any>
) => {
  if (process.env.NODE_ENV === 'production') {
    ReactGA.event(eventName, parameters)
  }
}

// Specific events for rowing coach recruitment
export const trackCoachVisit = () => {
  trackEvent('coach_visit', {
    event_category: 'recruitment',
    event_label: 'coach_page_view',
  })
}

export const trackContactFormView = () => {
  trackEvent('contact_form_view', {
    event_category: 'recruitment',
    event_label: 'contact_form_viewed',
  })
}

export const trackContactFormSubmit = () => {
  trackEvent('contact_form_submit', {
    event_category: 'recruitment',
    event_label: 'coach_contact_attempt',
  })
}

export const trackVideoPlay = (videoName: string) => {
  trackEvent('video_play', {
    event_category: 'media',
    event_label: videoName,
  })
}

export const trackImageView = (imageName: string) => {
  trackEvent('image_view', {
    event_category: 'media',
    event_label: imageName,
  })
}
