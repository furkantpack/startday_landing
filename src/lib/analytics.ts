'use client';

import posthog from 'posthog-js';

export const analyticsEvents = {
  userSignedUp: 'user_signed_up',
  userLoggedIn: 'user_logged_in',
  onboardingStarted: 'onboarding_started',
  onboardingCompleted: 'onboarding_completed',
  projectCreated: 'project_created',
  projectViewed: 'project_viewed',
  founderViewed: 'founder_viewed',
  founderSaved: 'founder_saved',
  searchPerformed: 'search_performed',
  alertCreated: 'alert_created',
  subscriptionStarted: 'subscription_started',
  paymentCompleted: 'payment_completed',
} as const;

export type AnalyticsEvent = (typeof analyticsEvents)[keyof typeof analyticsEvents];

export type AnalyticsProperties = Record<
  string,
  string | number | boolean | null | undefined | string[] | number[]
>;

export type AnalyticsUser = {
  id: string;
  email?: string | null;
  name?: string | null;
};

function isPostHogReady() {
  return typeof window !== 'undefined';
}

export function trackEvent(event: AnalyticsEvent, properties?: AnalyticsProperties) {
  if (!isPostHogReady()) return;

  posthog.capture(event, properties);
}

export function identifyUser(user: AnalyticsUser) {
  if (!isPostHogReady()) return;

  posthog.identify(user.id, {
    email: user.email ?? undefined,
    name: user.name ?? undefined,
  });
}

export function resetAnalytics() {
  if (!isPostHogReady()) return;

  posthog.reset();
}

export const analytics = {
  track: trackEvent,
  identify: identifyUser,
  reset: resetAnalytics,
  userSignedUp: (properties?: AnalyticsProperties) => trackEvent(analyticsEvents.userSignedUp, properties),
  userLoggedIn: (user: AnalyticsUser, properties?: AnalyticsProperties) => {
    identifyUser(user);
    trackEvent(analyticsEvents.userLoggedIn, properties);
  },
  onboardingStarted: (properties?: AnalyticsProperties) => trackEvent(analyticsEvents.onboardingStarted, properties),
  onboardingCompleted: (properties?: AnalyticsProperties) => trackEvent(analyticsEvents.onboardingCompleted, properties),
  projectCreated: (properties?: AnalyticsProperties) => trackEvent(analyticsEvents.projectCreated, properties),
  projectViewed: (properties?: AnalyticsProperties) => trackEvent(analyticsEvents.projectViewed, properties),
  founderViewed: (properties?: AnalyticsProperties) => trackEvent(analyticsEvents.founderViewed, properties),
  founderSaved: (properties?: AnalyticsProperties) => trackEvent(analyticsEvents.founderSaved, properties),
  searchPerformed: (properties?: AnalyticsProperties) => trackEvent(analyticsEvents.searchPerformed, properties),
  alertCreated: (properties?: AnalyticsProperties) => trackEvent(analyticsEvents.alertCreated, properties),
  subscriptionStarted: (properties?: AnalyticsProperties) => trackEvent(analyticsEvents.subscriptionStarted, properties),
  paymentCompleted: (properties?: AnalyticsProperties) => trackEvent(analyticsEvents.paymentCompleted, properties),
};
