# cypress-placeholder-replacer-command
[![Build Status](https://travis-ci.com/BenoitWauthier/cypress-placeholder-replacer-command.svg?branch=main)](https://travis-ci.com/github/BenoitWauthier/cypress-placeholder-replacer-command)
![dependencies Status](https://img.shields.io/david/BenoitWauthier/cypress-placeholder-replacer-command)
![devDependencies Status](https://img.shields.io/david/dev/BenoitWauthier/cypress-placeholder-replacer-command?label=devDependencies)
[![Known Vulnerabilities](https://snyk.io/test/github/BenoitWauthier/cypress-placeholder-replacer-command/badge.svg)](https://snyk.io/test/github/BenoitWauthier/cypress-placeholder-replacer-command)

![Npm version](https://img.shields.io/npm/v/cypress-placeholder-replacer-command?label=latest-version)
![Npm downloads](https://img.shields.io/npm/dm/cypress-placeholder-replacer-command)
![Npm download size](https://img.shields.io/bundlephobia/min/cypress-placeholder-replacer-command)
![Last Commit](https://img.shields.io/github/last-commit/BenoitWauthier/cypress-placeholder-replacer-command)
![Contributors](https://img.shields.io/github/contributors/BenoitWauthier/cypress-placeholder-replacer-command)

A collection of two cypress commands :
- replacePlaceholders : provides the ability to replace placeholders within json object or string
- expectDeepEquals : provides the ability to expect two json objects (or string) to be tested as being "deeply" equal while optionally replacing placeholders within the "expected" item if a map with placeholders / values is provided

The replacePlaceholders can be (optionally) chained as child command of e.g. a fixture command
Internally it is using the [simple-placeholder-replacer](https://github.com/BenoitWauthier/simple-placeholder-replacer)

## Installation

To install with npm:

```
npm i cypress-placeholder-replacer-command --save
```

## Usage

Usage within Cypress:

```
import 'cypress-fill-command'

cy.replacePlaceholders("My name is {{myName}}", {myName: "Benoit Wauthier"})
cy.fixture("myfixutres/mynamefixture.json).replacePlaceholders({myName: "Benoit Wauthier"})
cy.expectDeepEquals(actual, expected)
cy.expectDeepEquals(actual, expected, {myName: "Benoit Wauthier"})

```

## Release

```
npm version major / minor / patch
git push origin ${tagName}

```

## License

This is licensed under an MIT License. [See details](LICENSE)
