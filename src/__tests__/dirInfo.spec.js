import React from 'react';
import renderer from 'react-test-renderer';
import DirInfo from '../jsx/DirInfo';

jest.mock('electron');

describe('Directory Info', () => {
  it('shows directory contents', () => {
    const tree = renderer.create(
      <DirInfo/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
