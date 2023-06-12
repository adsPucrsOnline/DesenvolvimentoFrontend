import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Postcard from './Postcard';

describe('Postcard', () => {
  const postcard = {
    id: 1,
    name: 'Postcard Name',
    imageUrl: 'https://example.com/image.jpg',
    city: 'City Name',
    country: 'Country Name',
  };

  it('should render postcard details', () => {
    render(<Postcard postcard={postcard} />);

    const postcardName = screen.getByText(postcard.name);
    const postcardImage = screen.getByAltText(postcard.name);
    const postcardCity = screen.getByText(postcard.city);
    const postcardCountry = screen.getByText(postcard.country);

    expect(postcardName).toBeInTheDocument();
    expect(postcardImage).toBeInTheDocument();
    expect(postcardCity).toBeInTheDocument();
    expect(postcardCountry).toBeInTheDocument();
  });

  it('should call onDelete when delete button is clicked', () => {
    const onDelete = jest.fn();
    render(<Postcard postcard={postcard} onDelete={onDelete} />);

    const deleteButton = screen.getByTestId('delete-button');
    fireEvent.click(deleteButton);

    expect(onDelete).toHaveBeenCalledWith(postcard.id);
  });
});
