  // uppercase first letter of string
  public uppercaseFirstLetter(word) {
    const theWord = String(word);
    let upperFLW = '';

    for (let w = 0; w < theWord.length; w++) {
      if (w === 0) {
        upperFLW = theWord[0].toUpperCase();
      } else if (theWord[w - 1] === ' ') {
        upperFLW += theWord[w].toUpperCase();
      } else {
        upperFLW += theWord[w];
      }
    }
    return upperFLW;
  }