"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import myIcon from "../../../public/logo.svg";
import Link from "next/link";

interface HeaderProps {
  variant?: "home" | "default";
}

const Header: React.FC<HeaderProps> = ({ variant = "default" }) => {
  const [visible, setVisible] = useState(variant === "default");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (variant !== "home") return;

    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY > 10) {
        setVisible(true);
        setScrolled(true);
      } else {
        setVisible(false);
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [variant]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}
      `}
    >
      <div
        className={`mx-auto flex items-center justify-between px-12 py-6
          backdrop-blur-md
          bg-white/10
          ${scrolled ? "shadow-sm" : ""}
        `}
      >
        <Link href="/">
          <Image
            src={myIcon}
            alt="Description"
            width={100}
            height={100}
            className="hover:opacity-70 transition"
          />
        </Link>

        {/* Nav */}
        <nav className="space-x-6 font-semibold text-md text-black ">
          <a href="#" className="hover:opacity-70 transition">
            About
          </a>
          <a href="#" className="hover:opacity-70 transition">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;

/**
 * 使用方式：
 *
 * 1. 首页（滚动才显示）
 * <Header variant="home" />
 *
 * 2. 普通页面（默认显示）
 * <Header variant="default" />
 */
