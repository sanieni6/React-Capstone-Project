import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import HeaderList from '../components/HeaderList';

describe('HeaderList component', () => {
  test('renders correctly', () => {
    const handleClick = jest.fn();
    const { container } = render(
      <Router>
        <HeaderList year={2021} handleClick={handleClick} />
      </Router>,
    );
    expect(container).toMatchSnapshot();
  });

  test('clicking a year button calls the handleClick function', () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <Router>
        <HeaderList year={2021} handleClick={handleClick} />
      </Router>,
    );
    const button = getByText('2021');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(handleClick).toHaveBeenCalledWith(2021);
  });

  test('displays the correct year', () => {
    const handleClick = jest.fn();
    const { getByText } = render(
      <Router>
        <HeaderList year={2021} handleClick={handleClick} />
      </Router>,
    );
    expect(getByText('2021')).toBeInTheDocument();
  });
});
