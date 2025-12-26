export const TotalPrice = (items: { amount: string }[]): number => {
   return items.reduce((acc, item) => {
      const price = parseFloat(item.amount.replace(/,/g, "")); // Remove commas and parse as a number
      return acc + (isNaN(price) ? 0 : price); // Add to total, ensuring invalid numbers default to 0
   }, 0);
};
