<template>
  <q-model-td v-bind="$attrs" v-on="$listeners" :value="value" @input="onInput" :mode="mode" @edit-start="onEditStart">
    <template #default>
      <slot></slot>
    </template>

    <template v-slot:model-view="props">
      <q-select
        ref="select"
        :value="value"
        @input="(val) => onInput(val) || props.finishEdit()"
        @blur="props.finishEdit"
        @keyup.enter="props.finishEdit"
        @click.native.stop
        autofocus
        dense
        options-dense
        v-bind="$attrs"
      ></q-select>
    </template>
  </q-model-td>
</template>

<script>
import { QSelect } from 'quasar'
import QModelTd from './QModelTd'
import mixin from './mixin'

export default {
  components: {
    QSelect,
    QModelTd
  },

  methods: {
    onEditStart () {
      if (this.mode === 'inline') {
        this.$nextTick(this.$refs.select.focus)
      }
    }
  },

  mixins: [mixin]
};
</script>

<style lang="stylus">
  .inline-edit-container .q-field__native
    font-size 13px
</style>
