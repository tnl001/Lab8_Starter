// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2

// testing phone number
test("test phone number - True", () => {
    expect(functions.isPhoneNumber('(123)456-7891')).toBe(true);
});

test("test phone number - True", () => {
    expect(functions.isPhoneNumber('(619)-456-1234')).toBe(true);
});

test("test phone number - False", () => {
    expect(functions.isPhoneNumber('(123)-456-789')).toBe(false);
});

test("test phone number - False", () => {
    expect(functions.isPhoneNumber('(852)-456-')).toBe(false);
});


// testing email
test("test email - True", () => {
    expect(functions.isEmail('abcde@ucsd.edu')).toBe(true);
});

test("test email - True", () => {
    expect(functions.isEmail('456@gmail.com')).toBe(true);
});

test("test email - False", () => {
    expect(functions.isEmail('abcde@ucsd.google.edu')).toBe(false);
});

test("test email - False", () => {
    expect(functions.isEmail('abcde@ucsd.yahoo@ucsd.com')).toBe(false);
});

// testing password
test("test strong password - True", () => {
    expect(functions.isStrongPassword('lkj123ASD_asd')).toBe(true);
});

test("test strong password - True", () => {
    expect(functions.isStrongPassword('asd1234___qwe')).toBe(true);
});

test("test strong password - False", () => {
    expect(functions.isStrongPassword('123asd')).toBe(false);
});

test("test strong password - False", () => {
    expect(functions.isStrongPassword('')).toBe(false);
});

// testing date
test("test date - True", () => {
    expect(functions.isDate('11/12/2021')).toBe(true);
});

test("test date - True", () => {
    expect(functions.isDate('12/24/2021')).toBe(true);
});

test("test date - False", () => {
    expect(functions.isDate('123asd')).toBe(false);
});

test("test date - False", () => {
    expect(functions.isDate('11/12/21')).toBe(false);
});

// testing hexcolor
test("test hexColor - True", () => {
    expect(functions.isHexColor('#373F3C')).toBe(true);
});

test("test hexColor - True", () => {
    expect(functions.isHexColor('#954C3D')).toBe(true);
});

test("test hexColor - False", () => {
    expect(functions.isHexColor('#954C3')).toBe(false);
});

test("test hexColor - False", () => {
    expect(functions.isHexColor('#54CC3D6A')).toBe(false);
});