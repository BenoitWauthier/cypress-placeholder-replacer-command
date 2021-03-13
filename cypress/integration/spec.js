import '../../src/index'
const moment = require('moment')

describe('Testing the replacePlaceholders command', () => {

    it('Simple string with date plcaholder replacement', () => {
        cy.replacePlaceholders('{{TODAY}}').then(today => {
            expect(today).to.equal(moment().format('YYYY-MM-DD'))
        })
    })

    it('Fixture with placeholders replacement', () => {
        const placeHolders = {
            name: "Wauthier",
            firstname: "Benoit"
        }
        cy.fixture('source.json').replacePlaceholders(placeHolders).then(replaced => {
            expect(replaced.tomorrow).to.equal(moment().add(1, 'd').format('YYYY-MM-DD'))
            expect(replaced.myName).to.equal('Wauthier')
            expect(replaced.myFirstName).to.equal('Benoit')
        })
    })

    it('Deep equals test', () => {
        const placeHolders = {
            name: "Wauthier",
            firstname: "Benoit"
        }
        cy.fixture('source.json').replacePlaceholders(placeHolders).then(replaced => {
            cy.expectDeepEquals(replaced, '{"tomorrow": "{{today+1}}", "myName": "Wauthier", "myFirstName": "Benoit"}')
            cy.expectDeepEquals(replaced, '{"tomorrow": "{{today+1}}", "myName": "{{NAME}}", "myFirstName": "{{FIRSTNAME}}"}', placeHolders)
        })
    })
})