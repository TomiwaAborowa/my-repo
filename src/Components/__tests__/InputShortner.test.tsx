import {render, screen, cleanup } from '@testing-library/react';
import InputShortener from '../InputShortener';

afterEach(() => {
    cleanup();
}
);

test('should render InputShortener component', () => {
    render(<InputShortener setInputValue={function (value: string): void {
        throw new Error('Function not implemented.');
    } } />);
    const InputShortenerElement = screen.getByTestId('urlshort-1');
    expect(InputShortenerElement).toBeInTheDocument();
    expect(InputShortenerElement).toHaveTextContent('Shorten your Url');
}
);