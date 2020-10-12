module.exports = function check(str, bracketsConfig) {
    // if (str.length % 2 != 0) return false;

    for (let i = str.length; i >= 0; i--) {
        bracketsConfig.forEach((elem) => {
            let compareStr = elem.join("");
            if (str.includes(compareStr)) {
                str = str.replace(compareStr, "");
            }
        });
    }

    return str.length === 0 ? true : false;
};
