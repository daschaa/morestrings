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

function camelCase(str) {
    return str
        .normalize("NFD")
        .replaceAll(/[\u0300-\u036f]/g, "")
        .replaceAll(/[^a-zA-Z0-9]+/g, " ")
        .replace(/^\w|[A-Z]|\b\w/g, function(word, index) {
            return index === 0 ? word.toLowerCase() : word.toUpperCase();
        })
        .replaceAll(/\s+/g, "")
}

export const more = function () {
    String.prototype.__defineGetter__("reverse", function() {
        return reverseString(this);
    });
    String.prototype.__defineGetter__("slugify", function() {
        return slugify(this);
    });
    String.prototype.__defineGetter__("camelCase", function() {
        return camelCase(this);
    });
    Object.defineProperty(String.prototype, 'contains', {
        value: function (search) {
            return this.indexOf(search) >= 0;
        }
    });
};

