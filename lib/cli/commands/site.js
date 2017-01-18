const Hakuin = require('../../index')

exports.command = 'site'

exports.describe = 'Create the whole site'

exports.builder = yargs =>
  yargs
    .demandOption(['config'])
    .describe('config', 'Path to config file')
    .example('$0 site --config=hakuin.yml')

exports.handler = argv => {
  const opts = {
    config: argv.config,
    debug: argv.debug
  }

  Hakuin.generate(opts)
    .then((state) =>
      console.log(`✅  ${state.config.name} generated!`))
    .catch((error) => {
      console.error(`🚨  generating the site failed! \n\n${error}`)
      process.exit(1)
    })
}

