const separateThousands = (price: string | number): string => {
  // stringify
  const priceString = String(price);

  if (priceString.length > 3) {
    // remove any comma separators present and reverse string
    const reversed = priceString.replace(/,/g, "").split("").reverse();
    const newPriceArray = [];

    let counter = 0;

    // count and put a separator after each three
    for (const i of reversed) {
      newPriceArray.push(i);
      counter++;
      if (counter === 3) {
        newPriceArray.push(",");
        counter = 0;
      }
    }

    // remove starting separator just in case
    const newPriceString = newPriceArray.reverse().join("");
    if (newPriceString.charAt(0) === ",") {
      return newPriceString.substring(1);
    }

    return newPriceString;
  }

  return priceString;
};

export default separateThousands;
