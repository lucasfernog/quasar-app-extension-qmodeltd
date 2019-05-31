<template>
  <q-model-td v-bind="$attrs" v-on="$listeners" :value="value" @input="onInput" :mode="mode" @edit-start="onEditStart">
    <template #default>
      <slot></slot>
    </template>

    <template v-slot:model-view="props">
      <q-input
        ref="input"
        :value="value"
        @input="onInput"
        @blur="props.finishEdit"
        @keyup.enter="props.finishEdit"
        autofocus
        dense
        v-bind="$attrs"
      ></q-input>
    </template>
  </q-model-td>
</template>

<script>
import { QInput } from 'quasar'
import QModelTd from './QModelTd'
import mixin from './mixin'

export default {
  components: {
    QInput,
    QModelTd
  },

  mixins: [mixin],

  methods: {
    onEditStart () {
      if (this.mode === 'inline') {
        this.$nextTick(this.$refs.input.focus)
      }
    }
  }
};
</script>

<style lang="stylus">
  .inline-edit-container .q-field
    font-size 13px !important
    & input
      letter-spacing 0 !important

  .inline-edit-container .q-field__inner
    width 0!important
    height 31px
</style>
