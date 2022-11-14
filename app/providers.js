"use client";

import { SessionProvider } from "next-auth/react";

export default function Proiders({ children }) {
  return <SessionProvider>{children}</SessionProvider>;
}
