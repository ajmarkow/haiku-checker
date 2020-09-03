import Haiku from "./../src/js/haiku.js";

describe("Haiku", () => {
  test("Testing Haiku constructor storing data values", () => {
    let thehaiku = new Haiku();
    expect(thehaiku.lineArray1).toEqual([]);
    expect(thehaiku.lineArray2).toEqual([]);
    expect(thehaiku.lineArray3).toEqual([]);
    expect(thehaiku.allArrays).toEqual(false);
  });
});

describe("LineToArray", () => {
  test("Testing linetoarray", () => {
    let thehaiku = new Haiku();
    let xArray = thehaiku.lineToArray("Mary had a little lamb");
    expect(xArray).toEqual(["Mary", "had", "a", "little", "lamb"]);
  });
});

describe("sumLines", () => {
  test("Testing summing the line arrays", () => {
    let thehaiku = new Haiku();
    thehaiku.lineArray1.push(3, 5, 7);
    thehaiku.lineArray2.push(3, 5, 7);
    thehaiku.lineArray3.push(3, 5, 7);
    thehaiku.sumLines();
    expect(thehaiku.linelengthArray1).toEqual(15);
    expect(thehaiku.linelengthArray2).toEqual(15);
    expect(thehaiku.linelengthArray3).toEqual(15);
  });
});

describe("countSyllable", () => {
  test("Testing if vowel count is returned correctly.", () => {
    let thehaiku = new Haiku();
    thehaiku.lineArray1 = ["Mary"];
    let test = thehaiku.countSyllable();
    expect(test).toEqual(1);
  });
  // This is testing the branching in countSyllable
  test("using a vowel leads to if statement being truthy", () => {
    let thehaiku = new Haiku();
    thehaiku.lineArray1 = ["Mary"];
    let expectation = thehaiku.countSyllable();
    expect(expectation).toBeTruthy();
  });
  test("Testing if two vowels in a row counts as one syllable.", () => {
    let thehaiku = new Haiku();
    thehaiku.lineArray1 = ["foo-foo"];
    let test = thehaiku.countSyllable();
    expect(test).toEqual(1);
  });
});
