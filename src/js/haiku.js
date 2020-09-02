export class Haiku {
  constructor() {
    this.lineArray1 = [];
    this.lineArray2 = [];
    this.lineArray3 = [];
    this.allArrays = false;
  }

  lineToArray(lineinputparameter) {
    const line = lineinputparameter;
    const stringArray = line.split(" ");
    let xArray = [];
    stringArray.forEach(function (word) {
      xArray.push(word);
    });
    return xArray;
  }
}

// const finalString = xArray.join(" ");

//   wordSyllableCount() {

//   }

//   lineSyllableCount() {

//   }
// };
