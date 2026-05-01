"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { site, isNavGroup } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onDown(e: MouseEvent) {
      if (!dropdownRef.current) return;
      if (!dropdownRef.current.contains(e.target as Node)) setDropdown(null);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setDropdown(null);
    }
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  // Separate CTA items from regular nav items
  const ctaItems = site.nav.filter((item) => !isNavGroup(item) && (item as { cta?: boolean }).cta);
  const navItems = site.nav.filter((item) => isNavGroup(item) || !(item as { cta?: boolean }).cta);

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/85">
      <div className="container-narrow flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/vpr-logo.svg"
            alt="Vantage Point Risk Partners"
            style={{ height: "44px", width: "auto" }}
          />
        </Link>

        <nav ref={dropdownRef} className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) =>
            isNavGroup(item) ? (
              <div key={item.label} className="relative">
                <button
                  type="button"
                  onClick={() =>
                    setDropdown(dropdown === item.label ? null : item.label)
                  }
                  className="btn-ghost flex items-center gap-1"
                  aria-expanded={dropdown === item.label}
                  aria-haspopup="menu"
                >
                  {item.label}
                  <span aria-hidden className="text-xs">▾</span>
                </button>
                {dropdown === item.label && (
                  <div
                    role="menu"
                    className="absolute left-0 top-full mt-2 w-72 overflow-hidden rounded-md border border-border bg-white shadow-lg"
                  >
                    {item.children.map((c) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        role="menuitem"
                        className="block px-4 py-2 text-sm font-medium text-foreground hover:bg-surface hover:text-flame"
                        onClick={() => setDropdown(null)}
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link key={(item as { href: string }).href} href={(item as { href: string }).href} className="btn-ghost">
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={site.phoneHref}
            className="text-sm font-semibold text-foreground hover:text-flame"
            aria-label={site.phoneCTA}
          >
            {site.phoneCTA}
          </a>
          {ctaItems.map((item) => (
            <Link
              key={(item as { href: string }).href}
              href={(item as { href: string }).href}
              className="inline-flex items-center justify-center rounded-md bg-gold px-5 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-flame focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 focus:ring-offset-bg"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <button
          className="rounded-md border border-border px-3 py-2 text-sm font-semibold text-foreground lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-white lg:hidden">
          <div className="container-narrow flex flex-col gap-1 py-3">
            {navItems.map((item) =>
              isNavGroup(item) ? (
                <div key={item.label} className="mt-2">
                  <p className="px-3 pb-1 pt-2 text-xs font-semibold uppercase tracking-wider text-muted">
                    {item.label}
                  </p>
                  {item.children.map((c) => (
                    <Link
                      key={c.href}
                      href={c.href}
                      className="block rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-surface"
                      onClick={() => setOpen(false)}
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={(item as { href: string }).href}
                  href={(item as { href: string }).href}
                  className="rounded-md px-3 py-2 text-base font-medium text-foreground hover:bg-surface"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              )
            )}
            <a
              href={site.phoneHref}
              className="rounded-md px-3 py-2 text-base font-semibold text-foreground hover:bg-surface"
            >
              {site.phoneCTA}
            </a>
            {ctaItems.map((item) => (
              <Link
                key={(item as { href: string }).href}
                href={(item as { href: string }).href}
                className="mt-2 inline-flex items-center justify-center rounded-md bg-gold px-5 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-flame"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
