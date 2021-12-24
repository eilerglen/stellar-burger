const {CracoAliasPlugin, configPaths} = require('react-app-rewire-alias')
const path = require(`path`)

module.exports = {
  plugins: [
    {
      plugin: CracoAliasPlugin,
      options: {alias: {
        react: path.resolve('./node_modules/react')
      }}
    }
  ]
}