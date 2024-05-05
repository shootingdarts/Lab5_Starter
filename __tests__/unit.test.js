// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
//isPhoneNumber
//no country code
 test('check if this is a valid phone number', () => {
   expect(isPhoneNumber("804-991-9494")).toBe(true); 
 });
//added 1 at beginning/country code
 test('check if this is a valid phone number', () => {
  expect(isPhoneNumber("1-804-991-9494")).toBe(true);
});
//Not a string
test('check if this is not a valid phone number', () => {
  expect(isPhoneNumber(804-991-9494)).toBe(false);
});
//missing a trainling digit
test('check if this is not a valid phone number', () => {
  expect(isPhoneNumber("804-991-949")).toBe(false);
});
//isPhoneNumber^^^

//isEmail
//check normal email
test('check if this is a valid email', () => {
  expect(isEmail("j6villanueva@ucsd.edu")).toBe(true);
});
//check all digit email
test('check if this is a valid email', () => {
  expect(isEmail("404@ucsd.edu")).toBe(true);
});
//missing @
test('check if this is not a valid email', () => {
  expect(isEmail("j6villanuevaucsd.edu")).toBe(false);
});
//missing domain
test('check if this is not a valid email', () => {
  expect(isEmail("j6villanueva@")).toBe(false);
});
//isEmail^^^


// isStrongPassword
// password with 11 letters
test('check if lstheithapk is a strong password', () => {
  expect(isStrongPassword("lstheithapk")).toBe(true);
});
// password with 15 letters and numbers and underscore.
test('check if l6sth3eitha4p_k is a strong password', () => {
  expect(isStrongPassword("l6sth3eitha4p_k")).toBe(true);
});
// password with a space
test('check if "hello world" is not a strong password', () => {
  expect(isStrongPassword("hello world")).toBe(false);
});
// empty password
test('check if "hello world" is not a strong password', () => {
  expect(isStrongPassword("")).toBe(false);
});
// isStrongPassword^^^

// isDate
// MM/DD/YYYY
test('check if 08/01/2003 is valid date', () => {
  expect(isDate("08/01/2003")).toBe(true);
});
// M/D/YYYY
test('check if 8/1/2003 is valid date', () => {
  expect(isDate("8/1/2003")).toBe(true);
});
// MM/DD/YY
test('check if 08/01/03 is valid date', () => {
  expect(isDate("08/01/03")).toBe(false);
});
// M//YYYY
test('check if 8//2003 is valid date', () => {
  expect(isDate("8//2003")).toBe(false);
});
// isDate^^^

// isHexColor
// #RRGGBB
test('check if #4287f5 is valid hexcolor', () => {
  expect(isHexColor("#4287f5")).toBe(true);
});
// #RGB
test('check if #82f is valid hexcolor', () => {
  expect(isHexColor("#82f")).toBe(true);
});
// #RRGGB
test('check if #89c42 is valid hexcolor', () => {
  expect(isHexColor("#89c42")).toBe(false);
});
// RRGGBB but z is not a valid hexadecimal
test('check if 89c42z is valid hexcolor', () => {
  expect(isHexColor("89c42z")).toBe(false);
});
// isHexColor^^^
