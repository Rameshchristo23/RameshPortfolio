"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { useState } from "react";
import styled from "styled-components";

const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 1000;
  // background: rgba(26, 31, 58, 0.8);
  backdrop-filter: blur(24px);
  // border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  position: relative;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0;
`;

const DesktopMenu = styled.ul`
  display: none;
  list-style: none;
  gap: 2rem;
  margin: 0;
  padding: 0;

  @media (min-width: 768px) {
    display: flex;
  }

  li {
    margin: 0;
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.7;
    }
  }
`;

const HamburgerButton = styled.div`
  display: block;
  color: white;
  font-size: 2rem;
  cursor: pointer;
  user-select: none;

  @media (min-width: 768px) {
    display: none;
  }
`;

const ThemeToggleWrapper = styled.div`
  position: absolute;
  right: 2rem;
  top: 50%;
  transform: translateY(-50%);

  @media (min-width: 768px) {
    position: static;
    transform: none;
  }
`;

const MobileMenu = styled.div`
  display: block;
  margin-top: 1rem;
  background: rgba(26, 31, 58, 0.7);
  backdrop-filter: blur(24px);
  border-radius: 12px;
  padding: 1rem;
  margin-left: 1rem;
  margin-right: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);

  @media (min-width: 768px) {
    display: none;
  }

  a {
    display: block;
    padding: 0.5rem 0;
    text-decoration: none;
    color: inherit;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.7;
    }
  }
`;

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <Header>
      <Nav>
        <Logo className="logo">Ramesh.</Logo>

        {/* Desktop Menu */}
        <DesktopMenu>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/skills">Skills</Link></li>
          {/* <li><Link href="/education">Education</Link></li> */}
          {/* <li><Link href="/experience">Experience</Link></li> */}
          <li><Link href="/projects">Projects</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </DesktopMenu>

        {/* Mobile Hamburger */}
        <HamburgerButton onClick={() => setOpen(!open)}>
          ☰
        </HamburgerButton>

        {/* Theme Toggle */}
        <ThemeToggleWrapper>
          <ThemeToggle />
        </ThemeToggleWrapper>
      </Nav>

      {/* Mobile Menu */}
      {open && (
        <MobileMenu>
          <Link href="/" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setOpen(false)}>About</Link>
          <Link href="/skills" onClick={() => setOpen(false)}>Skills</Link>
          {/* <Link href="/education" onClick={() => setOpen(false)}>Education</Link> */}
          {/* <Link href="/experience" onClick={() => setOpen(false)}>Experience</Link> */}
          <Link href="/projects" onClick={() => setOpen(false)}>Projects</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
        </MobileMenu>
      )}
    </Header>
  );
}