import React from 'react';
import { screen } from '@testing-library/react';
import { Typography } from './Typography';
import { render } from '../test-utils';

describe('Box', () => {
  it('renders a text by default', () => {
    render(<Typography>Test</Typography>);
    expect(screen.getByText('Test')).toBeTruthy();
  });

  it('should have a given attribute', () => {
    render(<Typography data-test="true">Test</Typography>);
    expect(screen.getByText('Test').getAttribute('data-test')).toBe('true');
  });

  it('should render a P by default', () => {
    render(<Typography>Test</Typography>);
    expect(screen.getByText('Test').tagName).toBe('P');
  });

  it('should render a given tag if specified', () => {
    render(<Typography as="span">Test</Typography>);
    expect(screen.getByText('Test').tagName).toBe('SPAN');
  });

  it('should render an h1 tag for variant "h1"', () => {
    render(<Typography variant="h1">Test</Typography>);
    expect(screen.getByText('Test').tagName).toBe('H1');
  });

  it('should render an h3 tag for variant "h1"', () => {
    render(
      <Typography variant="h1" as="h3">
        Test
      </Typography>
    );
    expect(screen.getByText('Test').tagName).toBe('H3');
  });

  it('should render an h2 tag when variant h2', () => {
    render(<Typography variant="h2">Test</Typography>);
    expect(screen.getByText('Test').tagName).toBe('H2');
  });

  it('should render an h3 tag  when variant h3', () => {
    render(<Typography variant="h3">Test</Typography>);
    expect(screen.getByText('Test').tagName).toBe('H3');
  });

  it('should render an h4 tag  when variant h4', () => {
    render(<Typography variant="h4">Test</Typography>);
    expect(screen.getByText('Test').tagName).toBe('H4');
  });

  it('should render an h5 tag  when variant h5', () => {
    render(<Typography variant="h5">Test</Typography>);
    expect(screen.getByText('Test').tagName).toBe('H5');
  });

  it('should render an h6 tag  when variant h6', () => {
    render(<Typography variant="h6">Test</Typography>);
    expect(screen.getByText('Test').tagName).toBe('H6');
  });

  it('should render an h6 tag when variant subtitle1', () => {
    render(<Typography variant="subtitle1">Test</Typography>);
    expect(screen.getByText('Test').tagName).toBe('H6');
  });

  it('should render an h6 tag when variant subtitle2', () => {
    render(<Typography variant="subtitle2">Test</Typography>);
    expect(screen.getByText('Test').tagName).toBe('H6');
  });

  it('should render an p tag when variant body1', () => {
    render(<Typography variant="body1">Test</Typography>);
    expect(screen.getByText('Test').tagName).toBe('P');
  });

  it('should render an p tag when variant body2', () => {
    render(<Typography variant="body2">Test</Typography>);
    expect(screen.getByText('Test').tagName).toBe('P');
  });

  it('should render an span tag when variant caption', () => {
    render(<Typography variant="caption">Test</Typography>);
    expect(screen.getByText('Test').tagName).toBe('SPAN');
  });

  it('should render an span tag when variant overline', () => {
    render(<Typography variant="overline">Test</Typography>);
    expect(screen.getByText('Test').tagName).toBe('SPAN');
  });

  it('renders a text with diferent color', () => {
    render(<Typography color="blue.100">Test</Typography>);
    expect(screen.getByText('Test')).toBeTruthy();
  });

  it('renders a text with ellipsize', () => {
    render(<Typography ellipsize>Test</Typography>);
    expect(screen.getByText('Test')).toBeTruthy();
  });
});
