import React from 'react';
import renderer from 'react-test-renderer';
import FileInfo from '../jsx/FileInfo';

jest.mock('electron');

describe('File Info', () => {
  it('shows file contents', () => {
    const tree = renderer.create(
      <FileInfo/>
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
