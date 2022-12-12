import SignupPage from "../pages/SignupPage"

describe('Cadastro', ()=> {
  it('usuário deve se tornar um entregador', ()=> {
      
    /**massa de teste*/
    var deliver = {
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

    var signup = new SignupPage()
    signup.go()
    signup.fillForm(deliver)
    signup.submit()
    const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
    signup.modalContentShouldBe(expectedMessage)
  })

  //Cenários não felizes
  it('CPF inválido', ()=> {

    /**massa de teste*/
    var deliver = {
      name: 'Érika Santana',
      cpf: '000000141AA',
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

    var signup = new SignupPage()
    signup.go()
    signup.fillForm(deliver)
    signup.submit()
    signup.alertMessageShouldBe('Oops! CPF inválido')
  })
})
