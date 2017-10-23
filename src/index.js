module.exports = function check(str, bracketsConfig) {
  const stack = [];
  stack.top = () => stack[stack.length - 1];

  const bracketsMap = {};
  bracketsConfig.forEach(([open, close]) => bracketsMap[open] = close);
  for(const char of str) {
      if(char === stack.top()) {
          stack.pop();
          continue;
      }

      if(!bracketsMap[char]) {
          return false;
      }

      stack.push(bracketsMap[char]);
  }

  return stack.length === 0;
};
