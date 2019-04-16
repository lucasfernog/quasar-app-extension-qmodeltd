<template>
  <q-td @click.native="onTdClick" @keyup.native.esc="cancelEdit">
    <div v-show="mode !== 'inline' || !editing">
      <slot></slot>
    </div>
    <template v-if="mode === 'inline'">
      <div class="inline-edit-container" v-show="editing">
        <slot name="model-view" v-bind="{finishEdit, cancelEdit}" ></slot>
      </div>
    </template>
    <q-popup-edit v-else :value="value" @input="onInput" v-bind="$attrs">
      <slot name="model-view" v-bind="{finishEdit, cancelEdit}"></slot>
    </q-popup-edit>
  </q-td>
</template>

<script>
import { QTd, QPopupEdit } from 'quasar'
import mixin from './mixin'

export default {
  name: "QModelTd",

  components: {
    QTd,
    QPopupEdit
  },

  mixins: [mixin],

  methods: {
    onTdClick() {
      this.preEditValue = this.value;
      this.editing = true;
      this.$emit('edit-start')
    },
    finishEdit() {
      this.editing = false;
      this.$emit('edit-finish')
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

<style lang="stylus">
  .inline-edit-container
    height 30px
</style>
