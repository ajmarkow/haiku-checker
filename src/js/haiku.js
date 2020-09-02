export class Haiku {
  constructor() {
    this.lineArray1 = [];
    this.linelengthArray1 = 0;
    this.lineArray2 = [];
    this.linelengthArray2 = 0;
    this.lineArray3 = [];
    this.linelengthArray3 = 0;
    this.allArrays = false;
  }

  lineToArray(lineInputParameter) {
    const line = lineInputParameter;
    const stringArray = line.split(" ");
    let xArray = [];
    stringArray.forEach(function (word) {
      xArray.push(word);
    });
    return xArray;
  }
  sumLines() {
    const sumFunction = (a, b) => a + b;
    this.linelengthArray1 = this.lineArray1.reduce(sumFunction);
    this.linelengthArray2 = this.lineArray2.reduce(sumFunction);
    this.linelengthArray3 = this.lineArray3.reduce(sumFunction);
  }
}

// const finalString = xArray.join(" ");

//   wordSyllableCount() {

//   }

//   lineSyllableCount() {

//   }
// };
