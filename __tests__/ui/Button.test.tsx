import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from '../../components/ui/Button';
import React from 'react';


describe('Button component', () => {
  it('renders correctly with children', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('applies deactivated class when deactivated is true', () => {
    render(<Button deactivated={true}>Click me</Button>);
    const buttonElement = screen.getByText('Click me');
    expect(buttonElement).toHaveClass('deactivated');
  });

  it('does not call onClick when deactivated is true', () => {
    const onClickMock = jest.fn();
    render(<Button deactivated={true} onClick={onClickMock}>Click me</Button>);
    const buttonElement = screen.getByText('Click me');
    
    fireEvent.click(buttonElement);
    expect(onClickMock).not.toHaveBeenCalled();
  });

  it('applies transparent class when transparent is true', () => {
    render(<Button transparent={true}>Click me</Button>);
    const buttonElement = screen.getByText('Click me');
    expect(buttonElement).toHaveClass('transparent');
  });

  it('calls onClick when deactivated is false', () => {
    const onClickMock = jest.fn();
    render(<Button deactivated={false} onClick={onClickMock}>Click me</Button>);
    const buttonElement = screen.getByText('Click me');
    
    fireEvent.click(buttonElement);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
