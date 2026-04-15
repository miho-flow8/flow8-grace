import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-sage-dark py-8 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* Brand */}
        <Link href="/" className="inline-block mb-4">
          <span className="text-lg font-medium text-white tracking-wide">
            Miho Okubo
          </span>
        </Link>

        {/* Copyright */}
        <p className="text-xs text-white/50">
          &copy; {new Date().getFullYear()} Miho Okubo. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
