export const calculateTotalPrice = (items: any[]) => {
   const total = items.reduce((acc, product) => {
      const price = product.discount_price
         ? product.price - product.discount_price
         : product.price;
      return acc + price * product.qty;
   }, 0);
   return total;
};
