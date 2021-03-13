const placeHolderReplacer = require('simple-placeholder-replacer')

Cypress.Commands.add('replacePlaceholders', { prevSubject: 'optional' }, (subject, ...args) => {
    var placeholders = {}
    var placeholdersIdx = (args.length > (subject ? 0 : 1)) ? args.length-1 : -1
    if (placeholdersIdx > -1) {
        placeholders = args[placeholdersIdx] || {}
    }
    const source = subject ? subject : args[0]
    cy.wrap(placeHolderReplacer(source, placeholders))
})

Cypress.Commands.add('expectDeepEquals', { prevSubject: false }, (actual, expected, placeholders = {}) => {
    const expectedFormatted = placeHolderReplacer(expected, placeholders)
    cy.expect(castAsJson(actual)).to.deep.eq(castAsJson(expectedFormatted))
})

const castAsJson = (source) => {
    if (typeof source === "object") {
        return source
    }
    return JSON.parse(source)
}