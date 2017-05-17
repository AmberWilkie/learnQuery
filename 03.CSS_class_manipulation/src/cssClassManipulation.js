var cssClass = (function () {
  'use strict'
  // The wrapping I'm seeing here seems to imply that we are going to run this when it loads.
  // but we don't have access to element or className
  console.log('base level of cssClass')
  // console.log();
  // function add (element, className) {
  //   console.log('is add running? Then... ', element, className );
  //   // element.addClass(className);
  // };
  // cssClass.add = add;
  // return cssClass.add = add;

  return {
    add: function (element, classToAdd) {
      element.className = classToAdd;
    }
  }
})()


