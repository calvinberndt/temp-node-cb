const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        return res.end('Welcome to the homepage')
    }
    if (req.url === '/about') {
        return res.end('Here is our short history')
    }
    //This is the 404 page
    res.end(`
        <h1>Oops!</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href="/">back home</a>
    `)
})


server.listen(5001)