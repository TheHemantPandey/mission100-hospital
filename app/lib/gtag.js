export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

/**
 * Log pageviews to Google Analytics 4
 * @param {string} url
 */
export const pageview = (url) => {
  if (typeof window !== "undefined" && window.gtag && GA_MEASUREMENT_ID) {
    window.gtag("config", GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};

/**
 * Log specific events to Google Analytics 4
 * @param {string} action - Event name (e.g. 'book_test_submit', 'payment_success')
 * @param {object} params - Event parameters
 */
export const event = (action, params = {}) => {
  if (typeof window !== "undefined" && window.gtag && GA_MEASUREMENT_ID) {
    window.gtag("event", action, params);
  }
};
