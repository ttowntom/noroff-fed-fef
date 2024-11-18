export default function discountCalculator(product) {
  const discount = product.price - product.discountedPrice;

  // Discount with two decimal places
  return discount.toFixed(2);
}
