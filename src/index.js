const placeHolderReplacer = require('simple-placeholder-replacer')

/**
 * Two scenarios : 
 *  - chained -> cytpress will fill subject as the resukt from the parent command and first args may be the key/value map
 * - not chained -> subject will be undefined and args[0] will be the source and (optional) args[1] as the key/value map 
 */
Cypress.Commands.add('replacePlaceholders', { prevSubject: 'optional' }, (subject, arg1, arg2) => {
    var placeholders = {}
    var source = null
    if (subject) {
        source = subject
        placeholders = arg1 || placeholders
    } else {
        source = arg1
        placeholders = arg2 || placeholders
    }
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