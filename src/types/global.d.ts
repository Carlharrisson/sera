declare global {
  interface Window {
    gtag: (
      command: "config" | "event" | "js" | "consent",
      targetId: string | Date,
      config?: Record<string, unknown>
    ) => void;
    dataLayer: Record<string, unknown>[];
  }
}

export {};
