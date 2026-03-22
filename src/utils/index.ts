/**
 * This is a validation function to validate the passed element is valid or not.
 *
 * @example
 * createRoot(document.getElementById('root')!) - VALID
 * createRoot(null) - INVALID
 * createRoot(undefined) - INVALID
 * createRoot("") - INVALID
 *
 * @param container
 */
export function isValidDOMContainer(container: Element | Document): boolean {}
