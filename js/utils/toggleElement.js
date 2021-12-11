import { setHeight } from './setHeight.js';

export function toggleElement(container, element) {
  const containerHeight = container.getBoundingClientRect().height;
  const elementHeight = element.getBoundingClientRect().height;

  if (containerHeight === 0) {
    setHeight(container, elementHeight);
  } else {
    setHeight(container, 0);
  }
}
