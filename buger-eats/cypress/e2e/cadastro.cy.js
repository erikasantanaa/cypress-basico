describe('Cadastro', ()=> {
  it('usuário deve se tornar um entregador', ()=> {
    cy.viewport(1440, 900)
    cy.visit('https://buger-eats.vercel.app')

    cy.get('a[href="/deliver"]').click()
    cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')
  
      
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
    
    cy.get('input[name="name"]').type(deliver.name)
    cy.get('input[name="cpf"]').type(deliver.cpf)
    cy.get('input[name="email"]').type(deliver.email)
    cy.get('input[name="whatsapp"]').type(deliver.whatsapp)

    cy.get('input[name="postalcode"]').type(deliver.address.postalcode)
    cy.get('input[type="button"][value="Buscar CEP"]').click()
    cy.get('input[name="address-number"]').type(deliver.address.number)
    cy.get('input[name="address-details"]').type(deliver.address.details)
    
    cy.get('input[name="address"]').should('have.value', deliver.address.street)
    cy.get('input[name="district"]').should('have.value', deliver.address.district)
    cy.get('input[name="city-uf"]').should('have.value', deliver.address.city_state)

    cy.contains('.delivery-method li', deliver.delivery_method).click()

    cy.get('input[accept^=image]').attachFile('/images/'+ deliver.cnh)

    cy.get('form button[type="submit"]').click()

    const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'

    cy.get('.swal2-container .swal2-html-container').should('have.text', expectedMessage)

  })

  //Cenários não felizes
  it('CPF inválido', ()=> {
    cy.viewport(1440, 900)
    cy.visit('https://buger-eats.vercel.app')

    cy.get('a[href="/deliver"]').click()
    cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')
  
      
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
    
    cy.get('input[name="name"]').type(deliver.name)
    cy.get('input[name="cpf"]').type(deliver.cpf)
    cy.get('input[name="email"]').type(deliver.email)
    cy.get('input[name="whatsapp"]').type(deliver.whatsapp)

    cy.get('input[name="postalcode"]').type(deliver.address.postalcode)
    cy.get('input[type="button"][value="Buscar CEP"]').click()
    cy.get('input[name="address-number"]').type(deliver.address.number)
    cy.get('input[name="address-details"]').type(deliver.address.details)
    
    cy.get('input[name="address"]').should('have.value', deliver.address.street)
    cy.get('input[name="district"]').should('have.value', deliver.address.district)
    cy.get('input[name="city-uf"]').should('have.value', deliver.address.city_state)

    cy.contains('.delivery-method li', deliver.delivery_method).click()

    cy.get('input[accept^=image]').attachFile('/images/'+ deliver.cnh)

    cy.get('form button[type="submit"]').click()

    cy.get('.alert-error').should('have.text', 'Oops! CPF inválido')
  })
})
