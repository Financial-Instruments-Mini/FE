import { Product } from '../@types/data';

interface Results {
  products: Product[];
  bankValue: string;
  savingValue: string;
}

export const getFilteredResults = ({ products, bankValue, savingValue }: Results) => {
  if (!products) return [];
  const filteredResults: Product[] = products.filter(
    product => savingValue.includes(product.productType) && bankValue.includes(product.bankName),
  );
  console.log(filteredResults);
  return filteredResults;
};
