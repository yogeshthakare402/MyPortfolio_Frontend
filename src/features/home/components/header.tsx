"use client";

import Link from "next/link";
import { useState } from "react";
import type { NavItem } from "@/data/portfolio-data";

type HeaderProps = {
  navItems: NavItem[];
};

export default function Header({ navItems }: HeaderProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Link href="/" className="brand">
          YT
        </Link>
        <button
          type="button"
          className="menu-toggle"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
        <nav className={`nav ${open ? "open" : ""}`}>
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}>
              {item.label}
            </a>
          ))}
          <Link href="/projects" onClick={() => setOpen(false)}>
            All Work
          </Link>
        </nav>
      </div>
    </header>
  );
}
