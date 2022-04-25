function reverseString(str) {
    return str.split("").reverse().join("");
}

function slugify(str) {
    return str
        .normalize("NFD")
        .replaceAll(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .trim()
        .replaceAll(/\s+/g, " ")
        .replaceAll(/[-]+/g, "-")
        .replaceAll(/\s/g, "-");
}

export const more = function () {
    String.prototype.__defineGetter__("reverse", function() {
        return reverseString(this);
    });
    String.prototype.__defineGetter__("slugify", function() {
        return slugify(this);
    });
};

