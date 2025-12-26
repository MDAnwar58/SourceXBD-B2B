export const getBackgroundColor = (name: string | undefined): string => {
   if (!name) {
      return "#FFFFFF"; // Default color if name is undefined or empty
   }

   const colors = [
      "#FF5733",
      "#33FF57",
      "#3357FF",
      "#FF33A6",
      "#FF8C33",
      "#33FFD5",
      "#A633FF",
      "#FF3333",
      "#33FF8C",
      "#FFD733",
   ];
   const hash = name
      .split("")
      .reduce((acc, char) => acc + char.charCodeAt(0), 0);
   return colors[hash % colors.length];
};

export const getTextColor = (bgColor: string) => {
   // Convert hex to RGB
   const r = parseInt(bgColor.slice(1, 3), 16);
   const g = parseInt(bgColor.slice(3, 5), 16);
   const b = parseInt(bgColor.slice(5, 7), 16);

   // Calculate brightness (luminance formula)
   const brightness = (r * 299 + g * 587 + b * 114) / 1000;
   return brightness > 125 ? "#000000" : "#FFFFFF"; // Black for light backgrounds, white for dark backgrounds
};
