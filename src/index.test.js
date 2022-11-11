import {render, screen, cleanup} from '@testing-library/react';
import Header from './index';
import Body from './index';
// import ImageButton from './index';
// import DogAPI from './index';
import '@testing-library/jest-dom';

afterEach => {
    cleanup();
}

test('should render the correct title', () => {
    render(<Header />);
    const title = screen.getByTestId('HeaderTest');
    expect(title).toBeInTheDocument();
    expect(title).toContainHTML('<h1>React Webpage</h1>');
});

test('should render the correct body', () => {
    render(<Body />);
    const body = screen.getByTestId('BodyTest');
    expect(body).toBeInTheDocument();
    expect(body).toContainHTML('<p>This is a webpage made with the use of React</p>');
})