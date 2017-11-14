// 5.1

function insertion(n, m, i, j) {
  m = String(m);
  for (let z = 0; z < i; z ++) {
    m += "0";
  }
  return n + parseInt(m);
}

// 5.2 

function binaryToString(num) {
  let n = 1;
  let str = '0.';
  while (n <= 32 && num > 0) {
    if (num >= Math.pow(2, -n)) {
      num -= Math.pow(2, -n);
      str += '1';
    } else {
      str += '0';
    }
    n ++;
  }
  if (n === 33 && num > 0) {
    return "ERROR";
  } else {
    return str;
  }
}

// 5.3

function flipBit(num) {
  num = String(num);
  const leads = [];
  let curr = 0;
  for (let i = 0; i < num.length; i++) {
    if (num[i] === '0') {
      leads.push(curr);
      curr = 0;
    } else {
      curr += 1;
    }
    if (i === num.length - 1) {
      leads.push(curr); 
    }
  }

  let max = 0;
  for (let j = 1; j < leads.length; j ++) {
    if (leads[j-1] + leads[j] + 1 > max) {
      max = leads[j - 1] + leads[j] + 1;
    }
  }
  return max;
}

// 5.4 

function countOnes(string) {
  const strArray = string.split("");
  return strArray.reduce((count, char) => {
    return char === "1" ? count + 1 : count;
  }, 0);
}

function next (number, numOnes, iterator) {
  let currNum = iterator(number);
  while (countOnes(currNum.toString(2)) !== numOnes) {
    currNum = iterator(currNum);
  }
  return currNum;
}

function nextSmallest(number, numOnes) {
  return next(number, numOnes, currNum => currNum - 1);
}

function nextLargest(number, numOnes) {
  return next(number, numOnes, currNum => currNum + 1);
}

function nextNumber(num) {
  const binary = num.toString(2);
  const numOnes = countOnes(binary);
  console.log('number', num.toString(2));
  console.log('nextSmallest', nextSmallest(num, numOnes).toString(2));
  console.log('nextLargest', nextLargest(num, numOnes).toString(2));
}

// 5.5 

// ((n & (n-1)) == 0)
// This checks if a value (truthy or false) & another one returns a false value. 
// So this will work ((1 & (1-1)) == 0) YES
// But this won't work ((5 & (5-1)) == 0) NO

// 5.6

function countBits(number) {
  const string = number.toString(2);
  return string.split('').reduce((numBits, char) => {
    return char === '1' ? numBits + 1 : numBits;
  }, 0);
}

function conversion(number1, number2) {
  return countBits(number1 ^ number2);
}


// 5.7

function pairwiseSwap(number) {
  const oddBits = (number >> 1).toString(2);
  const evenBits = (number << 1).toString(2);
  
  let isOdd = true;
  let answer = '';

  for (let i = 0; i < number.toString(2).length; i++) {
    if (isOdd) {
      answer = oddBits[oddBits.length - 1 - i] === undefined ? '0' + answer : oddBits[oddBits.length - 1 - i] + answer;
    } else {
      answer = oddBits[oddBits.length - 1 - i] === undefined ? '0' + answer : evenBits[evenBits.length - 1 - i] + answer;
    }
    isOdd = !isOdd;
  }
  return answer;
}

// 5.8

function drawLine(screen, width, x1, x2, y) {
  let byte;
  let pixel;

  let findByte = function(x, y, width) {
    const start = y * width / 8;
    return start + Math.floor(x/8);
  };

  let findPixel = function(x) {
    return x % 8;
  };

  for (let i = x1; i <= x2; i++) {
    byte = findByte(i,y,width);
    pixel = findPixel(i);
    screen[byte][pixel] = 1;
  }
  return screen;
}