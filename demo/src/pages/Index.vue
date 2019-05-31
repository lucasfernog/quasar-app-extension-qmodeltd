<template>
  <div class="q-pa-md">

    <div class="column">
      <span>The QModelTd Quasar app extension can reduce the boilerplate code to make an <b>editable</b> or a <b>selectable</b> QTable column. 
        With the extension, you can replace something like this:</span>

      <code-prism lang="markup">
        {{ beforeCode }}
      </code-prism>

      <span>With this code:</span>

      <code-prism lang="markup">
        {{ afterCode }}
      </code-prism>

      <span>Also, you can define the edit mode as inline with the <i>mode</i> prop. The following table represents the usage of the app extension.</span>
    </div>

    <div class="q-pt-md">
      <q-table :data="data" :columns="columns" row-key="name" binary-state-sort>
        <template v-slot:body="props">
          <q-tr :props="props">
            <q-editable-td
              key="popupEdit"
              v-model="props.row.name"
              mode="popup"
              buttons
              :props="props"
            >{{ props.row.name }}</q-editable-td>
            <q-editable-td
              key="inlineEdit"
              v-model="props.row.name2"
              mode="inline"
              :props="props"
            >{{ props.row.name2 }}</q-editable-td>
            <q-selectable-td
              key="popupSelect"
              :props="props"
              mode="popup"
              v-model="props.row.company"
              :options="options"
            >{{ props.row.company }}</q-selectable-td>
            <q-selectable-td
              key="inlineSelect"
              :props="props"
              mode="inline"
              v-model="props.row.company2"
              :options="options"
            >{{ props.row.company2 }}</q-selectable-td>
          </q-tr>
        </template>
      </q-table>
    </div>
  </div>
</template>

<style>
</style>

<script>
import CodePrism from '../components/CodePrism'

export default {
  components: {
    CodePrism
  },
  data() {
    return {
      beforeCode: `<q-td key="desc" :props="props">
        {{ props.row.name }}
        <q-popup-edit v-model="props.row.name" buttons>
          <q-input v-model="props.row.name" dense autofocus />
        </q-popup-edit>
      </q-td>`,
      afterCode: `<q-editable-td key="desc" v-model="props.row.name" buttons :props="props">
        {{ props.row.name }}
      </q-editable-td>`,
      columns: [
        {
          name: "popupEdit",
          required: true,
          label: "Edit (mode=popup)",
          align: "left",
          field: row => row.name,
          sortable: true
        },
        {
          name: "inlineEdit",
          required: true,
          label: "Edit (mode=inline)",
          align: "left",
          field: row => row.name2,
          sortable: true
        },
        {
          name: "popupSelect",
          align: "left",
          label: "Select (mode=popup)",
          field: "company",
          sortable: true
        },
        {
          name: "inlineSelect",
          align: "left",
          label: "Select (mode=inline)",
          field: "company",
          sortable: true
        }
      ],
      data: [
        {
          name: "Frozen Yogurt",
          name2: "Frozen",
          company: "Google",
          company2: "Oracle"
        },
        {
          name: "Ice cream sandwich",
          name2: "Cream",
          company: "Google",
          company2: "Oracle"
        },
        {
          name: "Eclair",
          name2: "Eclair",
          company: "Facebook",
          company2: "Twitter"
        }
      ],
      options: ["Google", "Facebook", "Twitter", "Apple", "Oracle"]
    };
  },
  name: "PageIndex"
};
</script>