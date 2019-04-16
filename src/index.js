/**
 * Quasar App Extension index/runner script
 * (runs on each dev/build)
 *
 * API: https://github.com/quasarframework/quasar/blob/master/app/lib/app-extension/IndexAPI.js
 */

const extendWithModelTd = function (conf) {
  // make sure qmodeltd boot file is registered
  boot.push('~quasar-app-extension-qmodeltd/boot/qmodeltd.js')

  // make sure boot file transpiles
  conf.build.transpileDependencies.push(/quasar-app-extension-qmodeltd[\\/]src/)
  console.log(` App Extension (qmodeltdr) Info: 'Adding qmodeltd boot reference to your quasar.conf.js'`)
}

module.exports = function (api) {
  api.compatibleWith('@quasar/app', '^1.0.0-beta.18')

  api.registerDescribeApi('QModelTd', './component/QModelTd.json')
  api.registerDescribeApi('QEditableTd', './component/QEditableTd.json')
  api.registerDescribeApi('QSelectableTd', './component/QSelectableTd.json')

  api.extendQuasarConf(extendWithModelTd)
}
