//code with alot of repetition
describe("#push", function () {
	it("adds elements to an array", function () {
		var arr = [1, 3, 5];
		arr.push(7);
		expect(arr).toEqual([1, 3, 5, 7]);
	});

	it("returns the new length of the array", function () {
		var arr = [1, 3, 5];
		expect(arr.push(7)).toBe(4);
	});

	it("adds anything into the array", function () {
		var arr = [1, 3, 5];
		expect(arr.push({})).toBe(4);
	});
});

//better way of writing this
describe("Arrays", function () {
	var arr;
	beforeEach(function () {
		arr = [1, 3, 5];
	});
	it("adds elements to an array", function () {
		arr.push(7);
		expect(arr).toEqual([1, 3, 5, 7]);
	});

	it("returns the new length of the array", function () {
		expect(arr.push(7)).toBe(4);
	});

	it("adds anything into the array", function () {
		expect(arr.push({})).toBe(4);
	});
});

//use the afterEach to reset a variale used to many tests
describe("Counting", function () {
	var count = 0;

	beforeEach(function () {
		count++;
	});

	afterEach(function () {
		count = 0;
	});

	it("has a counter that increments", function () {
		expect(count).toBe(1);
	});

	it("gets reset", function () {
		expect(count).toBe(1);
	});
});

// beforeAll / afterAll
// run before/after all tests! Does not reset in between

var arr = [];
beforeAll(function () {
	arr = [1, 2, 3];
});
describe("Counting", function () {
	it("starts with an array", function () {
		arr.push(4);
		expect(1).toBe(1);
	});
	it("keeps mutating that array", function () {
		console.log(arr); // [1,2,3,4]
		arr.push(5);
		expect(1).toBe(1);
	});
});
describe("Again", function () {
	it("keeps mutating the array...again", function () {
		console.log(arr); // [1,2,3,4,5]
		expect(1).toBe(1);
	});
});

//nesting describe blocks
describe("Array", function () {
	var arr;
	beforeEach(function () {
		arr = [1, 3, 5];
	});
});

//pending tests
describe("Pending specs", function () {
	xit("can start with an xit", function () {
		expect(true).toBe(true);
	});

	it("is a pending test if there is no callback function");

	it("is pending if the pending function is invoked inside the callback", function () {
		expect(2).toBe(2);
		pending();
	});
});
