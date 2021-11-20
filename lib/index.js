"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(price) {
    // stringify
    var priceString = String(price);
    if (priceString.length > 3) {
        // remove any comma separators present and reverse string
        var reversed = priceString.replace(/,/g, "").split("").reverse();
        var newPriceArray = [];
        var counter = 0;
        // count and put a separator after each three
        for (var _i = 0, reversed_1 = reversed; _i < reversed_1.length; _i++) {
            var i = reversed_1[_i];
            newPriceArray.push(i);
            counter++;
            if (counter === 3) {
                newPriceArray.push(",");
                counter = 0;
            }
        }
        // remove starting separator just in case
        var newPriceString = newPriceArray.reverse().join("");
        if (newPriceString.charAt(0) === ",") {
            return newPriceString.substring(1);
        }
        return newPriceString;
    }
    return priceString;
}
exports.default = default_1;
