[![Build Status](https://travis-ci.org/gcopley/apparelsorter.js.svg?branch=master)](https://travis-ci.org/gcopley/apparelsorter.js)

# ApparelSorter.js


### The Problem
Trying to sort sizing data can be a pain. Computers don't understand XS is smaller than SM unless we tell them somehow. Computers also don't understand that 'S', 'SM', and 'Small' are all, well, Small.

ApparelSorter.js aims to fix that and make sorting apparel sizes a cinche.


### Suggested Use
ApparelSorter.js can be extremely helpful in e-commerce applications or with any system where apparel data needs to be displayed with the sizes listed in correct order. It's also great if you are working with inconsistent sizing data (some products have 'SM' and others have 'Small')


### Usage
To simply sort an array of sizes, you can call the sort() function.
```javascript
const sorter = require('apparel-sorter');

const sizes = sorter.sort(['XL', 'L', 'SM', 'Medium', 'X Small']); // returns ['X Small','SM','Medium','L','XL']
```
You can also numberify a size. This returns a sorted number that you can use as needed. For example, you could store the returned value in a database for easy sorting in SQL.
```javascript
const index = sorter.numberify('XS'); // returns 6

const index = sorter.numberify('SM'); // returns 9
```


### Installation
Using npm is the preferred and easiest way to install.
```
npm install apparel-sorter
```

### Contributing
Help us make ApparelSorter.js better! Feel free to submit a pull request or to submit issues if you find ApparelSorter isn't getting things done for you.


### Testing
This project uses Mocha to run the tests included with the project.
You can run the tests by simply navigation to the node_modules/apparel-sorter folder and typing one of the below commands
```
$ npm test
$ mocha
```

### License
Please read the License.txt file included with this distribution.

