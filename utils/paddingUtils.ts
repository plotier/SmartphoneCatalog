export const getPaddingClass = (brand: string): string => {
    const brandsWithPadding = ["xiaomi", "apple"];
    return brandsWithPadding.includes(brand.toLowerCase()) ? "alternative-padding" : "";
  };
  