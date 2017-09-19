/*
Copyright (c) 2015, Grant Copley
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this
  list of conditions and the following disclaimer.

* Redistributions in binary form must reproduce the above copyright notice,
  this list of conditions and the following disclaimer in the documentation
  and/or other materials provided with the distribution.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

var regexes = [
    /^osfa.*$/i,
    /^one .*$/i,
    /^one$/i,
    /^xxs/i,
    /^xs .*$/i,
    /^x sm.*$/i,
    /^xs.*$/i,
    /^.* xs$/i,
    /^xs/i,
    /^sm.*$/i,
    /^.* small/i,
    /^ss/i,
    /^short sleeve/i,
    /^ls/i,
    /^long sleeve/i,
    /^s$/i,
    /^small.*$/i,
    /^s\/.*$/i,
    /^s \/.*$/i,
    /^s .*$/i,
    /^m$/i,
    /^medium.*$/i,
    /^.*med.*$/i,
    /^m .*$/i,
    /^m[A-Za-z]*/i,
    /^M\/.*$/i,
    /^l$/i,
    /^.*lg.*$/i,
    /^large.*$/i,
    /^l .*$/i,
    /^l\/.*$/i,
    /^lt$/i,
    /^xl.*$/i,
    /^x large.*$/i,
    /^.* XL$/i,
    /^x-l.*$/i,
    /^l[A-Za-z]*$/i,
    /^petite l.*$/i,
    /^1x.*$/i,
    /^.* 1x$/i,
    /^2x.*$/i,
    /^.* 2X$/i,
    /^.*XXL.*$/i,
    /^3x.*$/i,
    /^4x.*$/i,
    /^5x.*$/i,
    /^6x.*$/i,
    /^7x.*$/i,
    /^8x.*$/i,
    /^9x.*$/i,
    /^10x.*$/i,
    /^11x.*$/i,
    /^12x.*$/i,
    /^13x.*$/i,
    /^14x.*$/i,
    /^15x.*$/i,
    /^16x.*$/i,
    /^17x.*$/i,
    /^18x.*$/i
].map(function(regex, index) {
    return {regex: regex, index: index};
});

function matchSizesWithRegexes(size, index) {
    return findRegexMatch(patterns=regexes, iteration=0, size=size);
}

function findRegexMatch(patterns, iteration, size) {
    if (patterns.length - 1 >= iteration) {
        if (size.search(patterns[iteration].regex) >= 0) {
            return {regex: patterns[iteration].regex, index: patterns[iteration].index, size: size, sizeVal: parseInt(size) || 0};
        }
        return findRegexMatch(patterns=patterns, iteration=iteration + 1, size=size);
    }
    return {regex: "No Match", index: parseInt(size), size: size, sizeVal: parseInt(size) || 0};
}

function sortSizesByIndex(size1, size2) {
    if (size1.index < size2.index || size1.sizeVal > 0 && size2.sizeVal > 0 && size1.sizeVal < size2.sizeVal) return -1;
    if (size1.index == size2.index || size1.sizeVal > 0 && size2.sizeVal > 0 && size1.sizeVal == size2.sizeVal) return 0;
    return 1;
}

function getSize(result) {
    if (result)
        return result.size;
    return "";
}

function getIndex(result) {
    if (result)
        return result.index;
    return 0;
}

//////////////////////////////////////////////////////////////////

exports.sortSizes = function(sizes) {
    if (!sizes) {
        return [];
    }
    return sizes
        .map(matchSizesWithRegexes)
        .sort(sortSizesByIndex)
        .map(getSize);
};

exports.sizeIndex = function(size) {
    return [size]
        .map(matchSizesWithRegexes)
        .map(getIndex)[0] || 0;
}

exports.sort = exports.sortSizes;
exports.numberify = exports.sizeIndex;
exports.index = exports.sizeIndex; // left for backwards compatability