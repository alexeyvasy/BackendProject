/// this is the unit_test file using JEST Framework
const { sum, multiply } = require("./app");


/// testing multiply function... 
test("should return a result array by multiplying 2 arrays", () => {
    expect(multiply([1,2,3], [1,2,3])).toStrictEqual([1,5,1,2,9]);
});

test("should return a result array by multiplying 2 arrays", () => {
    expect(multiply([0,1,2,3], [1,2,3])).toStrictEqual([1,5,1,2,9]);
});

test("should return a result array by multiplying 2 arrays", () => {
    expect(multiply([0], [1,2,3])).toStrictEqual([0]); 
});

test("should return a result array by multiplying 2 arrays", () => {
    expect(multiply([1,2,3], [0])).toStrictEqual([0]);
});

test("should return a result array by multiplying 2 arrays", () => {
    expect(multiply([0,9,9], [0,0,9,9,0])).toStrictEqual([9,8,0,1,0]);
});


/// testing sum function... 
test("should return a result array by summing 2 arrays", () => {
    expect(sum([0,9,9], [0,0,0,1])).toStrictEqual([1,0,0]);
});

test("should return a result array by summing 2 arrays", () => {
    expect(sum([0,0,0], [1,0,0,1])).toStrictEqual([1,0,0,1]);
});

test("should return a result array by summing 2 arrays", () => {
    expect(sum([9,9,9], [0,0,0,9])).toStrictEqual([1,0,0,8]);
});

test("should return a result array by summing 2 arrays", () => {
    expect(sum([9,9,9,0], [1,0,0,0])).toStrictEqual([1,0,9,9,0]);
});
