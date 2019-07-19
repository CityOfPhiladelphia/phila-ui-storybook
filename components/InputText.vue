<template>
  <div
    class="input-wrap input-text"
    :class="{ required: $attrs.required !== undefined }"
  >
    <input
      class="input"
      v-bind="$attrs"
      :aria-labelledby="$attrs.id"
      :aria-required="$attrs.required !== undefined"
      :value="value"
      :type="type"
      :placeholder="placeholder"
      @input="$emit('input', $event.target.value)"
      @on="$listeners"
    >
    <label :for="$attrs.id">{{ placeholder }}</label>
  </div>
</template>
<script>
export default {
  name: "InputText",
  inheritAttrs: false,
  props: {
    name: {
      type: String,
      default: 'Field Name',
    },
    value: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: 'text',
    },
    placeholder: {
      type: String,
      default: 'Great new label',
    }
  },
};
</script>
<style lang="scss">
@import '../styles/InputText.scss';
</style>
