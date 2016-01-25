var apparelSorter = require('../lib/ApparelSorter.js');
var assert = require('assert');

describe("sort() functionality", function() {

    it("should return empty array if not passed any sizes", function() {
        assert.deepEqual([], apparelSorter.sort());
    });

    it("should sort standard abbreviated sizes", function() {
        var sizes = ["XL", "L", "S", "M", "XS","3XL","1XL","2XL"];
        assert.deepEqual(["XS","S","M","L","XL","1XL","2XL","3XL"], apparelSorter.sort(sizes));
    });

    it("should sort XXL as if it were 2XL", function() {
        var sizes = ["3XL","1XL","XXL"];
        assert.deepEqual(["1XL", "XXL", "3XL"], apparelSorter.sort(sizes));
        var sizes = ["3XL","1XL","2XL"];
        assert.deepEqual(["1XL", "2XL", "3XL"], apparelSorter.sort(sizes));
    });

    it("should sort extended sizes", function() {
        var sizes = ["6X","5X","9XL","3XL", "2X","1X","18X","13X"];
        assert.deepEqual(["1X","2X","3XL","5X","6X","9XL","13X","18X"], apparelSorter.sort(sizes));
    });

    it("should sort size ranges with forward slashes such as X/S, S/M, etc.", function() {
        var sizes = ["L/XL","XS/S","S/M"];
        assert.deepEqual(["XS/S","S/M","L/XL"], apparelSorter.sort(sizes));
    });

    it("should sort numeric sizes", function() {
        var sizes = ["18W", "16", "14", "12", "10", "8", "6", "4", "2", "0"];
        assert.deepEqual(["0","2","4","6","8","10","12","14","16","18W"], apparelSorter.sort(sizes));
    });

    it("should sort short sleeve and long sleeve", function() {
        var sizes = ["LS", "SS"];
        assert.deepEqual(["SS","LS"], apparelSorter.sort(sizes));
        var sizes = ["Long Sleeve", "Short Sleeve"];
        assert.deepEqual(["Short Sleeve","Long Sleeve"], apparelSorter.sort(sizes));
    });

    it("should sort ranges such as 28-30, 32-34, etc.", function() {
        var sizes = ["20-22", "16-18", "10-12", "16W-18W"];
        assert.deepEqual(["10-12", "16-18", "16W-18W", "20-22"], apparelSorter.sort(sizes));
    });

    it("should sort talls", function() {
        var sizes = ["2XLT", "XLT", "LT"];
        assert.deepEqual(["LT", "XLT", "2XLT"], apparelSorter.sort(sizes));
    });

    it("should sort unfinished lengths", function() {
        var sizes = ["36","34","35","36U"];
        assert.deepEqual(["34","35","36","36U"], apparelSorter.sort(sizes));
        var sizes = ["36","34","35","36 Unfinished"];
        assert.deepEqual(["34","35","36","36 Unfinished"], apparelSorter.sort(sizes));
        var sizes = ["36","34","35","36 Unf"];
        assert.deepEqual(["34","35","36","36 Unf"], apparelSorter.sort(sizes));
    });

    it("calling sortSizes() function instead of sort() should still work", function() {
        var sizes = ["3XL","1XL","XXL"];
        assert.deepEqual(["1XL", "XXL", "3XL"], apparelSorter.sortSizes(sizes));
        var sizes = ["3XL","1XL","2XL"];
        assert.deepEqual(["1XL", "2XL", "3XL"], apparelSorter.sortSizes(sizes));
    });

});

describe("index() functionality", function() {

    it("should return a numeric value for various sizes", function() {
        assert(apparelSorter.index("XS") > 0);
        assert(apparelSorter.index("Small") > 0);
        assert(apparelSorter.index("Large") > 0);
    });

    it("should return zero for unknown size", function() {
        assert(apparelSorter.index("UnknownSize") == 0);
        assert(apparelSorter.index("This is a very large unknown size") == 0);
    });

    it("calling sizeIndex() function instead of index() should still work", function() {
        assert(apparelSorter.sizeIndex("XS") > 0);
        assert(apparelSorter.sizeIndex("Small") > 0);
        assert(apparelSorter.sizeIndex("Large") > 0);
    });

});