export const getPaddingClass = (brand: string): string => {
  const brandsWithPadding = ["xiaomi", "apple"];
  const safeBrand = brand ? brand.toLowerCase() : ""; 
  return brandsWithPadding.includes(safeBrand) ? "alternative-padding" : "";
};
