
import { render } from '@testing-library/react';
import {App} from './App';
import {getImageUrls} from './PhotoViewer/ImageSelector.tsx';
//import renderer from 'react-test-renderer';
import * as renderer from 'react-test-renderer'

test('renders React Photo Viewer text', () => {
  const { getByText } = render(<App />);
  const textElement = getByText(/React Photo Viewer/i);
  expect(textElement).toBeInTheDocument();
});

describe('A unit test to check our imageUrl generation code', function () {    
    test('Broken URL should not be present', function () {
        const brokenURL = 'https://picsum.photos/id/601/1600/900.jpg';
        const urls = getImageUrls();
        urls.forEach( (url) => {expect(url).not.toBe(brokenURL)});        
    });
    
    test('check for the First Link', function () {
        const firstURL = 'https://picsum.photos/id/600/1600/900.jpg';
        const urls = getImageUrls();
        expect(urls[0]).toBe(firstURL);        
    });
});

describe('Regression / Snapshot test', function () {    
    test('Snapshot for App', async function () {
        const tree = renderer.create(<App />).toJSON();
        expect(tree).toMatchSnapshot();   
    });
});


