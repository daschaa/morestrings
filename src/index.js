function reverseString(str) {
    return str.split("").reverse().join("");
}
export const more = function () {
    String.prototype.__defineGetter__("reverse", function() {
        return reverseString(this);
    });
};

