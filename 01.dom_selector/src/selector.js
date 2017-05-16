const domSelector = function(selectors) {
  'use strict';

  const nodeList = document.querySelectorAll(selectors);

  if (nodeList.length === 1) {
    return [nodeList[0]];
  } else if (nodeList.length === 0) {
    return [];
  } else {
    return nodeList;
  }

};