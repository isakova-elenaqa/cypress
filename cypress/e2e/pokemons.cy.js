describe ('Покупка аватара', function () {

    it('e2e тест на покупку нового аватара для тренера', function () {
         cy.visit('https://pokemonbattle.ru/');
         cy.get(':nth-child(1) > .auth__input').type('shtefanko.elena@yandex.ru');
         cy.get('#password').type('Kirill2014');
         cy.get('.auth__button').click();

         cy.get('.header__container > .header__id').click();
         cy.get('[href="/shop"]').click();
         cy.get(':nth-child(12) > .shop__button').first().click();
         cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4620 8691 1363 2996');
         cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');
         cy.get(':nth-child(1) > .pay_base-input-v2').type('1225');
         cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('NAME');
         cy.get('.pay-btn').click();
         cy.get('#cardnumber').type('56456');
         cy.get('.payment__submit-button').click();
         cy.get('.payment__font-for-success').contains('Покупка прошла успешно');
         cy.get('.payment__adv').should('be.visible');

        })

})
