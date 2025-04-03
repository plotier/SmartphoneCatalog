import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProductCard from '../components/ProductCard'; 
import { Product } from '@/types/product';

describe('ProductCard', () => {
  const mockProduct: Product = {
    id: '1',
    name: 'Test Product',
    brand: 'Test Brand',
    basePrice: 99.99,
    imageUrl: 'https://www.RiverPlate.com',
    capacity:''
  };

  it('should render the component with minimum size when isMinSize is true', () => {
    render(<ProductCard product={mockProduct} isMinSize={true} />);

    const image = screen.getByRole('img');
    expect(image).toHaveClass('isMinSize');
  });

  it('should navigate to the correct product detail page on click', () => {
    const { container } = render(<ProductCard product={mockProduct} />);


    const link = container.querySelector('a');
    expect(link).toHaveAttribute('href', `/product-detail/${mockProduct.id}`);
  });
});
