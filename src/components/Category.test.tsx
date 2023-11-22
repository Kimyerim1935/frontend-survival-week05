import {
  render, screen, fireEvent,
} from '@testing-library/react';

import Category from './Category';

describe('RestaurantTable ', () => {
  const category = '한식';
  const setFilterCategory = jest.fn();

  function renderCategory() {
    render((
      <Category
        category={category}
        setFilterCategory={setFilterCategory}
      />
    ));
  }

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders Categories', async () => {
    renderCategory();
    screen.getByText(/힌식/);
  });

  it('listens for category click event', () => {
    renderCategory();

    fireEvent.click(screen.getByText('한식'));

    expect(setFilterCategory).toBeCalledWith(category);
  });
});