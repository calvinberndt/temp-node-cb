// npm - global command, comes with node
// npm - local command, comes with express

// install express
// npm install express

//local dependency - use it only in this particular project
// npm i <package name

//global dependency - use it in any project
// npm install -g <package name>


//sudo npm install -g <package name> (macOS/Linux)


//package.json - manifest file (lists all the dependencies and scripts)
// npm init -y (creates package.json file)

// npm install express

// npm install express --save-dev (dev dependency)


const _ = require('lodash')

const items = [1,[2,[3,[4]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)