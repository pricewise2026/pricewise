"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { products } from "@/lib/products";

export default function HomePage() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);

  // Simulate real data boot time
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 900);
    return () => clearTimeout(t);
  }, []);

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <>
      <Navbar />

      <main className="relative overflow-hidden space-y-20 pb-32">

        {/* AMBIENT BACKGROUND ENERGY */}
        <div
          aria-hidden
          className="
            pointer-events-none fixed inset-0
            bg-[radial-gradient(circle_at_30%_20%,rgba(99,102,241,0.07),transparent_45%)]
            animate-pulse
          "
        />

        {/* ================= HERO ================= */}
        <section className="relative pt-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="
              mx-auto max-w-4xl
              rounded-3xl
              bg-white/80 dark:bg-slate-900/80
              backdrop-blur-xl
              border border-gray-200 dark:border-white/10
              shadow-[0_0_90px_rgba(99,102,241,0.2)]
              p-16
            "
          >
            {/* LIVE BADGE */}
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-1 text-xs text-indigo-600">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-500 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-500"></span>
              </span>
              Live price intelligence
            </div>

            <h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">
              See the real price.
              <br />
              <span className="text-indigo-600">Not the marketing one.</span>
            </h1>

            <p className="mt-6 text-lg text-slate-600 dark:text-slate-300 max-w-2xl">
              A real-time price monitoring system for Ireland.
              Detect fake discounts before you buy.
            </p>

            {/* SEARCH */}
            <div className="mt-10 relative">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search iPhone, MacBook, TV…"
                className="
                  w-full rounded-2xl
                  border border-gray-300 dark:border-white/10
                  bg-white dark:bg-slate-950
                  px-6 py-5 pr-14 text-base
                  shadow-lg
                  focus:outline-none
                  focus:ring-2 focus:ring-indigo-500
                "
              />
            </div>
          </motion.div>
        </section>

        {/* ================= SKELETON / STATS ================= */}
        <section className="mx-auto max-w-6xl px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          <AnimatePresence>
            {loading
              ? Array.from({ length: 4 }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="
                      h-24 rounded-2xl
                      bg-gray-200 dark:bg-slate-800
                      animate-pulse
                    "
                  />
                ))
              : [
                  { value: "120+", label: "Products tracked" },
                  { value: "8", label: "Irish retailers" },
                  { value: "24h", label: "Update frequency" },
                  { value: "2 yrs", label: "Price history" },
                ].map((item) => (
                  <motion.div
                    whileHover={{ y: -6 }}
                    key={item.label}
                    className="
                      rounded-2xl p-6
                      bg-white dark:bg-slate-900
                      border border-gray-200 dark:border-white/10
                    "
                  >
                    <div className="text-3xl font-semibold text-indigo-600">
                      {item.value}
                    </div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">
                      {item.label}
                    </div>
                  </motion.div>
                ))}
          </AnimatePresence>
        </section>

        {/* ================= PRODUCTS ================= */}
        <section className="mx-auto max-w-6xl px-6">
          <h2 className="text-2xl font-semibold mb-6 text-slate-900 dark:text-slate-100">
            Market activity
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {filteredProducts.map((p) => (
              <motion.div
                key={p.id}
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link
                  href={`/product/${p.id}`}
                  className="
                    block rounded-2xl p-6
                    bg-white dark:bg-slate-900
                    border border-gray-200 dark:border-white/10
                  "
                >
                  <h3 className="font-medium text-slate-900 dark:text-slate-100">
                    {p.name}
                  </h3>
                  <p className="mt-2 flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <span>€{p.bestPrice}</span>
                    <span className="text-emerald-600 text-xs font-medium">
                      ↓ price signal
                    </span>
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}