import { RootType } from './types';

/**
 * This is createRoot, which takes root element which we want to render.
 * The root element is defined in our index.html page.
 *
 * @example
 * createRoot(document.getElementById('root')!)
 *
 * @returns
 * It will return a render function.
 *
 * @example
 * createRoot(document.getElementById('root')!).render(<App />)
 */
export function createRoot(container: Element | Document): RootType {
  return {
    render() {},
  };
}
