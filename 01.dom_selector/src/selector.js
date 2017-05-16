const domSelector = function(selectors) {
  'use strict';

  let nodeList = document.querySelectorAll(selectors);
  if (nodeList.length === 1) {
    nodeList = [document.querySelectorAll(selectors)[0]];
  } else if (nodeList.length === 0) {
    nodeList = [];
  }
  return nodeList;
};