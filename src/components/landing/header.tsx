'use client';

import { useEffect, useRef, useState } from 'react';
import {
  RiArrowDownSLine,
  RiArrowRightUpLongLine,
  RiCloseFill,
  RiFlashlightFill,
  RiLayoutGridLine,
  RiMenu3Fill,
  RiNotification3Line,
  RiPulseFill,
  RiSearchLine,
  RiTaskLine,
} from '@remixicon/react';
import Link from 'next/link';

import * as Button from '@/components/ui/button';
import * as LinkButton from '@/components/ui/link-button';

const nav: Array<{
  label: string;
  href?: string;
  isnew?: boolean;
  navMenu?: boolean;
}> = [
  { label: 'Products', href: '#' },
  { label: 'Solutions', navMenu: true },
  { label: 'Pricing', href: '#' },
  { label: 'Contact', href: '#' },
];

function NavDropdownMenu() {
  return (
    <div className="z-50 flex w-full flex-col bg-[var(--bg-white-0)] lg:flex-row lg:gap-10 lg:rounded-[2rem] lg:border lg:border-[var(--stroke-soft-200)] lg:p-6 lg:shadow-[0_30px_70px_rgba(15,23,42,0.1)] xl:justify-center 2xl:gap-20">
      <div className="flex flex-col lg:gap-6">
        <div className="flex bg-[var(--bg-weak-50)] px-6 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--text-soft-400)] lg:hidden">
          QUICK ACCESS HUB
        </div>
        <div className="hidden flex-row items-center gap-3 lg:flex">
          <div className="flex size-9 items-center justify-center rounded-full border border-[var(--stroke-soft-200)] bg-[var(--bg-weak-50)]">
            <RiFlashlightFill className="size-5 text-[var(--text-sub-600)]" />
          </div>
          <div className="flex flex-col gap-1">
            <div className="text-sm font-semibold text-[var(--text-strong-950)]">
              Quick access hub
            </div>
            <div className="text-xs text-[var(--text-sub-600)]">
              Manage projects in one unified workspace.
            </div>
          </div>
        </div>
        <div className="flex flex-col py-1.5 lg:flex-row lg:items-center lg:gap-2.5 lg:px-0 lg:py-0">
          <Button.Root
            variant="neutral"
            mode="stroke"
            size="xxsmall"
            className="group/btn h-14 w-full cursor-pointer justify-start gap-2.5 rounded-none border-x-0 border-t-0 px-6 text-[15px] ring-0 transition-all duration-300 focus-visible:outline-none lg:h-7 lg:w-auto lg:justify-center lg:gap-1.5 lg:rounded-full lg:border lg:px-3.5"
          >
            <Button.Icon
              as={RiLayoutGridLine}
              className="size-[18px] text-[var(--primary-base)] transition-all duration-300 lg:text-[var(--text-soft-400)] group-hover/btn:text-[var(--primary-base)]"
            />
            Overview
          </Button.Root>
          <Button.Root
            variant="neutral"
            mode="stroke"
            size="xxsmall"
            className="group/btn h-14 w-full cursor-pointer justify-start gap-2.5 rounded-none border-x-0 border-t-0 px-6 text-[15px] ring-0 transition-all duration-300 focus-visible:outline-none lg:h-7 lg:w-auto lg:justify-center lg:gap-1.5 lg:rounded-full lg:border lg:px-3.5"
          >
            <Button.Icon
              as={RiPulseFill}
              className="size-[18px] text-[var(--primary-base)] transition-all duration-300 lg:text-[var(--text-soft-400)] group-hover/btn:text-[var(--primary-base)]"
            />
            Workflow
          </Button.Root>
          <Button.Root
            variant="neutral"
            mode="stroke"
            size="xxsmall"
            className="group/btn h-14 w-full cursor-pointer justify-start gap-2.5 rounded-none border-x-0 border-t-0 px-6 text-[15px] ring-0 transition-all duration-300 focus-visible:outline-none lg:h-7 lg:w-auto lg:justify-center lg:gap-1.5 lg:rounded-full lg:border lg:px-3.5"
          >
            <Button.Icon
              as={RiTaskLine}
              className="size-[18px] text-[var(--primary-base)] transition-all duration-300 lg:text-[var(--text-soft-400)] group-hover/btn:text-[var(--primary-base)]"
            />
            Checklists
          </Button.Root>
        </div>
        <div className="hidden flex-1 items-end text-xs text-[var(--text-soft-400)] lg:flex">
          v.1.5.69 · Apex Tech
        </div>
      </div>
      <div className="relative flex w-full flex-col items-start lg:w-auto lg:gap-4 lg:before:absolute lg:before:-left-5 lg:before:top-0 lg:before:h-full lg:before:w-px lg:before:bg-[var(--bg-soft-200)] lg:before:content-[''] 2xl:before:-left-10">
        <div className="w-full bg-[var(--bg-weak-50)] px-6 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--text-soft-400)] lg:w-auto lg:bg-transparent lg:px-0 lg:py-0">
          TOOLS
        </div>
        <div className="flex w-full flex-col items-start gap-4 px-6 py-5 lg:w-auto lg:px-0 lg:py-0">
          {['Centralized workspace', 'Real-time sync', 'Smart alerts', 'Fast lookups'].map((item) => (
            <LinkButton.Root
              key={item}
              href="#"
              variant="gray"
              className="group/link gap-1 no-underline hover:text-[var(--text-strong-950)]"
            >
              {item}
              <LinkButton.Icon
                as={RiArrowRightUpLongLine}
                className="size-4 text-[var(--primary-base)] opacity-0 transition-all duration-300 group-hover/link:opacity-100"
              />
            </LinkButton.Root>
          ))}
        </div>
      </div>
      <div className="relative flex flex-col items-start lg:gap-4 lg:before:absolute lg:before:-left-5 lg:before:top-0 lg:before:h-full lg:before:w-px lg:before:bg-[var(--bg-soft-200)] lg:before:content-[''] 2xl:before:-left-10">
        <div className="w-full bg-[var(--bg-weak-50)] px-6 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--text-soft-400)] lg:w-auto lg:bg-transparent lg:px-0 lg:py-0">
          SUPPORTS
        </div>
        <div className="flex w-full flex-col items-start gap-4 px-6 py-5 lg:w-auto lg:px-0 lg:py-0">
          {['Help center', 'Getting started', 'Community forum'].map((item) => (
            <LinkButton.Root
              key={item}
              href="#"
              variant="gray"
              className="group/link gap-1 no-underline hover:text-[var(--text-strong-950)]"
            >
              {item}
              <LinkButton.Icon
                as={RiArrowRightUpLongLine}
                className="size-4 text-[var(--primary-base)] opacity-0 transition-all duration-300 group-hover/link:opacity-100"
              />
            </LinkButton.Root>
          ))}
        </div>
      </div>
    </div>
  );
}

const Logo = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14 9.33333L10.0333 7V2.33333L14 0L17.9667 2.33333V7L14 9.33333Z"
      className="fill-[var(--primary-base)]"
    />
    <path
      d="M21.9333 14L17.9667 11.6667V7L21.9333 4.66667L25.9 7V11.6667L21.9333 14Z"
      className="fill-[var(--primary-base)]"
    />
    <path
      d="M17.9667 21V16.3333L21.9333 14L25.9 16.3333V21L21.9333 23.3333L17.9667 21Z"
      className="fill-[var(--primary-base)]"
    />
    <path
      d="M10.0333 21L14 18.6667L17.9667 21V25.6667L14 28L10.0333 25.6667V21Z"
      className="fill-[var(--primary-base)]"
    />
    <path
      d="M6.06667 14L10.0333 16.3333V21L6.06667 23.3333L2.10001 21V16.3333L6.06667 14Z"
      className="fill-[var(--primary-base)]"
    />
    <path
      d="M6.06667 14L10.0333 11.6667V7L6.06667 4.66667L2.10001 7V11.6667L6.06667 14Z"
      className="fill-[var(--primary-base)]"
    />
  </svg>
);

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeNavMenu, setActiveNavMenu] = useState<string | null>(null);
  const navContentRef = useRef<HTMLDivElement>(null);
  const [navHeight, setNavHeight] = useState<number>(0);

  useEffect(() => {
    if (navContentRef.current) {
      setNavHeight(navContentRef.current.scrollHeight);
    }
  }, [activeNavMenu]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen((open) => !open);
  };

  const toggleNavMenu = (label: string) => {
    setActiveNavMenu((active) => (active === label ? null : label));
  };

  return (
    <header className="relative z-40 mx-auto flex h-16 w-full max-w-[1120px] items-center justify-between gap-4 border-y border-[var(--stroke-soft-200)] bg-[var(--bg-white-0)] px-5 py-[18px] shadow-none backdrop-blur md:rounded-[1.5rem] md:border md:shadow-[0_16px_34px_rgba(15,23,42,0.08)] lg:mt-6 lg:min-w-[640px] lg:px-5">
      <div className="flex items-center lg:hidden">
        <Button.Root
          variant="neutral"
          mode="ghost"
          size="xsmall"
          className={`rounded-[0.875rem] ${isMenuOpen ? 'hidden' : ''}`}
          onClick={toggleMenu}
        >
          <Button.Icon as={RiMenu3Fill} className="size-5 text-[var(--text-sub-600)]" />
        </Button.Root>
        <Button.Root
          variant="neutral"
          mode="ghost"
          size="xsmall"
          className={`rounded-[0.875rem] ${isMenuOpen ? '' : 'hidden'}`}
          onClick={toggleMenu}
        >
          <Button.Icon as={RiCloseFill} className="size-5 text-[var(--text-sub-600)]" />
        </Button.Root>
      </div>

      <div className="flex flex-1 items-center justify-center gap-5 lg:justify-start">
        <Link href="/" className="flex items-center">
          <Logo />
        </Link>

        <nav
          aria-label="Primary"
          className={`fixed left-0 top-16 flex h-[calc(100dvh-144px)] w-full flex-col items-center overflow-auto bg-[var(--bg-white-0)] transition-all duration-300 lg:static lg:h-auto lg:w-auto lg:flex-row lg:gap-1 lg:overflow-visible lg:bg-transparent ${
            isMenuOpen
              ? 'visible opacity-100'
              : 'invisible opacity-0 lg:visible lg:opacity-100'
          }`}
        >
          {nav.map((item) => (
            <li
              key={item.label}
              className="group w-full list-none border-b border-[var(--stroke-soft-200)] last:border-b-0 lg:w-auto lg:border-b-0"
            >
              {item.navMenu ? (
                <button
                  onClick={() => {
                    if (window.innerWidth < 1024) {
                      toggleNavMenu(item.label);
                    }
                  }}
                  className={`flex h-16 w-full items-center gap-2 rounded-none px-6 text-[15px] text-[var(--text-sub-600)] transition-all duration-300 lg:pointer-events-none lg:h-8 lg:w-auto lg:rounded-[0.75rem] lg:px-3 lg:text-sm lg:group-hover:bg-[var(--bg-weak-50)] lg:group-hover:text-[var(--text-strong-950)] ${
                    activeNavMenu === item.label
                      ? 'bg-transparent text-[var(--text-strong-950)] lg:bg-transparent'
                      : 'bg-transparent'
                  }`}
                >
                  {item.label}
                  <RiArrowDownSLine
                    className={`ml-auto size-5 transition-all duration-300 lg:ml-0 lg:group-hover:-rotate-180 ${
                      activeNavMenu === item.label
                        ? '-rotate-180 text-[var(--text-sub-600)] lg:rotate-0'
                        : 'text-[var(--text-soft-400)]'
                    }`}
                  />
                </button>
              ) : (
                <Link
                  href={item.href || '#'}
                  className="flex h-16 w-full items-center gap-2 rounded-none px-6 text-[15px] text-[var(--text-sub-600)] transition-all duration-300 hover:bg-[var(--bg-weak-50)] hover:text-[var(--text-strong-950)] lg:h-8 lg:w-auto lg:rounded-[0.75rem] lg:px-3 lg:text-sm"
                >
                  {item.label}
                </Link>
              )}

              {item.navMenu && (
                <div
                  ref={navContentRef}
                  style={{
                    height: activeNavMenu === item.label ? `${navHeight}px` : '0px',
                  }}
                  className="ease w-full overflow-hidden transition-all duration-500 lg:invisible lg:absolute lg:left-1/2 lg:top-[4.8rem] lg:h-auto lg:w-fit lg:-translate-x-1/2 lg:opacity-0 lg:shadow-none lg:group-hover:visible lg:group-hover:opacity-100"
                >
                  <NavDropdownMenu />
                </div>
              )}
            </li>
          ))}
        </nav>
      </div>

      <div className="hidden items-center gap-3 lg:flex">
        <Button.Root
          variant="neutral"
          mode="ghost"
          size="xsmall"
          className="rounded-[0.875rem] cursor-pointer"
        >
          <Button.Icon as={RiSearchLine} className="size-5 text-[var(--text-sub-600)]" />
        </Button.Root>
        <Button.Root
          variant="neutral"
          mode="ghost"
          size="xsmall"
          className="rounded-[0.875rem] cursor-pointer"
        >
          <Button.Icon
            as={RiNotification3Line}
            className="size-5 text-[var(--text-sub-600)]"
          />
        </Button.Root>
        <div
          className={`fixed bottom-0 left-0 flex w-full items-center border-t border-[var(--stroke-soft-200)] bg-[var(--bg-white-0)] px-6 py-5 transition-all duration-300 lg:relative lg:w-auto lg:border-t-0 lg:bg-transparent lg:px-0 lg:py-0 ${
            isMenuOpen
              ? 'visible opacity-100'
              : 'invisible opacity-0 lg:visible lg:opacity-100'
          }`}
        >
          <Button.Root
            variant="primary"
            mode="filled"
            size="medium"
            asChild
            className="h-11 w-full rounded-[0.875rem] lg:h-10 lg:w-auto"
          >
            <Link href="#">Get started</Link>
          </Button.Root>
        </div>
      </div>

      <div className="flex items-center lg:hidden">
        <div className="flex size-9 items-center justify-center rounded-full border border-[var(--stroke-soft-200)] bg-[linear-gradient(135deg,#fff7eb_0%,#ffe6c7_100%)] text-[18px] shadow-[0_4px_12px_rgba(15,23,42,0.06)]">
          <span aria-hidden="true">👩🏽</span>
        </div>
      </div>
    </header>
  );
}
