// 1.1
function isUnique(str) {
  const carry = [];
  let bool = true;
  str.split("").forEach(char => {
    if (carry.includes(char)) {
      bool = false;
    } else {
      carry.push(char);
    }
  });
  return bool;
}

// console.log(isUnique("haha"));
// console.log(isUnique("hap"));

// 1.2
function isPerm(str1, str2) {
  let hash1 = {};
  let hash2 = {};
  str1.split("").forEach(char => {
    if (hash1[char]) {
      hash1[char] += 1;
    } else {
      hash1[char] = 1;
    }
  });

  str2.split("").forEach(char => {
    if (hash2[char]) {
      hash2[char] += 1;
    } else {
      hash2[char] = 1;
    }
  });

  let bool = true;
  Object.keys(hash1).forEach(key => {
    if (!(hash1[key] === hash2[key])) {
      bool = false;
    }
  })
  return bool;

}


console.log(isPerm("haha", "aahh"));
console.log(isPerm("hap", "ap"));

// 1.3

function URLify(str) {
  const arr = str.split(" ");
  const newArr = [];
  arr.forEach(el => {
    if (el !== "") newArr.push(el);
  });
  return newArr.join("%20");
}

URLify("MR John Smith     ");

// 1.4 

function palindromePerm(str) {
  const arr = str.split(" ").join("").toLowerCase().split("");
  console.log(arr);
  hash = {};
  arr.forEach(char => {
    if (hash[char]) {
      hash[char] += 1;
    } else {
      hash[char] = 1;
    }
  });
  let numOdd;
  if (arr.length % 2 === 0) {
    numOdd = 0;
  } else {
    numOdd = 1;
  }
  Object.keys(hash).forEach(key => {
    if (!(hash[key] % 2 === 0)) {
      numOdd -= 1;
    }
  })
  return numOdd === 0;
}

// if even must have event number of count of each char
// if odd must have all even but one odd

// palindromePerm("Tact Coa");

// 1.5 
function editsAway(str1, str2) {
  let edits = 0;
  edits += Math.abs(str1.length - str2.length);
  const iterNum = Math.min(str1.length, str2.length);
  let min;
  let max;
  if (str1.length < str2.length) {
    min = str1;
    max = str2;
  } else {
    min = str2;
    max = str1;
  }
  for (let i = 0; i < iterNum; i++) {
    if (!(max.split("").includes(min[i]))) {
      edits += 1;
    }
  }
  return edits <= 1;
}

editsAway('pale', 'bake');

// 1.6 
function compressString(str) {
  const hash = {};
  str.split("").forEach(char => {
    if (hash[char]) {
      hash[char] += 1;
    } else {
      hash[char] = 1;
    }
  });
  let newStr = "";
  Object.keys(hash).forEach(key => {
    newStr += `${key}${hash[key]}`;
  });
  if (str.length < newStr.length) {
    return str;
  } else {
    return newStr;
  }
}

compressString("abc");

// 1.7
// [[1,2,3],
//  [4,5,6],
//  [7,8,9]]
function rotateMatrix(matrix) {
  const newMatrix = [];
  for (let i = 0; i < matrix.length; i++) {
    const dummy = []
    for (let j = 0; j < matrix.length; j++) {
      dummy.push(matrix[j][i]);
    }
    newMatrix.unshift(dummy);
  }
  return newMatrix;
}


const a = [[1, 2, 3],
[4, 5, 6],
[7, 8, 9]];
rotateMatrix(a);

// 1.8

function zeroMatrix(matrix) {
  const zeroes = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        zeroes.push([i, j]);
      }
    }
  }
  console.log(zeroes);
  zeroes.forEach(pair => {
    const len = matrix[pair[0]].length;
    matrix[pair[0]].fill(0);
    for (let z = 0; z < matrix.length; z++) {
      matrix[z][pair[1]] = 0;
    }
  })
  return matrix;
}

const a = [[1, 2, 3],
[0, 1, 6],
[7, 8, 9]]
zeroMatrix(a);

// 1.9 

function stringRotation(str1, str2) {
  let indx = str2.indexOf(str1[0]);
  let bool = true;
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[indx % str2.length]) {
      bool = false;
    }
    indx += 1;
  }
  return bool;
}

stringRotation('turnip', 'niptur');