export class ResizeObserver {
  callback: globalThis.ResizeObserverCallback;
  constructor(callback: globalThis.ResizeObserverCallback) {
    this.callback = callback;
  }
  observe(target: Element) {
    this.callback([{ target } as globalThis.ResizeObserverEntry], this);
  }
  //eslint-disable-next-line @typescript-eslint/no-empty-function
  unobserve() {}

  //eslint-disable-next-line @typescript-eslint/no-empty-function
  disconnect() {}
}
