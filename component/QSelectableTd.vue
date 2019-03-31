<template>
  <q-model-td v-bind="$attrs" v-on="$listeners" :value="value" @input="onInput" :mode="mode">
    <template #default>
      <slot></slot>
    </template>

    <template v-slot:model-view="props">
      <q-select
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
import QModelTd from "./QModelTd";
import mixin from './mixin'

export default {
  components: {
    "q-model-td": QModelTd
  },

  mixins: [mixin]
};
</script>