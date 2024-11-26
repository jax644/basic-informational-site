// localhost:8080 should take users to index.html
// localhost:8080/about should take users to about.html
// localhost:8080/contact-me should take users to contact-me.html
// 404.html should display any time the user tries to go to a page not listed above.

// Import HTTP and FS modules by requiring them
// const http = require('http')
// const fs = require('fs')
// const path = require('path')


// Create the server

const express = require('express')
const app = express()
const authorRouter = require('./routes/authorRouter')

app.use('/authors', authorRouter)


app.get('/', (req,res) => {
  res.sendFile(__dirname + "/index.html")
})

app.get('/about', (req,res) => {
  res.sendFile(__dirname + "/about.html")
})

app.get('/contact-me', (req, res) => {
  res.sendFile(__dirname + "/contact-me.html")
})

app.get('/*', (req,res) => {

  res.sendFile(__dirname + "/404.html")
})

const PORT = 3000
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

// const server = http.createServer((req, res) => {
//     let filePath = '';
//     let contentType = 'text/html';
  
//     // Determine the file path based on the URL
//     switch (req.url) {
//       case '/':
//         filePath = 'index.html';
//         break;
//       case '/about':
//         filePath = 'about.html';
//         break;
//       case '/contact-me':
//         filePath = 'contact-me.html';
//         break;
//       default:
//         filePath = '404.html';
//     }
  
//     // Read the file and serve it
//     fs.readFile(path.join(__dirname, filePath), (err, content) => {
//       if (err) {
//         res.writeHead(500, { 'Content-Type': 'text/plain' });
//         res.end('Server Error');
//       } else {
//         res.writeHead(res.statusCode || 200, { 'Content-Type': contentType });
//         res.end(content);
//       }
//     });
//   });

