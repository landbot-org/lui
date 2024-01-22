import React, { CSSProperties } from 'react';

import { Transition } from 'react-transition-group';

import { SlideDownProps } from './SlideDown.types';

const defaultMaxHeight = '500px';

export const SlideDown = ({ visible = false, duration = 500, children, style }: SlideDownProps) => {
  const defaultStyle: CSSProperties = {
    transition: `max-height ${duration}ms ease-in-out`,
    overflow: 'hidden',
  };

  const transitionStyles: { [key: string]: CSSProperties } = {
    entering: { maxHeight: defaultMaxHeight },
    entered: { maxHeight: 'unset', overflow: 'visible' },
    exiting: { maxHeight: 0 },
    exited: { maxHeight: 0 },
  };

  return (
    <Transition in={visible} timeout={duration}>
      {(state) => (
        <div
          style={{
            ...defaultStyle,
            ...transitionStyles[state],
            ...style,
          }}
          hidden={state === 'exited'}
        >
          {children}
        </div>
      )}
    </Transition>
  );
};
