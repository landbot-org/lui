import { ResizeObserver } from '../mocks';

export const mockResizeObserver = () => {
  global.ResizeObserver = ResizeObserver;
};
