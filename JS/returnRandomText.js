  // generate random ids/text/strings etc
  public generateRandom(length, possibleValue): string {
    const possible = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let randomValue = possibleValue;
    for (let r = 0; r < length; r++) {
      const randomNumber = Math.random() * possible.length;
      randomValue += possible.charAt(randomNumber);
    }

    return randomValue;
  }