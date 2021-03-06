"use strict";

const numbers = [9, 6, 1, 2, 4, 10, -3, 15, 7, 3, 8, 0, 5];
console.log(sort(numbers));

function sort(items) {
  if (!items.length) return [];

  const lessPivot = [];
  const morePivot = [];
  const pivot = items[0];

  for (let i = 1; i < items.length; i++) {
    if (items[i] < pivot) lessPivot[lessPivot.length] = items[i];
    else morePivot[morePivot.length] = items[i];
  }

  return sort(lessPivot).concat(pivot, sort(morePivot));
}
