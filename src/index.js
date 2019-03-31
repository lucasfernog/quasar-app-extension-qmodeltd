/**
 * Quasar App Extension index/runner script
 * (runs on each dev/build)
 *
 * API: https://github.com/quasarframework/quasar/blob/master/app/lib/app-extension/IndexAPI.js
 */

const extendWithModelTd = function (api, conf) {
  // make sure there is a framework section
  if (!conf.framework) {
    conf.framework = {}
  }

  // make sure there is a components array
  if (!conf.framework.components) {
    conf.framework.components = []
  }

  // for brevity
  let components = conf.framework.components

  // make sure component QTd is added
  if (!components.includes('QTd')) {
    console.log(` App Extension (qmodeltd) Info: 'Adding QTd component - consider adding this to your quasar.conf.js'`)
    components.push('QTd')
  }
  // make sure component QPopupEdit is added
  if (!components.includes('QPopupEdit')) {
    console.log(` App Extension (qmodeltd) Info: 'Adding QPopupEdit component - consider adding this to your quasar.conf.js'`)
    components.push('QPopupEdit')
  }
  // make sure component QInput is added
  if (!components.includes('QInput')) {
    console.log(` App Extension (qmodeltd) Info: 'Adding QInput component - consider adding this to your quasar.conf.js'`)
    components.push('QInput')
  }

  // make sure there is a boot array
  if (!conf.boot) {
    conf.boot = []
  }

  // for brevity
  let boot = conf.boot

  // make sure qmodeltd boot file is registered

  if (!boot.includes('~quasar-app-extension-qmodeltd/boot/qmodeltd.js')) {
    boot.push('~quasar-app-extension-qmodeltd/boot/qmodeltd.js')
    // make sure boot file transpiles
    conf.build.transpileDependencies.push(/quasar-app-extension-qmodeltd[\\/]src[\\/]boot/)
    console.log(` App Extension (qmodeltdr) Info: 'Adding qmodeltd boot reference to your quasar.conf.js'`)
  }
}

module.exports = function (api, ctx) {
  api.registerDescribeApi('QModelTd', '../component/QModelTd.json')
  api.registerDescribeApi('QEditableTd', '../component/QEditableTd.json')
  api.registerDescribeApi('QSelectableTd', '../component/QSelectableTd.json')
  api.extendQuasarConf((conf) => {
    extendWithModelTd(api, conf)
  })
}