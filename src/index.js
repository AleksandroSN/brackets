/*module.exports = function check(str, bracketsConfig) {
    for (let i = str.length; i >= 0; i--) {
        bracketsConfig.forEach((elem) => {
            let compareStr = elem.join("");
            if (str.includes(compareStr)) {
                str = str.replace(compareStr, "");
            }
        });
    }

    return str.length === 0 ? true : false;
};*/

//решение через стек
module.exports = function check(str, bracketsConfig) {
    let stack = [];
    let bracketsPair = bracketsConfig.flat();
    for (let bracket of str) {
        let bracketsIndex = bracketsPair[bracketsPair.indexOf(bracket) + 1];
        if (bracket === stack[stack.length - 1]) {
            stack.pop();
        } else {
            stack.push(bracketsIndex);
        }
    }

    return stack.length === 0 ? true : false;
}
