import React from 'react'

interface PlausibleAnalyticsProps {
  domain: string
}

// Simple analytics script component for Plausible Analytics
export const PlausibleAnalytics: React.FC<PlausibleAnalyticsProps> = ({
  domain,
}) => {
  React.useEffect(() => {
    // Only load in production
    if (process.env.NODE_ENV !== 'production') return

    const script = document.createElement('script')
    script.defer = true
    script.setAttribute('data-domain', domain)
    script.src = 'https://plausible.io/js/script.js'
    document.head.appendChild(script)

    return () => {
      // Cleanup script when component unmounts
      if (document.head.contains(script)) {
        document.head.removeChild(script)
      }
    }
  }, [domain])

  return null
}

// Simple event tracking for Plausible
export const trackPlausibleEvent = (
  eventName: string,
  props?: Record<string, string | number>
) => {
  if (process.env.NODE_ENV !== 'production') return

  // @ts-ignore - plausible is loaded via script tag
  if (typeof window !== 'undefined' && window.plausible) {
    // @ts-ignore
    window.plausible(eventName, { props })
  }
}

// Specific events for rowing recruitment
export const trackCoachVisitPlausible = () => {
  trackPlausibleEvent('Coach Visit', { section: 'profile' })
}

export const trackContactFormViewPlausible = () => {
  trackPlausibleEvent('Contact Form View')
}

export const trackContactFormSubmitPlausible = () => {
  trackPlausibleEvent('Contact Form Submit')
}

export const trackVideoPlayPlausible = (videoName: string) => {
  trackPlausibleEvent('Video Play', { video: videoName })
}

export const trackImageViewPlausible = (imageName: string) => {
  trackPlausibleEvent('Image View', { image: imageName })
}
