# _{Application Name}_

---

_{Brief description of application}, {Date of current version}_

By **_{List of contributors}_**

## Description

_{Description}_

## Setup/Installation Requirements

_{Setup Requirements}_

## Known Bugs

_{Known Bugs}_

## Support and contact details

_{Contact Details}_

## Technologies Used

_{Technologies Used}_

### License

_{License}_

Copyright (c) 2016 **_{List of contributors}_**

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

2. Code: Prototype on word object? countWordSyllable(word);
3. Test: countWordSyllable('syllable')
4. Expect: countWordSyllable('syllable').toEqual(wordSyllableCount(3))

---

- add words in line to an array.

1. Describe:

- use split (' ') to return individual words and push each as an array element.

2. Code: splitLineToArray('mary had a little lamb')
3. test lineToArray('mary had a little lamb')
4. Expect. lineToArray().toEqual([mary,had,a,little,lamb])

---

- sum syllable count per line

1. Describe:
   -Use a loop to iterate over the elements in lineArray() and create a new variable that totals/holds the count to determine syllable count, and returns boolean if number of syllables in line matches correct number. Take in lineArrayOne, lineArrayTwo, lineArrayThree
2. Code: for (let i=0; i < lineToArray.length; i++>); let lineSyllableCount = [this.lineArrayTwo.reduce((a,b) => a + b, 0)]; return syllableCount
3. Test: lineTwoArray [‘Mary’, ‘had’, ‘a’, ‘little’, ‘lamb]
4. Expect: lineSyllableCount === 7, return true; lineSyllableCount > 7 || lineSyllableCount < 7, return false
