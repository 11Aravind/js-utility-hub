<p align="center">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/540px-Npm-logo.svg.png" alt="npm logo" />
</p>



# Utility Functions Package
```markdown

This package provides a set of utility functions to handle common operations like form validation, date manipulation, string formatting, and more.

```

## Installation

You can install this package via npm or yarn:


```bash
npm install js-utility-hub

```

or

```bash
yarn add js-utility-hub
```

## Functions

### 1. **isTextOrNumber(value)**

Checks if the value is a string or a number.

```js
isTextOrNumber('Hello'); // true
isTextOrNumber(123); // true
isTextOrNumber(true); // false
```

### 2. **isNumber(value)**

Checks if the value is a valid number.

```js
isNumber('123'); // false
isNumber(123); // true
```

### 3. **isString(value)**

Checks if the value is a string.

```js
isString('Hello'); // true
isString(123); // false
```

### 4. **removeSpecialCharacter(value)**

Removes all special characters from the string.

```js
removeSpecialCharacter('Hello!@#$'); // 'Hello'
```

### 5. **preventNumSpecialChars(value)**

Removes numbers and special characters, keeping only alphabetic characters.

```js
preventNumSpecialChars('Hello123!@#'); // 'Hello'
```

### 6. **isAlphabeticOnly(value)**

Checks if the string contains only alphabetic characters.

```js
isAlphabeticOnly('Hello'); // true
isAlphabeticOnly('Hello123'); // false
```

### 7. **itIsEmail(value)**

Validates if the value is a valid email address.

```js
itIsEmail('test@example.com'); // true
itIsEmail('invalid-email'); // false
```

### 8. **preventFirstLetterZero(value)**

Removes leading zeros from the string.

```js
preventFirstLetterZero('0123'); // '123'
```

### 9. **generateCaptchaCode()**

Generates a random 6-digit captcha code.

```js
generateCaptchaCode(); // e.g., '483920'
```

### 10. **getAge(DOB)**

Calculates the age from the provided date of birth (format: `YYYY-MM-DD`).

```js
getAge('2000-01-01'); // e.g., 25
```

### 11. **getDateFromToday()**

Returns the current date.

```js
getDateFromToday(); // e.g., '2025-02-01'
```

### 12. **BlankValidation(value)**

Checks if the value is empty or null.

```js
BlankValidation(''); // true
BlankValidation('Hello'); // false
```

### 13. **CamelCase(str)**

Converts a string to camel case format.

```js
CamelCase('hello world'); // 'helloWorld'
```

### 14. **capitalizeFirstLetter(string)**

Capitalizes the first letter of the string.

```js
capitalizeFirstLetter('hello'); // 'Hello'
```

### 15. **getMonthsRange(range, startdate, enddate)**

Returns an array of months between the given start date and end date (default is 3 months).

```js
getMonthsRange(3, '2023-01-01', '2023-04-01'); // ['Jan 2023', 'Feb 2023', 'Mar 2023']
```

### 16. **findMinutesDiff(date1, date2)**

Finds the difference in minutes between two dates.

```js
findMinutesDiff('2023-01-01T10:00:00', '2023-01-01T10:30:00'); // 30
```

### 17. **findDateDifference(end_date, start_date)**

Finds the difference in days between two dates.

```js
findDateDifference('2023-01-05', '2023-01-01'); // 4
```

### 18. **containsUpperCase(str)**

Checks if the string contains uppercase letters.

```js
containsUpperCase('Hello'); // true
containsUpperCase('hello'); // false
```

### 19. **downloadPDFFile(fileContent, fileName)**

Downloads a PDF file with the provided content.

```js
downloadPDFFile('Hello, world!', 'hello.pdf');
```

### 20. **downloadCsv(fileContent, fileName)**

Downloads a CSV file with the provided content.

```js
downloadCsv('Name, Age\nJohn, 25', 'people.csv');
```

### 21. **JSONParse(value)**

Parses the given JSON string and returns the result or `null` if invalid.

```js
JSONParse('{"key":"value"}'); // { key: 'value' }
JSONParse('{invalid}'); // null
```

### 22. **isValidJSON(jsonString)**

Checks if the given string is a valid JSON string.

```js
isValidJSON('{"key":"value"}'); // true
isValidJSON('{invalid}'); // false
```

### 23. **isValidPanCardNo(panCardNo)**

Validates the PAN card number.

```js
isValidPanCardNo('ABCDE1234F'); // true
isValidPanCardNo('ABCDE123'); // false
```

### 24. **isValidaadharCardNo(aadharCardNo)**

Validates the Aadhar card number.

```js
isValidaadharCardNo('123456789012'); // true
isValidaadharCardNo('1234567890'); // false
```

### 25. **checkWordLength(word, length)**

Checks if the word length is equal to the given length.

```js
checkWordLength('hello', 5); // true
checkWordLength('hello', 6); // false
```

### 26. **checkWordLengthLessThan(word, length)**

Checks if the word length is less than the given length.

```js
checkWordLengthLessThan('hello', 6); // true
checkWordLengthLessThan('hello', 4); // false
```

### 27. **checkWordLengthGreaterThan(word, length)**

Checks if the word length is greater than the given length.

```js
checkWordLengthGreaterThan('hello', 4); // true
checkWordLengthGreaterThan('hello', 6); // false
```

### 28. **isEqual(value1, value2)**

Checks if two values are equal.

```js
isEqual(1, 1); // true
isEqual('Hello', 'hello'); // false
```

## DEVELOPED BY

Aravind A S 🚀

