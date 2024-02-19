var findPeaks = function (mountain) {
  let peaks = [];
  for (let i = 1; i < mountain.length - 1; i++) {
    if (mountain[i] > mountain[i - 1] && mountain[i] > mountain[i + 1]) {
      peaks.push(i);
    }
  }
  return peaks;
};
let mountain=[1,4,3,8,5]
let result = findPeaks(mountain)
console.log(result);