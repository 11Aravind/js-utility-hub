// Check if value is text or number
function isTextOrNumber(value) {
    return typeof value === 'string' || typeof value === 'number';
  }
  
  // Check if value is a number
  function isNumber(value) {
    return !isNaN(value);
  }
  
  // Check if value is a string
  function isString(value) {
    return typeof value === 'string';
  }
  
  // Remove special characters from string
  function removeSpecialCharacter(value) {
    return value.replace(/[^a-zA-Z0-9 ]/g, '');
  }
  
  // Prevent numbers and special characters
  function preventNumSpecialChars(value) {
    return value.replace(/[^a-zA-Z]/g, '');
  }
  
  // Check if string is alphabetic only
  function isAlphabeticOnly(value) {
    return /^[A-Za-z]+$/.test(value);
  }
  
  // Validate email
  function itIsEmail(value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  }
  
  // Prevent first letter from being zero
  function preventFirstLetterZero(value) {
    return value.replace(/^0/, '');
  }
  
  // Generate captcha code (6-digit random number)
  function generateCaptchaCode() {
    return Math.floor(100000 + Math.random() * 900000).toString();
  }
  
  // Get age from DOB (date format: YYYY-MM-DD)
  function getAge(DOB) {
    const birthDate = new Date(DOB);
    const ageDifMs = Date.now() - birthDate.getTime();
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
  
  // Get date from today or calculate age
  function getDateFromToday() {
    return new Date().toLocaleDateString(); // Adjust format if needed
  }
  
  // Blank validation (check if empty or null)
  function BlankValidation(value) {
    return value === null || value.trim() === '';
  }
  
  // Convert string to camel case
  function CamelCase(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) => index === 0 ? match.toLowerCase() : match.toUpperCase()).replace(/\s+/g, '');
  }
  
  // Capitalize the first letter of a string
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
  // Get months range (e.g., 3 months from startdate to enddate)
  function getMonthsRange(range = 3, startdate, enddate) {
    const start = new Date(startdate);
    const end = new Date(enddate);
    const months = [];
    
    while (start <= end) {
      months.push(start.toLocaleString('default', { month: 'short', year: 'numeric' }));
      start.setMonth(start.getMonth() + 1);
    }
    
    return months.slice(0, range);
  }
  
  // Find difference in minutes between two dates
  function findMinutesDiff(date1, date2) {
    const diff = Math.abs(new Date(date2) - new Date(date1));
    return Math.floor(diff / 60000);
  }
  
  // Find date difference in days
  function findDateDifference(end_date, start_date) {
    const diff = new Date(end_date) - new Date(start_date);
    return Math.floor(diff / (1000 * 60 * 60 * 24)); // Days
  }
  
  // Check if string contains uppercase letters
  function containsUpperCase(str) {
    return /[A-Z]/.test(str);
  }
  
  // Download PDF file (async)
  async function downloadPDFFile(fileContent, fileName) {
    const pdfDoc = new jsPDF();
    pdfDoc.text(fileContent, 10, 10);
    pdfDoc.save(fileName);
  }
  
  // Download CSV file (async)
  async function downloadCsv(fileContent, fileName) {
    const blob = new Blob([fileContent], { type: 'text/csv' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = fileName;
    link.click();
  }
  
  // JSON parse function
  function JSONParse(value) {
    try {
      return JSON.parse(value);
    } catch (e) {
      return null;
    }
  }
  
  // Validate if JSON is valid
  function isValidJSON(jsonString) {
    try {
      JSON.parse(jsonString);
      return true;
    } catch (e) {
      return false;
    }
  }
  
  // Validate PAN Card number
  function isValidPanCardNo(panCardNo) {
    const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
    return panRegex.test(panCardNo);
  }
  
  // Validate Aadhar Card number
  function isValidaadharCardNo(aadharCardNo) {
    const aadharRegex = /^\d{12}$/;
    return aadharRegex.test(aadharCardNo);
  }
  
  // Check if word length is equal to the given length
  function checkWordLength(word, length) {
    return word.length === length;
  }
  
  // Check if word length is less than the given length
  function checkWordLengthLessThan(word, length) {
    return word.length < length;
  }
  
  // Check if word length is greater than the given length
  function checkWordLengthGreaterThan(word, length) {
    return word.length > length;
  }
  
  // Check if two values are equal
  function isEqual(value1, value2) {
    return value1 === value2;
  }
  
  // Exporting all functions
  module.exports = {
    isTextOrNumber,
    isNumber,
    isString,
    removeSpecialCharacter,
    preventNumSpecialChars,
    isAlphabeticOnly,
    itIsEmail,
    preventFirstLetterZero,
    generateCaptchaCode,
    getAge,
    getDateFromToday,
    BlankValidation,
    CamelCase,
    capitalizeFirstLetter,
    getMonthsRange,
    findMinutesDiff,
    findDateDifference,
    containsUpperCase,
    downloadPDFFile,
    downloadCsv,
    JSONParse,
    isValidJSON,
    isValidPanCardNo,
    isValidaadharCardNo,
    checkWordLength,
    checkWordLengthLessThan,
    checkWordLengthGreaterThan,
    isEqual,
  };
  