# _Are you a poet? , a haiku checker._

---

_Checks if a poem is a haiku, September 1, 2020_

By **_Chloe Hellberg, AJ Markow_**

## Description

_checks word and line values to see if they meet requirements for a haiku. Returns elment with alert if it was true._

## Setup/Installation Requirements

_1. Clone git repository 2. Install dependencies using package.json file 3. Open index.html in a web browser._

## Known Bugs

_No known bugs. It's a flawless application_

## Support and contact details

Chloe.hellberg@gmail.com
alexanderjmarkow@gmail.com

## Technologies Used

_Bootstrap, CSS, Git, HTMl, Javascript, Node_

### License

MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

Copyright (c) 2020 **_Chloe Hellberg, AJ Markow_**

## Specs

- Takes input and splits into 3 lines in a haiku object. Each line as its own array

---

- check input for string/word, not number

1. Describe:
2. Code
3. Test
4. Expect

---

- basic syllable counter in a word function

1. Describe:

- count vowels, subtract silent e's and other potential silent vowels.
- Don't count 2nd vowel if there's two vowels in a row.
- Get final count of syllables from vowel count minus silent e's, and minus 2nd vowel in any diphthongs.
- If theres a consonant after another consonant, add a new syllable, after the first consonant. (ex: in·tel·li·gence, syl·la·ble)
- If theres a single consonant, divide word before that consonant.
- If theres a consonant before an le, then add a new syllable, after the consonant before le.
- Add syllable after common prefixes: dis, in,im,il,ir,un,re
- Add syllable before common suffixes: s,es,ing,ed,ly
  -output wordSyllableCount

2. Code: Prototype on word object? wordSyllableCount(word);
3. Test: wordSyllableCount('syllable')
4. Expect: wordSyllableCount('syllable').toEqual(wordSyllableCount(3))

---

- add words in line to an array.

1. Describe:

- use split (' ') to return individual words and push each as an array element.

2. Code: lineToArray('mary had a little lamb')
3. test lineToArray('mary had a little lamb')
4. Expect. lineToArray().toEqual([mary,had,a,little,lamb])

**TEST PASSED**

---

- sum syllable count per line

1. Describe:
   -Use a loop to iterate over the elements in lineArray() and create a new variable that totals/holds the count to determine syllable count, and returns boolean if number of syllables in line matches correct number. Take in lineArrayOne, lineArrayTwo, lineArrayThree
2. Code: for (let i=0; i < lineToArray.length; i++>); let lineSyllableCount = [this.lineArrayTwo.reduce((a,b) => a + b, 0)]; return syllableCount
3. Test: lineTwoArray [‘Mary’, ‘had’, ‘a’, ‘little’, ‘lamb]
4. Expect: lineSyllableCount === 7, return true; lineSyllableCount > 7 || lineSyllableCount < 7, return false;

## **TEST PASSED**

-function that shows html element 'its a haiku'

1. Describe: checks if lineOneArray,lineTwoArray, and lineThreeArray boolean values are true
2. Code: checkHaiku(a haiku object)
3. Test:checkHaiku( a haiku)
4. Expect:checkHaiku(haiku).toEqual(True).

---

---Schema for:

-----haiku class

-----haiku object

-------lineArray1

-------lineArray2

-------lineArray3

-------boolean (is it a haiku)

-------syllable count for haiku object total()

---functions within the class

-----wordSyllableCount

-----lineSyllableCount

-----lineToArray
