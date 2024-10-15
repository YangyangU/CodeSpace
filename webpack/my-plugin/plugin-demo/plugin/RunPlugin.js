// plugin/RunPlugin.js
class RunPlugin {
    constructor(options) {
      // opitons为配置文件中传入的options
      this.options = options
    }
    apply(compiler) {
      compiler.hooks.run.tap('runName', () => {
        console.log('runPluginStart', this.options.name)
      })
    }
  }
  module.exports = RunPlugin
  