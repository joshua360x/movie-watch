import { render, screen } from '@testing-library/react';
import App from './App';
// import Movie from './Movie';
// import MoviesList from './MoviesList';

test('renders learn react link', () => {
  // render(<MoviesList />);
  // const movieClick = screen.getByRole('click');

  // fireEvent.click(movieClick);
  // expect(movieClick.classList.contains('watched')).toBe(true);

  render(<App />);
  const linkElement = screen.getByText(/up/i);
  expect(linkElement).toBeInTheDocument();
});
