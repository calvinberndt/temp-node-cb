const {readFile, writeFile} = require('fs')
console.log('start')
readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        console.log(err)
        return
    }
    const first = result
    readFile('./content/second.txt', 'utf8', (err, result) => {
        if (err) {
            console.log(err)
            return
        }
        const second = result
        writeFile('./content/result-async.txt', `Here is the result: ${first}, ${second}`, (err, result) => {
            if (err) {
                console.log(err)
                return
            }
            console.log('done with this task')
        })
    })
})
console.log('starting next task')
// This code demonstrates asynchronous file operations using callbacks
// Here's what's happening step by step:

// 1. First, we import the readFile and writeFile functions from the 'fs' module
//    These are asynchronous versions, unlike readFileSync and writeFileSync

// 2. We read the first file ('first.txt') asynchronously
//    The callback function runs after the file is read
//    If there's an error, we log it and return
//    Otherwise, we store the content in 'first'

// 3. Inside that callback, we read the second file ('second.txt')
//    This creates nested callbacks (sometimes called "callback hell")
//    Again, we handle errors and store content in 'second'

// 4. Finally, in the innermost callback, we write to 'result-async.txt'
//    We combine the contents of both files in the output
//    And handle any potential write errors

// This is asynchronous code - it doesn't block execution
// Operations happen in background while other code can run
// Compare this to the synchronous version in 10-fs-sync.js

// The term "callback" comes from the fact that these functions are "called back" later
// When we pass a function as an argument to another function, that passed function
// is called a "callback function" because it gets called back (executed) at a later time

// For example, in the code above:
readFile('./some-file.txt', 'utf8', (err, data) => {
    // This anonymous function is a callback
    // It's passed as an argument to readFile
    // readFile will "call it back" once it finishes reading the file
})

// Callbacks are a way to handle asynchronous operations
// Instead of waiting for an operation to complete (blocking)
// We provide a function that should run after it's done
// This allows other code to execute while waiting for slow operations

// However, when we need to do multiple async operations that depend on each other
// We end up nesting callbacks inside callbacks (as seen above)
// This creates deeply nested code that's hard to read and maintain
// This pattern is often called "callback hell" or the "pyramid of doom"

// Modern JavaScript provides better solutions like Promises and async/await
// These make asynchronous code easier to write and understand

