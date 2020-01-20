  // count how many characters remain
  public countHowManyCharacters(task, paraString, maxNum?) {
    const paragraph = String(paraString);

    switch (task) {
      case 'count':

        return paragraph.length;

      case 'remain':

        return maxNum - paragraph.length;

      default:
        break;
    }
  }