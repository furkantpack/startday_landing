export const stripeCheckoutUrl = 'https://buy.stripe.com/28E8wQ7DJ7Ic02d68TeME00';

export function redirectToCheckout() {
  if (typeof window === 'undefined') return;

  window.location.href = stripeCheckoutUrl;
}
