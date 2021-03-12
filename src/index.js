const placeHolderReplacer = require('simple-placeholder-replacer')

Cypress.Commands.add('replacePlaceholders', { prevSubject: 'optional' }, (subject, placeholders, source = null) => {
    var formattedOutput = null
    if (subject) {
        formattedOutput = placeHolderReplacer(subject, placeholders)
    } else if (source) {
        formattedOutput = placeHolderReplacer(source, placeholders)
    }
    cy.wrap(formattedOutput)
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