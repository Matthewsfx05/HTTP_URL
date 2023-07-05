const http = require('http')

const PORT = 3000


// Atividade 1


// const server = http.createServer((req, res) => {
//     res.write('Olá, Mundo')
//     res.end()
//     });

//     server.listen(PORT, () => {
//         console.log(`Olá, Mundo`)
//     })


// Atividade 2


// const server = http.createServer((req, res) => {
//     if(req.url === '/home') {
//         res.writeHead(200, {'Content-Type':'text/plan'})
//         res.write('Bem vindo a página inicial!')
//         res.end()
//     }   
//     else if(req.url === '/about') {
//         res.writeHead(200, {'Content-Type':'text/plan'})
//         res.write('Sobre nós: somos uma epresa dedicada a...')
//         res.end()
//     }
// })