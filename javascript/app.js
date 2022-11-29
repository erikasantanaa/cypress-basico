

let avengers = ['Tony Stark', 'Clint Barton', 'Natasha Romanoff', 'Steve Rogers']

function listaVingadores() {

    let ul = document.getElementById('avengers')
    ul.innerHTML = ''

    avengers.forEach(function(a){
        let li = document.createElement('li')
        let text = document.createTextNode(a)
        li.appendChild(text)
        ul.appendChild(li)
    })

}

function verificarIdade() {

    let nome = document.querySelector('input[name=nome]')
    let idade = document.querySelector('input[name=idade')

    if (idade.value.length == 0 ) {
        alert( 'Idade é um campo obrigatório!')
        return
    }

    let idadeNum = parseInt(idade.value)

    if (idadeNum >= 18) {
        alert('Ok, você pode tirar sua CNH')
    } else if (idadeNum > 4) {
        alert('Você é menor de idade, por enquanto sugiro andar de bike')
    } else {
        alert('Melhor você ir andar de andajar')
    }
}
