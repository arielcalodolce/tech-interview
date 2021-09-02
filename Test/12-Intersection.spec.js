const { expect } = require("chai");
const intersection = require("../Ejercicios/12-Intersection/Intersection");

const arr1 = [1,3,5,7,10];
const arr2 = [2,3,6,8,10,20];

describe("Intersection", function() {

	it('When you find the same', () => {

		const result = intersection(arr1, arr2);

		expect(result).to.deep.equal([3, 10]);
	});

	it('When an empty array is received', () => {

		const result = intersection([], arr2);

		expect(result).to.deep.equal([]);
	});

	it('When there are no repeats', () => {

		const result = intersection([33,44,55], arr2);

		expect(result).to.deep.equal([]);
	});
});
