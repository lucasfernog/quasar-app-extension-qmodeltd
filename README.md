QModelTd
===

QModelTd is an `UI app extension` for [Quasar Framework v1](https://v1.quasar-framework.org/). It will not work with legacy versions of Quasar Framework.

This work is currently in `alpha` and there are expected changes while things get worked out.

> WARNING
>
> This app extension has been updated to work with changes that were released with `@quasar/app - 1.0.0-beta.9`. If you have not upgraded to at least `1.0.0-beta.9` this app extension will not work.

If you have installed before `@quasar/app - 1.0.0-beta.9` (or later) then follow these before upgrading Quasar if you previously had this extension installed:

1) Remove: `quasar ext remove qmodeltd`
2) Upgrade: `yarn upgrade`
3) Re-install: `quasar ext add qmodeltd`

# Installation
In your Quasar project:
```
quasar ext add qmodeltd
```

# Demo
Can be found [here](https://qmodeltd.netlify.com/#/).

# Test Project
Can be found [here](https://github.com/lucasfernog/quasar-app-extension-qmodeltd-test).

# Example Code
```
<q-tr :props="props">
  <q-editable-td
    key="desc"
    v-model="props.row.name"
    mode="popup"
    buttons
    :props="props"
  >{{ props.row.name }}</q-editable-td>
  <q-selectable-td
    key="company"
    :props="props"
    mode="inline"
    v-model="props.row.company"
    :options="options"
  >{{ props.row.company }}</q-selectable-td>
</q-tr>
```

---

# QModelTd Vue Properties
| Vue&nbsp;Property | Type | Description |
|---|---|---|
| mode | String | ['inline','popup'] This determines how the edit is displayed (inline on the QTd or through a QPopupEdit). (Default: 'popup') |

# QModelTd Vue Slots

| Vue&nbsp;Slots | Description |
|---|---|
| default | The slot rendered when NOT on edit mode.
| model-view | The slot rendered on edit mode. Contains a QInput when using QEditableTd, and a QSelect when using QSelectableTd.
