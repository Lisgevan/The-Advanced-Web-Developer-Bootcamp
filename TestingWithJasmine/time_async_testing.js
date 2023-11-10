// setTimeout
describe("a simple setTimeout", function () {
	var sample;
	beforeEach(function () {
		sample = jasmine.createSpy("sampleFunction");
		jasmine.clock().install();
	});

	afterEach(function () {
		jasmine.clock().uninstall();
	});

	it("is only invoked after 1000 milliseconds", function () {
		setTimeout(function () {
			sample();
		}, 1000);
		jasmine.clock().tick(999);
		expect(sample).not.toHaveBeenCalled();
		jasmine.clock().tick(1);
		expect(sample).toHaveBeenCalled();
	});
});

// setInterval
describe("a simple setInterval", function () {
	var dummyFunction;

	beforeEach(function () {
		dummyFunction = jasmine.createSpy("dummyFunction");
		jasmine.clock().install();
	});

	afterEach(function () {
		jasmine.clock().uninstall();
	});

	it("checks to see the number of times the function is invoked", function () {
		setInterval(function () {
			dummyFunction();
		}, 1000);
		jasmine.clock().tick(999);
		expect(dummyFunction.calls.count()).toBe(0);
		jasmine.clock().tick(1000);
		expect(dummyFunction.calls.count()).toBe(1);
		jasmine.clock().tick(1);
		expect(dummyFunction.calls.count()).toBe(2);
	});
});

// Async tests
function getUserInfo(username) {
	return $.getJSON("https://api.github.com/users/" + username);
}
describe("#getUserInfo", function () {
	it("returns the correct name for the user", function (done) {
		getUserInfo("elie").then(function (data) {
			expect(data.name).toBe("Elie Schoppik");
			done();
		});
	});
});
