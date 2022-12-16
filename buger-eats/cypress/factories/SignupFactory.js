/**Não conseguir utilizar as bibliotecas "fakes" e "gerador-validador-cpf"*/

export default {
    deliver: function() {
        var data = {
            name: 'Érika Santana',
            cpf: '00000014114',
            email: 'erikatester@gmail.com',
            whatsapp: '91988882020',
            address: {
              postalcode: '66025190',
              street: 'Rua Osvaldo de Caldas Brito',
              number: '269',
              details: 'Portal da Amazônia',
              district: 'Jurunas',
              city_state: 'Belém/PA'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }

        return data
    }
}