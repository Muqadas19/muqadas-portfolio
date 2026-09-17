"use client";

import { useEffect } from "react";
import { hashHref } from "@/lib/asset";

export function HashRedirect({ hash }: { hash: string }) {
  useEffect(() => {
    window.location.replace(hashHref(hash));
  }, [hash]);

  return (
    <main className="px-4 py-24 text-center text-white/70">
      <p>Opening that section on the homepage…</p>
      <a href={hashHref(hash)} className="btn-flame mt-6 inline-flex">
        Continue
      </a>
    </main>
  );
}
