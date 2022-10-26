import React from 'react';
import { render, screen } from '@testing-library/react';
import { Typography, H1, H2, H3, P, Small, Span } from './Typography';

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

it('H1 should render an h1 tag', () => {
  render(<H1>Test</H1>);
  expect(screen.getByText('Test').tagName).toBe('H1');
});

it('H2 H1 should render an h2 tag', () => {
  render(<H2>Test</H2>);
  expect(screen.getByText('Test').tagName).toBe('H2');
});

it('H3 H1 should render an h3 tag', () => {
  render(<H3>Test</H3>);
  expect(screen.getByText('Test').tagName).toBe('H3');
});

it('P should render a paragraph', () => {
  render(<P>Test</P>);
  expect(screen.getByText('Test').tagName).toBe('P');
});

it('Small should render a small tag', () => {
  render(<Small>Test</Small>);
  expect(screen.getByText('Test').tagName).toBe('SMALL');
});

it('Span should render a span tag', () => {
  render(<Span>Test</Span>);
  expect(screen.getByText('Test').tagName).toBe('SPAN');
});

it('should use title attribute when ellipsize', () => {
  render(<Typography ellipsize>Test</Typography>);
  expect(screen.getByText('Test')).toHaveAttribute('title', 'Test');
});
