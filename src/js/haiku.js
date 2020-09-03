export default class Haiku {
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

    return stringArray;
  }

  countSyllable() {
    let counter = 0;
    let index = 0;
    this.lineArray1.forEach(function (element) {
      while (index <= element.length) {
        console.log(element);
        // element.split("");
        if (element.match(/[a|e|i|o|u|aa|ee|ii|oo|uu]/gi)) {
          console.log(element);
          counter += 1;
          console.log(counter);
        } else {
        }
        index++;
        console.log(index);
      }
      // console.log(element);
      // // element.split("");
      // if (element.match(/[a|e|i|o|u|aa|ee|ii|oo|uu]/gi)) {
      //   console.log(element);
      //   counter += 1;
      //   console.log(counter);
      // }
    });
    console.log(this.lineArray1);
    // return this.linelengthArray1;
    return counter;
  }

  // countSyllable() {
  //   this.lineArray1.lineToArray();
  //   this.lineArray1.forEach(function)
  // }

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
