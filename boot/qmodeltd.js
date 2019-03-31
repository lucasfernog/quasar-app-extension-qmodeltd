import {
  QEditableTd, QSelectableTd
} from 'quasar-app-extension-qmodeltd/component'

export default async ({
  Vue
}) => {
  Vue.component('q-editable-td', QEditableTd)
  Vue.component('q-selectable-td', QSelectableTd)
}