function solve(expression) {
    const stack = [];
    let result = '';

    for (let i = 0; i < expression.length; i++) {
        if (expression[i] === '(') {
            stack.push(result);
            result = '';
        } else if (expression[i] === ')') {
            const temp = stack.pop();
            if (result[0] === '-') {
                result = result.substr(1);
            } else {
                result = '-' + result;
            }
            result = temp + result;
        } else {
            result += expression[i];
        }
    }

    return result;
}

// Test cases
console.log(solve("x-(y+z)")); 
console.log(solve("x-(y-z)")); 
console.log(solve("u-(v-w-(x+y))-z"));
console.log(solve("x-(-y-z)")); 
