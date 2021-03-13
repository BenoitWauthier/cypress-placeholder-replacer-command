const placeHolderReplacer = require('simple-placeholder-replacer')

Cypress.Commands.add('replacePlaceholders', { prevSubject: 'optional' }, (subject, ...args) => {
    var placeholders = {}
    var placeholdersIdx = (args.length > (subject ? 0 : 1)) ? args.length-1 : -1
    if (placeholdersIdx > -1) {
        placeholders = args[placeholdersIdx] || {}
        console.log('-------> placeholders from args ', placeholders)
    }
    const source = subject ? subject : args[0]
    console.log('-------> ', subject)
    console.log('-------> ', source)
    console.log('-------> ', placeholders)
    cy.wrap(placeHolderReplacer(source, placeholders))
})

Cypress.Commands.add('expectDeepEquals', { prevSubject: false }, (actual, expected, placeholders = {}) => {
    const actualFormatted = placeHolderReplacer(actual, placeholders)
    const expectedFormatted = placeHolderReplacer(expected, placeholders)
    cy.expect(castAsJson(actualFormatted)).to.deep.eq(castAsJson(expectedFormatted))
})

const castAsJson = (source) => {
    if (typeof source === "object") {
        return source
    }
    return JSON.parse(source)
}