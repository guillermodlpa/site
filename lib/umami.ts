declare global {
  interface Window {
    umami: undefined | ((eventName: string) => void);
  }
}

// @see https://umami.is/docs/track-events
function trackEvent(eventName: string) {
  if (window.umami) {
    window.umami(eventName);
  }
}

const umami = { trackEvent };

export default umami;
