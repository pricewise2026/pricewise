"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <header
      className="
        sticky top-0 z-50
        bg-white dark:bg-slate-950
        border-b border-slate-200 dark:border-white/10
        backdrop-blur
      "
    >
      <div
        className="
          mx-auto max-w-6xl
          px-6
          h-14
          flex items-center justify-between
        "
      >
        {/* BRAND */}
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-slate-900 dark:text-slate-100"
        >
          Pricewise.
        </Link>

        {/* ACTIONS */}
        <button
          onClick={() => setDark(!dark)}
          className="
            text-sm
            text-slate-600 dark:text-slate-400
            hover:text-slate-900 dark:hover:text-slate-100
            transition
          "
        >
          {dark ? "Light mode" : "Dark mode"}
        </button>
      </div>
    </header>
  );
}