const items = ['item1', 'item2'] //an array of strings
const person = {
    name: 'bob', //a key-value pair
}


//exporting a single item as an object
//the key will be singlePerson and the value will be person value
module.exports.singlePerson = person


//exporting multiple items as an object
//the key will be items and the value will be an array of strings
module.exports.items = ['item1', 'item2']
