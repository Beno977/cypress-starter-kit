const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://deepstats.feedconstruct.com/dashboard',
  },
})