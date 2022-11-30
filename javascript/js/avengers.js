
//api
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

