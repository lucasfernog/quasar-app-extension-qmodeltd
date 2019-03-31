<template>
  <q-model-td v-bind="$attrs" v-on="$listeners" :value="value" @input="onInput" :mode="mode">
    <template #default>
      <slot></slot>
    </template>

    <template v-slot:model-view="props">
      <q-input
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
import QModelTd from "./QModelTd";
import mixin from './mixin'

export default {
  components: {
    "q-model-td": QModelTd
  },

  mixins: [mixin]
};
</script>