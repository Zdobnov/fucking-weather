/* eslint-env jasmine */
import React from 'react';
import TestUtils from 'react-dom/lib/ReactTestUtils';
import {Main} from './main';

describe('hello component', () => {
  it('should render hello world', () => {
    const main = TestUtils.renderIntoDocument(<Main/>);
    const h1 = TestUtils.findRenderedDOMComponentWithTag(main, 'h1');
    expect(h1.textContent).toEqual('Hello world!');
  });
});
