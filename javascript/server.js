//servidor

const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.json({message: 'Hello Cypress'})
})

app.get('/avengers', function(req, res) {
    let avengers = ['Tony Stark', 'Clint Barton', 'Natasha Romanoff', 'Steve Rogers']
    return res.json({data: avengers})
})

app.get('/cnh', function(req, res) {
    const idade = req.query.idade

    if (!idade) {
        return res.json({message: 'Idade é um campo obrigatório!'})
    }

    let idadeNum = parseInt(idade)

    if (idadeNum >= 18) {
        return res.json({message:'Ok, você pode tirar sua CNH'})
    } else if (idadeNum > 4) {
        return res.json({message:'Você é menor de idade, por enquanto sugiro andar de bike'})
    } else {
        return res.json({message:'Melhor você ir andar de andajar'})
    }
})

app.listen(3000)