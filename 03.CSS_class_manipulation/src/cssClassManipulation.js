var cssClass = (function () {
  'use strict'

  return {
    add: function (element, classToAdd) {
      element.classList.add(classToAdd);
    },
    remove: function (element, classToRemove) {
      element.classList.remove(classToRemove);
    },
    toggle: function (element, classToToggle) {
      element.classList.toggle(classToToggle);
    },
    has: function(element, classToCheck) {
      return element.classList.contains(classToCheck)
    }
  }
})()


