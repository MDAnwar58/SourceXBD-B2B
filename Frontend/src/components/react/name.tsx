export const getInitials = (fullName: string | undefined | null): string => {
   if (!fullName || fullName.trim() === "") {
      return "";
   }
   const nameParts = fullName.split(" ");
   if (nameParts.length > 1) {
      return nameParts[0][0].toUpperCase() + nameParts[1][0].toUpperCase(); // Full initials (e.g., "RI")
   }
   return nameParts[0][0].toUpperCase();
};
