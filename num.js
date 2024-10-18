const getIncreArr = len => new Array(len).fill(0);
const hasSameEle = (...args) => args.length !== new Set(args).size;

const nums = [];
for (const a in getIncreArr(10)) {
  for (const b in getIncreArr(10)) {
    for (const c in getIncreArr(10)) {
      for (const d in getIncreArr(10)) {
        if (!hasSameEle(a, b, c, d))
          nums.push(a + b + c + d);
      }
    }
  }
}

const rand = nums[Math.floor(Math.random() * nums.length)];

function guess(str) {
  if (hasSameEle(str.split('')))
    return false;
}

function get1a2b(guess, answer) {
  if (guess.length !== answer.length)
    return null;
  let b = 2 * guess.length - new Set((guess + answer).split('')).size;
  const a = guess.split('').filter((c, i) => c === answer[i]).length;
  b -= a;
  return { a, b };
}

function filterArr(guess, { a, b }, arr) {
  return arr.filter((c) => {
    const r = get1a2b(guess, c);
    return r.a === a && r.b === b;
  });
}

console.log(filterArr('1234', { a: 2, b: 2 }, nums));
