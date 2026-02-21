"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 w-full z-50">
      <div className="flex items-center justify-between px-8 py-4 text-white">
        <h2 className="text-2xl font-bold text-green-400">
          Mentora<span className="text-white">.lk</span>
        </h2>

        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <Link href="/">Home</Link>
          <Link href="#">Courses</Link>
          <Link href="#">Become a Tutor</Link>
          <Link href="#">About Us</Link>
          <Link href="#">Contact Us</Link>
        </nav>

        <div className="text-sm">
          <span className="cursor-pointer">Sign In / Join</span>
        </div>
      </div>
    </header>
  );
}
