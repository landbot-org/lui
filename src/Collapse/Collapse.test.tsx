import React from 'react';

import { render, screen } from '../test-utils';
import { Collapse } from './Collapse';
import { CollapseContent } from './CollapseContent';
import { CollapseSummary } from './CollapseSummary';

describe('Collapse', () => {
  it('should render Collapse when uncontrolled mode', () => {
    render(
      <Collapse>
        <CollapseSummary>Summary</CollapseSummary>
        <CollapseContent>Content</CollapseContent>
      </Collapse>,
    );

    expect(screen.getByText('Summary')).toBeVisible();
    expect(screen.queryByText('Content')).not.toBeInTheDocument();
  });

  it('should render CollapseContent when click in summary when uncontrolled mode', async () => {
    const { user } = render(
      <Collapse>
        <CollapseSummary>Summary</CollapseSummary>
        <CollapseContent>Content</CollapseContent>
      </Collapse>,
    );

    await user.click(screen.getByRole('button', { name: 'Summary' }));

    expect(screen.getByText('Content')).toBeVisible();
  });

  it('should render Collapse when controlled mode', () => {
    render(
      <Collapse open={false} setOpen={jest.fn()}>
        <CollapseSummary>Summary</CollapseSummary>
        <CollapseContent>Content</CollapseContent>
      </Collapse>,
    );

    expect(screen.getByText('Summary')).toBeVisible();
    expect(screen.queryByText('Content')).not.toBeInTheDocument();
  });

  it('should render Collapse when controlled mode and user clicks', async () => {
    const setOpenMock = jest.fn();
    const { user } = render(
      <Collapse open setOpen={setOpenMock}>
        <CollapseSummary>Summary</CollapseSummary>
        <CollapseContent>Content</CollapseContent>
      </Collapse>,
    );

    await user.click(screen.getByRole('button', { name: 'Summary' }));

    expect(screen.getByText('Content')).toBeVisible();
    expect(setOpenMock).toHaveBeenCalledWith(false);
  });
});
