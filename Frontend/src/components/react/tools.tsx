export function removeLeadingSlash(path: string): string {
   return path.startsWith("/") ? path.slice(1) : path;
}

export const useLettersCounter = (text: string): number => {
   return text.replace(/[^a-zA-Z]/g, "").length; // Removes non-letter characters
};
