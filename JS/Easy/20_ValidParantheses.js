/**
 * Valid Prantheses
 * 
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:
    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.
    Every close bracket has a corresponding open bracket of the same type.
 
Example 1:Input: s = "()"
Output: true

Example 2:Input: s = "()[]{}"
Output: true

Example 3:Input: s = "(]"
Output: false

Example 4:Input: s = "([])"
Output: true
 */

var isValid = function (s) {
  const stack = [];
  const mapping = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (const c of s) {
    if (Object.values(mapping).includes(c)) {
      stack.push(c);
    } else if (mapping.hasOwnProperty(c)) {
      if (!stack.length || mapping[c] !== stack.pop()) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

console.log(isValid("([]})"));

// OR
function isValid1(s) {
  const stack = [];
  const openBrackets = new Set(["(", "{", "["]);
  const mapping = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (const char of s) {
    if (openBrackets.has(char)) {
      stack.push(char);
    } else if (mapping[char]) {
      if (stack.pop() !== mapping[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

console.log(isValid1(")(([])"));
