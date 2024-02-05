
import { render } from '@testing-library/react';
import {App} from './App';

test('renders React Photo Viewer text', () => {
  const { getByText } = render(<App />);
  const textElement = getByText(/React Photo Viewer/i);
  expect(textElement).toBeInTheDocument();
});

