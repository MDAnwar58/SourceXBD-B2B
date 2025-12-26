export const Window = (): (Window & typeof globalThis) | undefined => {
   return typeof window !== "undefined"
      ? window
      : (globalThis as Window & typeof globalThis);
};
