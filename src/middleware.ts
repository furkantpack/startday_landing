import { NextResponse, type NextRequest } from 'next/server';

const ALLOWED_EXACT_PATHS = new Set([
  '/',
  '/emo-request',
  '/find-your-team',
  '/find-your-team',
  '/startday-about',
  '/startday-find-cafes',
  '/startday-faq',
]);

function isAllowedPath(pathname: string) {
  if (ALLOWED_EXACT_PATHS.has(pathname)) {
    return true;
  }

  return /^\/cafe\/(helsinki|tallinn|copenhagen|stockholm|berlin|paris|vienna|istanbul)$/.test(pathname);
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/visa-posters') ||
    pathname === '/favicon.ico' ||
    pathname === '/robots.txt' ||
    pathname === '/sitemap.xml' ||
    /\.(png|jpg|jpeg|gif|webp|avif|svg|ico)$/i.test(pathname)
  ) {
    return NextResponse.next();
  }

  if (isAllowedPath(pathname)) {
    return NextResponse.next();
  }

  return new NextResponse('Not Found', {
    status: 404,
    headers: {
      'content-type': 'text/plain; charset=utf-8',
    },
  });
}

export const config = {
  matcher: '/:path*',
};
