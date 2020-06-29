const createScale0 = (arg0, arg1) => {
// should have checks to make sure that the arguments have the appropriate data types
// such as if (typeOf arg0 === "array" || Array.isArray(arg0)) and the length is the expected size
  const dataSpread = arg0[1]-arg0[0], 
    dataMin = arg0[0];
  const pixelSpread = arg1[1]-arg1[0],
    pixelMin = arg1[0];

  return (dataPoint) => {
    const plotA = (dataPoint - dataMin), 
      plotB = (dataSpread - dataMin),
      base = pixelMin + pixelSpread;
    return base * (plotA / plotB);
  }; 
}

const scale0 = createScale0([0,5], [0,100]);
const scaleIncome0 = createScale0([0,150000], [0,100]);
console.log(scale0(2)); // -> 40
console.log(scale0(4)); // -> 80
console.log(scaleIncome0(300)); // -> 0.2

/** 
* I based this on D3.js and documentation from https://www.d3indepth.com/scales
* I created this option to use an object-based method similar to the function calls D3 uses for domain() and range()
* I broke it down to make it easier to follow
*/

const createScale1 = (params) => {
  const { domain, range } = params,
    startDomain = domain[0],
    stopDomain = domain[1],
    startRange = range[0],
    stopRange = range[1];

  return (dataPoint) => {
  // plotA, and plotB are similar to pixelSpread and dataSpread in createScale0 but broken down for readability
    const plotA = (stopRange - startRange), 
      plotB = ((dataPoint - startDomain) / (stopDomain - startDomain));
    return startRange + plotA * plotB;
  }
}

const scale1 = createScale1({domain: [0,5], range: [0,100]});
const scaleIncome = createScale1({domain: [0,150000], range:[0,100]})
console.log(scale1(2)); // -> 40
console.log(scale1(4)) // -> 80
console.log(scaleIncome1(300)) // -> 0.2;
