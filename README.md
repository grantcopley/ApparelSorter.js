[![Build Status](https://travis-ci.org/gcopley/apparelsorter.js.svg?branch=master)](https://travis-ci.org/gcopley/apparelsorter.js)

# ApparelSorter.js
ApparelSorter.js is a set of functions written in JavaScript that provide functionality for sorting apparel sizes such as XS, S, M, L. It can also sort numeric sizes such as 12, 14, 16W, 18W, etc.


### Suggested Use
ApparelSorter.js can be helpful in e-commerce applications or with any system where apparel data needs to be displayed with the sizes listed in correct order.


### Usage
To simply sort an array of sizes, you can call the sortSizes() function.
```javascript
var sorter = require('apparel-sorter');
var sizes = sorter.sort(["XL", "L", "S", "M", "XS"]); // returns ["XS","S","M","L","XL"]
```
You can also return the sort index. The sort index could then, for example, be stored in a database for easy sorting in SQL.
```javascript
var index = sorter.index("XS"); // returns a number
```

### Installation
Using npm is the preferred and easiest way to install.
```
npm install apparel-sorter
```

### Testing
This project uses Mocha to run the tests included with the project.
You can run the tests by simply navigation to the node_modules/apparel-sorter folder and typing one of the below commands
```
$ npm test
$ mocha
```

### License
Please read the License.txt file included with this distribution.

