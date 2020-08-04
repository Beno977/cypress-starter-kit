# Cypress Starter Kit

A no-nonsense Cypress template for copying into new or existing projects, with some sensible defaults and useful helper functions.

## What's included

- A sample `cypress.json` file and associated folder structure.
- A `cy.login()` [custom command](https://docs.cypress.io/api/cypress-api/custom-commands.html), making use of an `auth.json` [fixture](https://docs.cypress.io/api/commands/fixture.html).
- Some example smoke tests for [the-internet.herokuapp.com](https://the-internet.herokuapp.com/) in the `sample-test.js` file, with inline documentation.
- A `routes.js` file with examples, demonstrating how [cy.route()](https://docs.cypress.io/api/commands/route.html) can be used for conditional waits.
- Empty `before()` and `beforeEach()` [Mocha hooks](https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests.html#Hooks) in the `index.js` file. You could use these to run Cypress commands that run before
- A `tsconfig.json` file in the `/tests/cypress` folder that will provide Intellisense code completion in supported code editors.
- A sample `package.json` file, for demonstrating the `cypress:open` and `cypress` scripts that can be triggered via `npm run`

## Pre-requisites

- A recent version of [Node.js](https://nodejs.org/en/), installed via the official installer or the package manager of your choice.
- [Git](https://git-scm.com/), if you're a Windows user and haven't already installed it.
- A local copy of your project's Git repository. If you don't have an actual project to work with, make a new folder called `cypress-playground` or similar.
- (Optional) A code editor that supports [Intellisense code completion](https://docs.cypress.io/guides/tooling/IDE-integration.html#Intelligent-Code-Completion), such as [VS Code](https://code.visualstudio.com/).

## Setup

- Copy the `cypress.json` file into your project's root directory.
- Copy over the `/tests/` directory, or just the enclosed `/tests/cypress/` directory if you already have a tests directory.
  -- (If you decide to put the `cypress/` directory somewhere other than `/tests/`, adjust the relevant `cypress.json` values accordingly.
- Browse to your project's root directory from the command line, then run `npx cypress open` to download Cypress to your machine and start the UI Test Runner.
  -- Select `sample-test.js` from the list of tests, then watch them run and (hopefully!) pass
  -- You can stop the UI Test Runner simply by closing its window(s), or by typing `Ctrl + C` at the command line.
- Update the `baseUrl` in `cypress.json` to your project's local/integration environment, then start [writing tests](https://docs.cypress.io/guides/getting-started/writing-your-first-test.html)!
  -- Tests that are currently open in the UI Test Runner will automatically restart whenever a relevant file is modified, so you can see your tests pass or fail in real time.
- You can also kick off a headless test run of the Sample test suite using `npx cypress run`.

### Adding Cypress to your project

To permanently add Cypress to a project that is already using npm or yarn, run _one_ of the following commands to install Cypress as a development dependency:

```
npm install cypress --save-dev
yarn add cypress -D
```

If the project does not have a package.json, you will first need to run `npm init` or `yarn init`

From there, add the following to the scripts section of your `package.json`:
```
"cypress": "cypress run",
"cypress:open": "cypress open"
```

This will allow you to launch the UI Test Runner using `npm run cypress:open` and the CLI Test Runner using `npm run cypress` (or their Yarn equivalents)

That's it! If you need any help with any of the above, contact me on Twitter ([@RightSaidJames](https://twitter.com/rightsaidjames)) or find me on the [Ministry of Testing Slack](https://www.ministryoftesting.com/slack_invite). 

If you want to learn more about [Cypress commands](https://docs.cypress.io/api/commands/get.html) and ['best practices'](https://docs.cypress.io/guides/references/best-practices.html), check out the amazingly detailed [Cypress Docs](https://docs.cypress.io/).

## Contributing

Contributions to this repository are warmly welcomed, especially:
- Improvements to the setup instructions
- Improvements to inline documentation 
- Additional example tests and custom commands

If in doubt, raise an issue first and I'll respond as soon as I can.