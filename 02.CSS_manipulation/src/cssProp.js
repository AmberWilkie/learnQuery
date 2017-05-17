function cssProp(element, property, value) {
  'use strict';

  if (typeof(property) === 'string' && value !== undefined) {
    element.setAttribute('style', `${property}: ${value}`)
  } else if (typeof(property) === 'object') {
    Object.assign(element.style, property);
  } else {
    return element.style[property];
  }

}