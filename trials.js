"use strict"; //Strict mode turn on
// Md Mahadi Hasan Rifat
// Breaking Record Hackerrank coding challange

const breakingRecords = function (n) {
  let maxScore = n[0];
  let minScore = n[0];
  let maxBroke = 0;
  let minBroke = 0;
  // for loop iteration for traverse all the arrays
  for (let i = 0; i < n.length; i++) {
    if (n[i] > maxScore) {
      maxScore = n[i];
      maxBroke++;
    }

    if (n[i] < minScore) {
      minScore = n[i];
      minBroke++;
    }
  }
  return [maxBroke, minBroke];
};

console.log(breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42]));

// Fred offei
// Minimum Distances Challenge

function minimumDistances(a) {
  let distances = [];
  // for loop iteration for traverse all the arrays
  for (let i = 0; i < a.length; i++) {
    if (a.indexOf(a[i]) !== a.lastIndexOf(a[i])) {
      let min = a.lastIndexOf(a[i]) - a.indexOf(a[i]);
      distances.push(min);
    }
  }

  if (distances.length === 0) {
    return -1;
  } else {
    distances.sort(function (a, b) {
      return a - b;
    });

    return distances[0];
  }
}
