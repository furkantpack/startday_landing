'use client';

import { Suspense, useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import posthog from 'posthog-js';

function PageViewCapture() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!pathname || typeof window === 'undefined') return;

    const queryString = searchParams.toString();
    const url = `${window.location.origin}${pathname}${queryString ? `?${queryString}` : ''}`;

    posthog.capture('$pageview', {
      $current_url: url,
    });
  }, [pathname, searchParams]);

  return null;
}

export function PostHogPageView() {
  return (
    <Suspense fallback={null}>
      <PageViewCapture />
    </Suspense>
  );
}
