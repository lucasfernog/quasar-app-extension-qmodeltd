<template>
  <q-td @click.native="onTdClick" @keyup.native.esc="cancelEdit">
    <div v-show="mode !== 'inline' || !editing">
      <slot></slot>
    </div>
    <template v-if="mode === 'inline'">
      <template v-if="editing">
        <slot name="model-view" v-bind="{finishEdit, cancelEdit}"></slot>
      </template>
    </template>
    <q-popup-edit v-else :value="value" @input="onInput" v-bind="$attrs">
      <slot name="model-view" v-bind="{finishEdit, cancelEdit}"></slot>
    </q-popup-edit>
  </q-td>
</template>

<script>

import mixin from './mixin'

export default {
  name: "QModelTd",

  mixins: [mixin],

  methods: {
    onTdClick() {
      this.preEditValue = this.value;
      this.editing = !this.editing;
    },
    finishEdit() {
      this.editing = false;
    },
    cancelEdit() {
      this.onInput(this.preEditValue);
      this.finishEdit();
    }
  },

  data() {
    return {
      editing: false,
      preEditValue: void 0
    };
  }
};
</script>